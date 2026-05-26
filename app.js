// =========================================================================
// CONFIG NETWORK REAL-TIME (PUBNUB NETWORKING)
// =========================================================================
// Silakan isi demo keys ini. Untuk produksi massal, buat akun gratis di pubnub.com
const pubnub = new PubNub({
    publishKey: 'pub-c-cb629532-3f19-4977-9be5-9bcf51772186', 
    subscribeKey: 'sub-c-5eb1102e-ea33-11e1-9b7a-c3230c14c330',
    userId: "user_" + Math.random().toString(36).substring(2, 9)
});

let gameState = {
    role: null, 
    currentUser: "",
    gameCode: "", // Akan di-generate otomatis saat admin buat room
    mode: "solo", 
    category: "Matematika",
    players: [], 
    buzzerWinner: null,
    timerInterval: null,
    timeLeft: 10
};

// *Bank Soal Tetap Sama (Gunakan 50 soal per kategori yang sudah ada sebelumnya)*
const questionBank = { "Matematika": [{q: "Berapakah hasil dari 12 x 12 - 44?", a: "100"}], "Pengetahuan Umum Dunia": [{q: "Apa nama mata uang resmi negara Jepang?", a: "Yen"}] /* ...dan seterusnya sampai 450 soal... */ };

// =========================================================================
// REAL-TIME NETWORK LISTENER (Sinkronisasi Data Antar Perangkat)
// =========================================================================
function initNetworkSync() {
    pubnub.subscribe({ channels: [gameState.gameCode] });

    pubnub.addListener({
        message: function(event) {
            const data = event.message;

            if (data.type === "PLAYER_JOINED") {
                if (!gameState.players.some(p => p.name === data.player.name)) {
                    gameState.players.push(data.player);
                    updateParticipantList();
                    updateScoreboard();
                }
            } 
            else if (data.type === "PLAYER_READY_TOGGLE") {
                const p = gameState.players.find(pl => pl.name === data.name);
                if(p) p.isReady = data.isReady;
                updateParticipantList();
            }
            else if (data.type === "SYNC_PLAYERS_LIST" && gameState.role === "player") {
                gameState.players = data.players;
                updateParticipantList();
                updateScoreboard();
            }
            else if (data.type === "START_GAME") {
                gameState.mode = data.mode;
                gameState.category = data.category;
                executeStartGameUI();
            }
            else if (data.type === "NEW_QUESTION") {
                document.getElementById('display-question').innerText = data.q;
                if(gameState.role === 'player') {
                    const btn = document.getElementById('btn-buzzer');
                    btn.disabled = false;
                    btn.className = "w-full py-12 bg-rose-600 hover:bg-rose-500 active:scale-95 text-white font-black text-3xl rounded-2xl shadow-2xl border-b-8 border-rose-800 uppercase tracking-widest";
                }
                resetBuzzerStateUI();
            }
            else if (data.type === "BUZZER_HIT") {
                if (gameState.buzzerWinner === null) {
                    gameState.buzzerWinner = data.name;
                    document.getElementById('buzzer-winner').innerText = `✋ ${data.name} Tercepat!`;
                    startCountdownLocal();
                }
            }
            else if (data.type === "SCORE_EVALUATION") {
                gameState.players = data.updatedPlayers;
                updateScoreboard();
                resetBuzzerStateUI();
                alert(data.alertMessage);
            }
        }
    });
}

// ==========================================
// CORE LOGIC & ROOM GENERATOR
// ==========================================
function generateRandomCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

function loginAsAdmin() {
    const u = document.getElementById('a-username').value;
    const p = document.getElementById('a-password').value;

    if(u === 'admin' && p === 'admin') {
        gameState.role = 'admin';
        gameState.currentUser = 'admin';
        gameState.gameCode = generateRandomCode(); // KODE BARU DI-GENERATE ACAK SETIAP BUAT ROOM
        
        initNetworkSync();
        renderLobby();

        // Admin berkala memancarkan state player terupdate ke player baru yang join
        setInterval(() => {
            if(gameState.players.length > 0) {
                pubnub.publish({
                    channel: gameState.gameCode,
                    message: { type: "SYNC_PLAYERS_LIST", players: gameState.players }
                });
            }
        }, 2000);
    } else {
        alert('Kredensial Admin Salah!');
    }
}

