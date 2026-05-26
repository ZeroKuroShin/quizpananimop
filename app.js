// ==========================================
// BANK DATA SOAL (KATEGORI & JAWABAN RINGKAS)
// ==========================================
const questionBank = {
    "Matematika": [
        { q: "Berapakah hasil dari 12 x 12 - 44?", a: "100" },
        { q: "Jika 3x + 5 = 20, berapa nilai x?", a: "5" },
        { q: "Berapa akar kuadrat dari 225?", a: "15" }
    ],
    "Pengetahuan Umum Dunia": [
        { q: "Apa nama mata uang resmi negara Jepang?", a: "Yen" },
        { q: "Negara mana yang memiliki wilayah terluas di dunia?", a: "Rusia" },
        { q: "Terusan yang menghubungkan Laut Mediterania dan Laut Merah bernama?", a: "Terusan Suez" }
    ],
    "Pengetahuan IPA": [
        { q: "Apa planet terdekat dari Matahari di tata surya kita?", a: "Merkurius" },
        { q: "Gas apa yang paling banyak terkandung di atmosfer Bumi?", a: "Nitrogen" },
        { q: "Apa nama organ tubuh manusia yang berfungsi memompa darah?", a: "Jantung" }
    ],
    "Pengetahuan Sosial": [
        { q: "Siapa penjelajah asal Italia yang menemukan benua Amerika?", a: "Christopher Columbus" },
        { q: "Candi Borobudur yang merupakan candi Buddha terbesar terletak di provinsi?", a: "Jawa Tengah" },
        { q: "Apa lambang dari sila ke-3 dalam Pancasila?", a: "Pohon Beringin" }
    ],
    "Lagu": [
        { q: "Siapakah pencipta lagu kebangsaan 'Indonesia Raya'?", a: "W.R. Supratman" },
        { q: "Lagu daerah 'Soleram' berasal dari provinsi apa?", a: "Riau" },
        { q: "Lagu pop legendaris 'Bohemian Rhapsody' dinyanyikan oleh band?", a: "Queen" }
    ],
    "Sejarah Dunia": [
        { q: "Pada tahun berapakah Perang Dunia Pertama dimulai?", a: "1914" },
        { q: "Siapa presiden pertama Amerika Serikat?", a: "George Washington" },
        { q: "Kota di Jepang yang dijatuhi bom atom pertama kali oleh Sekutu adalah?", a: "Hiroshima" }
    ],
    "Fun Fact": [
        { q: "Hewan mamalia apa yang diketahui tidak bisa melompat?", a: "Gajah" },
        { q: "Berapa jumlah warna yang ada pada pelangi?", a: "7 Warna" },
        { q: "Apa satu-satunya buah yang memiliki biji di luar kulitnya?", a: "Stroberi" }
    ],
    "Geologi": [
        { q: "Apa nama lapisan bumi yang paling luar dan keras?", a: "Kerak Bumi (Crust)" },
        { q: "Jenis batuan yang terbentuk dari pembekuan magma atau lava dinamakan?", a: "Batuan Beku" },
        { q: "Skala yang digunakan untuk mengukur kekuatan gempa bumi adalah?", a: "Skala Richter / Moment Magnitude" }
    ],
    "Bisnis": [
        { q: "Siapa pendiri utama perusahaan teknologi raksasa Microsoft?", a: "Bill Gates" },
        { q: "Apa istilah ekonomi untuk kenaikan harga barang secara umum dan terus-menerus?", a: "Inflasi" },
        { q: "Strategi pemasaran dengan jargon 4P terdiri dari Product, Price, Place, dan...?", a: "Promotion" }
    ]
};

// ==========================================
// STATE MANAGEMENT (SIMULASI CLIENT-SIDE CO-OP)
// ==========================================
let gameState = {
    role: null, // 'admin' atau 'player'
    currentUser: "",
    gameCode: "482910", // Default Code
    mode: "solo", // 'solo' atau 'team'
    category: "Matematika",
    players: [], // Array objek player: { name: string, isReady: bool, score: int, team: string }
    buzzerWinner: null,
    timerInterval: null,
    timeLeft: 10,
    currentQuestionIndex: null
};

// Auto-load mockup data pemain pasif agar testing lokal terasa ramai (Maksimal 12)
function loadMockupPlayers() {
    gameState.players = [
        { name: "Andi", isReady: true, score: 0, team: "Tim A" },
        { name: "Budi", isReady: true, score: 0, team: "Tim A" },
        { name: "Citra", isReady: false, score: 0, team: "Tim B" },
        { name: "Dewi", isReady: false, score: 0, team: "Tim B" }
    ];
}
loadMockupPlayers();

// ==========================================
// AUTHENTICATION LOGIC
// ==========================================
function switchAuthTab(type) {
    const tabP = document.getElementById('tab-player');
    const tabA = document.getElementById('tab-admin');
    const formP = document.getElementById('form-player');
    const formA = document.getElementById('form-admin');

    if(type === 'admin') {
        tabA.className = "w-1/2 py-2 text-center rounded-md bg-indigo-600 font-medium transition text-white";
        tabP.className = "w-1/2 py-2 text-center rounded-md text-slate-400 font-medium transition";
        formA.classList.remove('hidden-screen');
        formP.classList.add('hidden-screen');
    } else {
        tabP.className = "w-1/2 py-2 text-center rounded-md bg-indigo-600 font-medium transition text-white";
        tabA.className = "w-1/2 py-2 text-center rounded-md text-slate-400 font-medium transition";
        formP.classList.remove('hidden-screen');
        formA.classList.add('hidden-screen');
    }
}

function loginAsAdmin() {
    const u = document.getElementById('a-username').value;
    const p = document.getElementById('a-password').value;

    // Kredensial statis aman (tersembunyi dari interface UI luar)
    if(u === 'admin' && p === 'admin') {
        gameState.role = 'admin';
        gameState.currentUser = 'admin';
        renderLobby();
    } else {
        alert('Kredensial Admin Salah!');
    }
}

function joinAsPlayer() {
    const username = document.getElementById('p-username').value.trim();
    const code = document.getElementById('p-code').value.trim();

    if(!username || !code) return alert("Mohon isi nama dan 6 digit kode game!");
    if(code !== gameState.gameCode) return alert("Kode Game salah atau tidak ditemukan!");
    if(gameState.players.length >= 12) return alert("Room penuh! Maksimal 12 pemain.");

    // Cek duplikasi nama
    if(gameState.players.some(p => p.name.toLowerCase() === username.toLowerCase())) {
        return alert("Nama ini sudah digunakan di dalam room!");
    }

    gameState.role = 'player';
    gameState.currentUser = username;
    
    // Tentukan pembagian tim otomatis jika nanti masuk mode regu
    const teamName = gameState.players.length < 4 ? "Tim A" : (gameState.players.length < 8 ? "Tim B" : "Tim C");

    gameState.players.push({
        name: username,
        isReady: false,
        score: 0,
        team: teamName
    });

    renderLobby();
}

// ==========================================
// LOBBY LOGIC
// ==========================================
function renderLobby() {
    document.getElementById('screen-auth').classList.add('hidden-screen');
    document.getElementById('screen-lobby').classList.remove('hidden-screen');
    document.getElementById('display-game-code').innerText = gameState.gameCode;

    // Tampilkan konfigurasi hanya jika admin yang masuk
    if(gameState.role === 'admin') {
        document.getElementById('admin-config').classList.remove('hidden-screen');
        document.getElementById('player-ready-zone').classList.add('hidden-screen');
    } else {
        document.getElementById('admin-config').classList.add('hidden-screen');
        document.getElementById('player-ready-zone').classList.remove('hidden-screen');
    }

    updateParticipantList();
}

function updateParticipantList() {
    const listContainer = document.getElementById('lobby-participants-list');
    listContainer.innerHTML = "";
    document.getElementById('participant-count').innerText = gameState.players.length;

    gameState.players.forEach(p => {
        const card = document.createElement('div');
        card.className = `p-3 rounded-lg border text-center transition ${p.isReady ? 'bg-emerald-950/40 border-emerald-500 text-emerald-300' : 'bg-slate-900 border-slate-700 text-slate-400'}`;
        card.innerHTML = `
            <p class="font-bold block truncate">${p.name}</p>
            <span class="text-[10px] uppercase font-semibold">${p.isReady ? 'Ready' : 'Unready'}</span>
        `;
        listContainer.appendChild(card);
    });
}