function joinAsPlayer() {
    const username = document.getElementById('p-username').value.trim();
    const code = document.getElementById('p-code').value.trim();

    if(!username || !code) return alert("Mohon isi nama dan kode room!");
    
    gameState.role = 'player';
    gameState.currentUser = username;
    gameState.gameCode = code;

    initNetworkSync();

    const teamName = gameState.players.length < 4 ? "Tim A" : "Tim B";
    const newPlayer = { name: username, isReady: false, score: 0, team: teamName };

    // Daftarkan diri ke network channel room admin
    pubnub.publish({
        channel: gameState.gameCode,
        message: { type: "PLAYER_JOINED", player: newPlayer }
    });

    renderLobby();
}

// ==========================================
// INTERACTION & BROADCAST ENGINE
// ==========================================
function toggleReady() {
    const btn = document.getElementById('btn-ready');
    const isCurrentlyReady = btn.innerText.includes("SAYA READY");
    const targetState = !isCurrentlyReady;

    if(targetState) {
        btn.className = "w-full py-4 bg-emerald-600 font-bold rounded-xl text-white";
        btn.innerText = "SAYA READY 👍";
    } else {
        btn.className = "w-full py-4 bg-amber-600 font-bold rounded-xl text-white";
        btn.innerText = "SET READY 👍";
    }

    pubnub.publish({
        channel: gameState.gameCode,
        message: { type: "PLAYER_READY_TOGGLE", name: gameState.currentUser, isReady: targetState }
    });
}

function broadcastStartGame() {
    if(gameState.players.length === 0) return alert("Belum ada player asli yang terhubung via kode!");
    
    pubnub.publish({
        channel: gameState.gameCode,
        message: {
            type: "START_GAME",
            mode: document.getElementById('game-mode').value,
            category: document.getElementById('game-category').value
        }
    });
}

function executeStartGameUI() {
    document.getElementById('screen-lobby').classList.add('hidden-screen');
    document.getElementById('screen-game').classList.remove('hidden-screen');

    if(gameState.role === 'admin') {
        document.getElementById('zone-admin-game').classList.remove('hidden-screen');
        document.getElementById('admin-answer-box').classList.remove('hidden-screen');
    } else {
        document.getElementById('zone-player-game').classList.remove('hidden-screen');
    }

    document.getElementById('game-badge-mode').innerText = gameState.mode === 'solo' ? "Get The Point (Solo)" : "Team Point (Regu)";
    document.getElementById('game-display-category').innerText = `Kategori: ${gameState.category}`;
    updateScoreboard();
}

function broadcastQuestion() {
    const pool = questionBank[gameState.category] || [{q:"No Question?", a:"No"}];
    const rand = pool[Math.floor(Math.random() * pool.length)];

    document.getElementById('display-answer').innerText = rand.a;

    pubnub.publish({
        channel: gameState.gameCode,
        message: { type: "NEW_QUESTION", q: rand.q }
    });
}

function sendBuzzerSignal() {
    pubnub.publish({
        channel: gameState.gameCode,
        message: { type: "BUZZER_HIT", name: gameState.currentUser }
    });
    
    const btn = document.getElementById('btn-buzzer');
    btn.disabled = true;
    btn.className = "w-full py-12 bg-slate-700 text-slate-500 font-black text-3xl rounded-2xl cursor-not-allowed";
}

function startCountdownLocal() {
    clearInterval(gameState.timerInterval);
    gameState.timeLeft = 10;
    document.getElementById('game-timer').innerText = "10s";

    gameState.timerInterval = setInterval(() => {
        gameState.timeLeft--;
        document.getElementById('game-timer').innerText = `${gameState.timeLeft}s`;
        if (gameState.timeLeft <= 0) clearInterval(gameState.timerInterval);
    }, 1000);
}