function toggleReady() {
    const pIndex = gameState.players.findIndex(p => p.name === gameState.currentUser);
    if(pIndex !== -1) {
        gameState.players[pIndex].isReady = !gameState.players[pIndex].isReady;
        const btn = document.getElementById('btn-ready');
        if(gameState.players[pIndex].isReady) {
            btn.className = "w-full py-4 bg-emerald-600 hover:bg-emerald-500 font-bold rounded-xl transition text-lg shadow-lg text-white";
            btn.innerText = "SAYA READY 👍";
        } else {
            btn.className = "w-full py-4 bg-amber-600 hover:bg-amber-500 font-bold rounded-xl transition text-lg shadow-lg text-white";
            btn.innerText = "SET READY 👍";
        }
        updateParticipantList();
    }
}

// ==========================================
// GAMEPLAY LOGIC
// ==========================================
function startGame() {
    // Validasi agar admin memastikan minimal ada player di room
    if(gameState.players.length === 0) return alert("Belum ada pemain yang bergabung!");

    // Tarik preferensi room dari form admin
    gameState.mode = document.getElementById('game-mode').value;
    gameState.category = document.getElementById('game-category').value;

    document.getElementById('screen-lobby').classList.add('hidden-screen');
    document.getElementById('screen-game').classList.remove('hidden-screen');

    // Sesuaikan UI Arena atas dasar Hak Akses (Role)
    if(gameState.role === 'admin') {
        document.getElementById('zone-admin-game').classList.remove('hidden-screen');
        document.getElementById('admin-answer-box').classList.remove('hidden-screen');
        document.getElementById('admin-badge-view').classList.remove('hidden-screen');
        document.getElementById('zone-player-game').classList.add('hidden-screen');
    } else {
        document.getElementById('zone-admin-game').classList.add('hidden-screen');
        document.getElementById('admin-answer-box').classList.add('hidden-screen');
        document.getElementById('admin-badge-view').classList.add('hidden-screen');
        document.getElementById('zone-player-game').classList.remove('hidden-screen');
    }

    // Set Meta Atribut Atas Arena
    document.getElementById('game-badge-mode').innerText = gameState.mode === 'solo' ? "Get The Point (Solo)" : "Team Point (Regu)";
    document.getElementById('game-display-category').innerText = `Kategori: ${gameState.category}`;

    updateScoreboard();
}

function updateScoreboard() {
    const scoreContainer = document.getElementById('game-scoreboard-list');
    scoreContainer.innerHTML = "";

    if (gameState.mode === 'solo') {
        // Render Scoreboard Perorangan
        gameState.players.sort((a,b) => b.score - a.score);
        gameState.players.forEach(p => {
            const item = document.createElement('div');
            item.className = "flex justify-between items-center p-3 bg-slate-900 border border-slate-700 rounded-xl";
            item.innerHTML = `
                <span class="font-medium text-sm text-slate-200">${p.name} ${p.name === gameState.currentUser ? '(Kamu)' : ''}</span>
                <span class="font-bold text-indigo-400 bg-indigo-950/50 px-3 py-1 rounded-md text-sm border border-indigo-900">${p.score} Pts</span>
            `;
            scoreContainer.appendChild(item);
        });
    } else {
        // Render Scoreboard Kelompok / Tim (Kalkulasi Akumulatif)
        let teamScores = {};
        gameState.players.forEach(p => {
            if(!teamScores[p.team]) teamScores[p.team] = 0;
            teamScores[p.team] += p.score;
        });

        Object.keys(teamScores).forEach(teamName => {
            const item = document.createElement('div');
            item.className = "p-3 bg-slate-900 border border-slate-700 rounded-xl space-y-1";
            
            // Ambil anggota tim
            let members = gameState.players.filter(pl => pl.team === teamName).map(pl => pl.name).join(", ");

            item.innerHTML = `
                <div class="flex justify-between items-center">
                    <span class="font-bold text-sm text-emerald-400">${teamName}</span>
                    <span class="font-bold text-emerald-400 bg-emerald-950/50 px-3 py-1 rounded-md text-sm border border-emerald-900">${teamScores[teamName]} Pts</span>
                </div>
                <p class="text-[11px] text-slate-400 italic truncate">Anggota: ${members}</p>
            `;
            scoreContainer.appendChild(item);
        });
    }
}