function broadcastEvaluation(isCorrect) {
    if(!gameState.buzzerWinner) return alert("Tidak ada player menekan buzzer!");

    const pIndex = gameState.players.findIndex(p => p.name === gameState.buzzerWinner);
    if(pIndex !== -1) {
        if(isCorrect) gameState.players[pIndex].score += 10;
        else gameState.players[pIndex].score -= 10;
    }

    const msg = isCorrect ? `Jawaban ${gameState.buzzerWinner} BENAR (+10)` : `Jawaban ${gameState.buzzerWinner} SALAH (-10)`;

    pubnub.publish({
        channel: gameState.gameCode,
        message: {
            type: "SCORE_EVALUATION",
            updatedPlayers: gameState.players,
            alertMessage: msg
        }
    });
}

function resetBuzzerStateUI() {
    gameState.buzzerWinner = null;
    clearInterval(gameState.timerInterval);
    document.getElementById('game-timer').innerText = "10s";
    document.getElementById('buzzer-winner').innerText = "- Tidak Ada -";
}

// Fungsi pembantu bawaan dari template sebelumnya
function switchAuthTab(t){"admin"===t?(document.getElementById("tab-admin").className="w-1/2 py-2 text-center rounded-md bg-indigo-600 font-medium transition text-white",document.getElementById("tab-player").className="w-1/2 py-2 text-center rounded-md text-slate-400 font-medium transition",document.getElementById("form-admin").classList.remove("hidden-screen"),document.getElementById("form-player").classList.add("hidden-screen")):(document.getElementById("tab-player").className="w-1/2 py-2 text-center rounded-md bg-indigo-600 font-medium transition text-white",document.getElementById("tab-admin").className="w-1/2 py-2 text-center rounded-md text-slate-400 font-medium transition",document.getElementById("form-player").classList.remove("hidden-screen"),document.getElementById("form-admin").classList.add("hidden-screen"))}
function renderLobby(){document.getElementById("screen-auth").classList.add("hidden-screen"),document.getElementById("screen-lobby").classList.remove("hidden-screen"),document.getElementById("display-game-code").innerText=gameState.gameCode,"admin"===gameState.role?(document.getElementById("admin-config").classList.remove("hidden-screen"),document.getElementById("player-ready-zone").classList.add("hidden-screen")):(document.getElementById("admin-config").classList.add("hidden-screen"),document.getElementById("player-ready-zone").classList.remove("hidden-screen")),updateParticipantList()}
function updateParticipantList(){const e=document.getElementById("lobby-participants-list");e.innerHTML="",document.getElementById("participant-count").innerText=gameState.players.length,gameState.players.forEach(t=>{const n=document.createElement("div");n.className=`p-3 rounded-lg border text-center transition ${t.isReady?"bg-emerald-950/40 border-emerald-500 text-emerald-300":"bg-slate-900 border-slate-700 text-slate-400"}`,n.innerHTML=`<p class="font-bold block truncate">${t.name}</p><span class="text-[10px] uppercase font-semibold">${t.isReady?"Ready":"Unready"}</span>`,e.appendChild(n)})}
function updateScoreboard(){const e=document.getElementById("game-scoreboard-list");if(e.innerHTML="","solo"===gameState.mode)gameState.players.sort((e,t)=>t.score-e.score),gameState.players.forEach(t=>{const n=document.createElement("div");n.className="flex justify-between items-center p-3 bg-slate-900 border border-slate-700 rounded-xl",n.innerHTML=`<span class="font-medium text-sm text-slate-200">${t.name} ${t.name===gameState.currentUser?"(Kamu)":""}</span><span class="font-bold text-indigo-400 bg-indigo-950/50 px-3 py-1 rounded-md text-sm border border-indigo-900">${t.score} Pts</span>`,e.appendChild(n)});else{let t={};gameState.players.forEach(e=>{t[e.team]||(t[e.team]=0),t[e.team]+=e.score}),Object.keys(t).forEach(n=>{const s=document.createElement("div");s.className="p-3 bg-slate-900 border border-slate-700 rounded-xl space-y-1";let a=gameState.players.filter(e=>e.team===n).map(e=>e.name).join(", ");s.innerHTML=`<div class="flex justify-between items-center"><span class="font-bold text-sm text-emerald-400">${n}</span><span class="font-bold text-emerald-400 bg-emerald-950/50 px-3 py-1 rounded-md text-sm border border-emerald-900">${t[n]} Pts</span></div><p class="text-[11px] text-slate-400 italic truncate">Anggota: ${a}</p>`,e.appendChild(s)})}}