// ==========================================
// ACTION ENGINE (BUZZER, GENERATE, TIMER)
// ==========================================
function generateNextQuestion() {
    clearInterval(gameState.timerInterval);
    resetBuzzerState();

    const categoryPool = questionBank[gameState.category];
    const randIndex = Math.floor(Math.random() * categoryPool.length);
    const selectedQuestion = categoryPool[randIndex];

    document.getElementById('display-question').innerText = selectedQuestion.q;
    document.getElementById('display-answer').innerText = selectedQuestion.a;

    // Aktifkan Buzzer untuk player kembali
    const btnBuzzer = document.getElementById('btn-buzzer');
    if(btnBuzzer) {
        btnBuzzer.disabled = false;
        btnBuzzer.className = "w-full py-12 bg-rose-600 hover:bg-rose-500 active:scale-95 text-white font-black text-3xl rounded-2xl shadow-2xl border-b-8 border-rose-800 uppercase tracking-widest transition-all";
    }
}

function hitBuzzer() {
    // Logic trigger dari player (Simulasi interaksi real-time)
    if(gameState.buzzerWinner !== null) return; 

    gameState.buzzerWinner = gameState.currentUser;
    document.getElementById('buzzer-winner').innerText = `✋ ${gameState.buzzerWinner} Menekan Tercepat!`;
    
    // Kunci tombol buzzer player agar tidak terjadi spamming ganda
    const btnBuzzer = document.getElementById('btn-buzzer');
    btnBuzzer.disabled = true;
    btnBuzzer.className = "w-full py-12 bg-slate-700 text-slate-500 font-black text-3xl rounded-2xl cursor-not-allowed uppercase tracking-widest";

    // Trigger hitung mundur 10 Detik otomatis dari sistem
    startCountdown();
}

function startCountdown() {
    gameState.timeLeft = 10;
    document.getElementById('game-timer').innerText = `${gameState.timeLeft}s`;
    document.getElementById('game-timer').className = "text-3xl font-black text-amber-400";

    gameState.timerInterval = setInterval(() => {
        gameState.timeLeft--;
        document.getElementById('game-timer').innerText = `${gameState.timeLeft}s`;

        if (gameState.timeLeft <= 3) {
            document.getElementById('game-timer').className = "text-3xl font-black text-rose-500 animate-pulse";
        }

        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timerInterval);
            document.getElementById('game-timer').innerText = "WAKTU HABIS";
            alert("Waktu menjawab di dunia nyata habis! Admin silakan tentukan keputusan.");
        }
    }, 1000);
}

function resetBuzzerState() {
    gameState.buzzerWinner = null;
    gameState.timeLeft = 10;
    document.getElementById('game-timer').innerText = "10s";
    document.getElementById('game-timer').className = "text-3xl font-black text-rose-500";
    document.getElementById('buzzer-winner').innerText = "- Tidak Ada -";
}

// Otoritas penuh Admin mengevaluasi kebenaran jawaban verbal user
function evaluateAnswer(isCorrect) {
    if(!gameState.buzzerWinner || gameState.buzzerWinner === "- Tidak Ada -") {
        return alert("Belum ada player yang menekan buzzer untuk dinilai!");
    }

    clearInterval(gameState.timerInterval);

    // Temukan player target yang menekan buzzer dalam array state
    const pIndex = gameState.players.findIndex(p => p.name === gameState.buzzerWinner);
    
    if(pIndex !== -1) {
        if(isCorrect) {
            gameState.players[pIndex].score += 10;
            alert(`Jawaban ${gameState.buzzerWinner} BENAR. Skor bertambah +10 Pts!`);
        } else {
            gameState.players[pIndex].score -= 10;
            alert(`Jawaban ${gameState.buzzerWinner} SALAH. Skor berkurang -10 Pts!`);
        }
    }

    // Perbarui view papan skor utama
    updateScoreboard();
    resetBuzzerState();
}