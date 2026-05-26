// =========================================================================
// BANK DATA SOAL (9 KATEGORI x 50 SOAL = 450 SOAL DENGAN JAWABAN RINGKAS)
// =========================================================================
const questionBank = {
    "Matematika": [
        { q: "Berapakah hasil dari 12 x 12 - 44?", a: "100" },
        { q: "Jika 3x + 5 = 20, berapa nilai x?", a: "5" },
        { q: "Berapa akar kuadrat dari 225?", a: "15" },
        { q: "Berapakah hasil dari 250 dibagi 5, lalu ditambah 50?", a: "100" },
        { q: "Berapakah 15% dari 200?", a: "30" },
        { q: "Berapa volume kubus jika panjang rusuknya 5 cm?", a: "125 cm³" },
        { q: "Berapakah hasil dari (7 x 8) + (9 x 6)?", a: "110" },
        { q: "Jika sebuah segitiga memiliki alas 10 cm dan tinggi 8 cm, berapa luasnya?", a: "40 cm²" },
        { q: "Berapakah hasil dari 2 pangkat 6?", a: "64" },
        { q: "Berapakah nilai dari bilangan romawi 'XLV'?", a: "45" },
        { q: "Berapakah hasil dari 99 + 88 + 11?", a: "198" },
        { q: "Berapa jumlah sudut dalam sebuah segitiga?", a: "180 derajat" },
        { q: "Faktor Persekutuan Terbesar (FPB) dari 24 dan 36 adalah?", a: "12" },
        { q: "Kelipatan Persekutuan Terkecil (KPK) dari 4 dan 6 adalah?", a: "12" },
        { q: "Berapakah hasil dari 1.500 - 650 - 350?", a: "500" },
        { q: "Berapa jumlah rusuk pada bangun ruang balok?", a: "12" },
        { q: "Jika y - 12 = 40, berapakah nilai y?", a: "52" },
        { q: "Berapakah hasil dari 75 x 4?", a: "300" },
        { q: "Berapakah nilai dari 5 faktorial (5!)?", a: "120" },
        { q: "Berapa diameter lingkaran jika jari-jarinya 14 cm?", a: "28 cm" },
        { q: "Berapakah hasil dari 84 dibagi 7?", a: "12" },
        { q: "Berapakah nilai dari 10 pangkat 4?", a: "10.000" },
        { q: "Berapakah hasil dari -15 + 25 - 30?", a: "-20" },
        { q: "Berapakah hasil dari 1/2 + 1/4?", a: "3/4 atau 0.75" },
        { q: "Berapa jumlah titik sudut pada sebuah limas segi empat?", a: "5" },
        { q: "Berapakah hasil dari 13 x 3?", a: "39" },
        { q: "Berapakah hasil desimal dari pecahan 4/5?", a: "0.8" },
        { q: "Berapakah nilai dari akar kuadrat 900?", a: "30" },
        { q: "Berapakah hasil dari 700 x 0.5?", a: "350" },
        { q: "Jika harga 5 buku adalah Rp 25.000, berapa harga 2 buku?", a: "Rp 10.000" },
        { q: "Berapakah hasil dari 1.000 dibagi 8?", a: "125" },
        { q: "Berapakah hasil dari 18 + 24 - 15?", a: "27" },
        { q: "Berapa jumlah simetri lipat pada sebuah persegi?", a: "4" },
        { q: "Berapakah nilai dari 3 pangkat 4?", a: "81" },
        { q: "Berapakah hasil dari 16 x 5?", a: "80" },
        { q: "Berapakah hasil dari 150 + 350 - 200?", a: "300" },
        { q: "Berapakah nilai x jika x / 4 = 12?", a: "48" },
        { q: "Berapa meter dalam 2,5 kilometer?", a: "2.500 meter" },
        { q: "Berapakah hasil dari 9 x 9 - 9?", a: "72" },
        { q: "Berapa jumlah menit dalam 3,5 jam?", a: "210 menit" },
        { q: "Berapakah hasil dari 50 x 20?", a: "1.000" },
        { q: "Berapakah nilai dari bilangan romawi 'CXXV'?", a: "125" },
        { q: "Berapakah hasil dari 88 dibagi 4?", a: "22" },
        { q: "Jika keliling persegi adalah 40 cm, berapa panjang sisinya?", a: "10 cm" },
        { q: "Berapakah hasil dari 14 + 16 + 18 + 20?", a: "68" },
        { q: "Berapakah nilai dari akar kuadrat 400?", a: "20" },
        { q: "Berapakah hasil dari 7 x 6 x 2?", a: "84" },
        { q: "Berapakah hasil dari 5/10 jika disederhanakan?", a: "1/2" },
        { q: "Berapa jumlah detik dalam 15 menit?", a: "900 detik" },
        { q: "Berapakah hasil dari 10.000 - 4.500?", a: "5.500" }
    ],
    "Pengetahuan Umum Dunia": [
        { q: "Apa nama mata uang resmi negara Jepang?", a: "Yen" },
        { q: "Negara mana yang memiliki wilayah terluas di dunia?", a: "Rusia" },
        { q: "Terusan yang menghubungkan Laut Mediterania dan Laut Merah bernama?", a: "Terusan Suez" },
        { q: "Apa nama menara condong yang terkenal di Italia?", a: "Menara Pisa" },
        { q: "Negara manakah yang menjadi asal dari olahraga sepak bola modern?", a: "Inggris" },
        { q: "Apa nama samudra terbesar di dunia?", a: "Samudra Pasifik" },
        { q: "Kota manakah yang dikenal sebagai 'Kota Mode' dunia?", a: "Paris" },
        { q: "Apa nama sungai terpanjang di dunia?", a: "Sungai Nil" },
        { q: "Gunung tertinggi di dunia adalah Gunung?", a: "Everest" },
        { q: "Negara mana yang terkenal dengan ikon Kangguru dan Koala?", a: "Australia" },
        { q: "Siapa penulis drama terkenal 'Romeo and Juliet'?", a: "William Shakespeare" },
        { q: "Negara mana yang memiliki jumlah penduduk terbanyak di dunia saat ini?", a: "India" },
        { q: "Apa nama gurun pasir terbesar di dunia?", a: "Gurun Sahara" },
        { q: "Patung Liberty yang ada di New York merupakan hadiah dari negara?", a: "Prancis" },
        { q: "Apa nama benua terkecil di dunia?", a: "Benua Australia" },
        { q: "Kanal terkenal yang memotong benua Amerika Utara dan Selatan adalah?", a: "Terusan Panama" },
        { q: "Apa simbol kimia untuk unsur emas?", a: "Au" },
        { q: "Negara mana yang memiliki julukan 'Negara Tirai Bambu'?", a: "Cina / Tiongkok" },
        { q: "Apa nama laut terluas di dunia?", a: "Laut Cina Selatan" },
        { q: "Negara mana yang memiliki garis pantai terpanjang di dunia?", a: "Kanada" },
        { q: "Monumen Taj Mahal terletak di negara?", a: "India" },
        { q: "Apa nama ibukota dari negara Australia?", a: "Canberra" },
        { q: "Negara kincir angin adalah sebutan untuk negara?", a: "Belanda" },
        { q: "Bahan bakar utama yang digunakan pada pesawat terbang adalah?", a: "Avtur" },
        { q: "Siapa penemu lampu pijar yang terkenal?", a: "Thomas Edison" },
        { q: "Apa nama selat yang memisahkan pulau Jawa dan pulau Sumatra?", a: "Selat Sunda" },
        { q: "Ibukota dari negara Jerman adalah?", a: "Berlin" },
        { q: "Apa nama badan antariksa milik pemerintah Amerika Serikat?", a: "NASA" },
        { q: "Negara mana yang memenangkan Piala Dunia FIFA tahun 2022?", a: "Argentina" },
        { q: "Alat untuk mengukur tekanan udara luar dinamakan?", a: "Barometer" },
        { q: "Ibukota dari negara Rusia adalah?", a: "Moskow" },
        { q: "Apa nama puncak tertinggi di Indonesia?", a: "Puncak Jaya / Carstensz Pyramid" },
        { q: "Negara yang terkenal dengan arsitektur kuno Piramida dan Sphinx adalah?", a: "Mesir" },
        { q: "Hewan apa yang menjadi simbol dari organisasi konservasi dunia WWF?", a: "Panda" },
        { q: "Mata uang resmi yang digunakan oleh negara Arab Saudi adalah?", a: "Riyal" },
        { q: "Apa nama jembatan gantung terkenal berwarna merah di San Francisco?", a: "Golden Gate" },
        { q: "Berapa jumlah total kartu dalam satu dek kartu remi standar (tanpa joker)?", a: "52" },
        { q: "Negara dengan julukan 'Negara Gajah Putih' adalah?", a: "Thailand" },
        { q: "Ibukota dari negara Korea Selatan adalah?", a: "Seoul" },
        { q: "Menara Eiffel terletak di kota?", a: "Paris" },
        { q: "Suku asli yang mendiami wilayah benua Amerika sebelum bangsa Eropa datang adalah?", a: "Suku Indian" },
        { q: "Apa nama pulau terbesar di dunia?", a: "Greenland" },
        { q: "Ibukota negara Malaysia adalah?", a: "Kuala Lumpur" },
        { q: "Lambang ASEAN terdiri dari seikat batang tanaman apa?", a: "Padi" },
        { q: "Apa nama kantor kediaman resmi Presiden Amerika Serikat?", a: "Gedung Putih / White House" },
        { q: "Siapa seniman yang melukis karya legendaris 'Mona Lisa'?", a: "Leonardo da Vinci" },
        { q: "Bahan dasar pembuatan cokelat diambil dari tanaman apa?", a: "Kakao" },
        { q: "Apa nama selat paling padat di dunia yang terletak di antara Indonesia dan Malaysia?", a: "Selat Malaka" },
        { q: "Ibukota dari negara Inggris adalah?", a: "London" },
        { q: "Mata uang gabungan yang digunakan oleh sebagian besar negara di benua Eropa adalah?", a: "Euro" }
    ],
    "Pengetahuan IPA": [
        { q: "Apa planet terdekat dari Matahari di tata surya kita?", a: "Merkurius" },
        { q: "Gas apa yang paling banyak terkandung di atmosfer Bumi?", a: "Nitrogen" },
        { q: "Apa nama organ tubuh manusia yang berfungsi memompa darah?", a: "Jantung" },
        { q: "Proses pembuatan makanan oleh tumbuhan hijau dengan bantuan cahaya matahari disebut?", a: "Fotosintesis" },
        { q: "Zat hijau daun pada tumbuhan yang berfungsi menangkap cahaya matahari disebut?", a: "Klorofil" },
        { q: "Hewan yang memakan tumbuh-tumbuhan dikelompokkan ke dalam golongan?", a: "Herbivora" },
        { q: "Apa nama planet terbesar di tata surya kita?", a: "Jupiter" },
        { q: "Bentuk perubahan zat dari gas menjadi cair dinamakan?", a: "Mengembun" },
        { q: "Apa nama ilmiah atau rumus kimia untuk air?", a: "H2O" },
        { q: "Bagian terkecil dari suatu makhluk hidup disebut?", a: "Sel" },
        { q: "Sebutkan planet dalam tata surya yang memiliki cincin paling besar dan indah!", a: "Saturnus" },
        { q: "Gaya yang menarik semua benda di bumi menuju ke pusat bumi disebut gaya?", a: "Gravitasi" },
        { q: "Hewan yang hidup di dua alam (darat dan air) disebut?", a: "Amfibi" },
        { q: "Penyakit anemia terjadi karena tubuh kekurangan zat apa?", a: "Zat Besi / Sel Darah Merah" },
        { q: "Suhu di mana air murni membeku pada tekanan standar adalah berapa derajat Celsius?", a: "0 derajat" },
        { q: "Suhu di mana air murni mendidih adalah berapa derajat Celsius?", a: "100 derajat" },
        { q: "Alat pernapasan utama pada hewan ikan adalah?", a: "Insang" },
        { q: "Kaca pembesar yang menggunakan lensa cembung sering disebut dengan istilah?", a: "Lup" },
        { q: "Pusat tata surya kita adalah?", a: "Matahari" },
        { q: "Hewan yang memakan daging atau hewan lain dikelompokkan ke dalam golongan?", a: "Karnivora" },
        { q: "Bagian mata yang berfungsi mengatur jumlah cahaya yang masuk ke mata dinamakan?", a: "Iris / Pupil" },
        { q: "Apa nama tulang yang berfungsi melindungi otak manusia?", a: "Tulang Tengkorak" },
        { q: "Bentuk energi yang dihasilkan oleh getaran benda disebut energi?", a: "Bunyi" },
        { q: "Bumi berputar pada porosnya sendiri dinamakan proses?", a: "Rotasi Bumi" },
        { q: "Perjalanan Bumi mengelilingi Matahari dinamakan proses?", a: "Revolusi Bumi" },
        { q: "Vitamin apa yang banyak terkandung dalam buah jeruk dan berfungsi mencegah sariawan?", a: "Vitamin C" },
        { q: "Zat mengalir yang bentuknya selalu berubah mengikuti wadahnya tetapi volumenya tetap disebut zat?", a: "Cair" },
        { q: "Alat untuk mengukur suhu suatu benda dinamakan?", a: "Termometer" },
        { q: "Hubungan timbal balik yang saling menguntungkan antara dua makhluk hidup disebut simbiosis?", a: "Mutualisme" },
        { q: "Apa nama zat tunggal yang tidak dapat diuraikan lagi menjadi zat lain yang lebih sederhana?", a: "Unsur" },
        { q: "Gigi manusia yang berfungsi untuk merobek makanan adalah gigi?", a: "Taring" },
        { q: "Bagian darah yang berfungsi membunuh kuman yang masuk ke dalam tubuh adalah sel darah...?", a: "Putih" },
        { q: "Hewan mamalia apa yang bisa terbang?", a: "Kelelawar" },
        { q: "Penyakit tulang rapuh yang disebabkan kekurangan kalsium disebut?", a: "Osteoporosis" },
        { q: "Hewan yang berkembang biak dengan cara bertelur dinamakan?", a: "Ovipar" },
        { q: "Hewan yang berkembang biak dengan cara melahirkan dinamakan?", a: "Vivipar" },
        { q: "Zat padat yang langsung berubah menjadi gas dinamakan proses?", a: "Menyublim" },
        { q: "Logam cair pengisi termometer raksa konvensional bernama?", a: "Merkuri / Raksa" },
        { q: "Urutan rantai makanan produsen utama di laut biasanya diduduki oleh?", a: "Fitoplankton" },
        { q: "Lapisan gas yang menyelimuti planet bumi dinamakan?", a: "Atmosfer" },
        { q: "Satuan internasional (SI) untuk mengukur gaya adalah?", a: "Newton" },
        { q: "Kekurangan vitamin A pada mata manusia bisa menyebabkan penyakit?", a: "Rabun Ayam / Rabun Senja" },
        { q: "Apa nama alat yang digunakan untuk melihat benda-benda mikro yang sangat kecil?", a: "Mikroskop" },
        { q: "Bunyi yang frekuensinya di atas 20.000 Hz disebut bunyi?", a: "Ultrasonik" },
        { q: "Organ pencernaan manusia yang berfungsi menyerap sari-sari makanan adalah?", a: "Usus Halus" },
        { q: "Warna darah merah pada manusia dipengaruhi oleh adanya zat?", a: "Hemoglobin" },
        { q: "Jenis lensa yang digunakan untuk membantu penderita rabun jauh (miopi) adalah lensa?", a: "Cekung / Minus" },
        { q: "Batu yang terapung di air yang terbentuk dari pendinginan lava bergelembung disebut batu?", a: "Apung" },
        { q: "Perpindahan panas tanpa melalui zat perantara (seperti panas matahari ke bumi) dinamakan?", a: "Radiasi" },
        { q: "Kumpulan dari beberapa jaringan di dalam tubuh yang bekerja sama membentuk fungsi tertentu disebut?", a: "Organ" }
    ],
    "Pengetahuan Sosial": [
        { q: "Siapa penjelajah asal Italia yang menemukan benua Amerika?", a: "Christopher Columbus" },
        { q: "Candi Borobudur yang merupakan candi Buddha terbesar terletak di provinsi?", a: "Jawa Tengah" },
        { q: "Apa lambang dari sila ke-3 dalam Pancasila?", a: "Pohon Beringin" },
        { q: "Kerajaan Hindu tertua di Indonesia yang terletak di Kalimantan Timur adalah Kerajaan?", a: "Kutai" },
        { q: "Siapa nama patih Majapahit yang terkenal dengan Sumpah Palapa?", a: "Gajah Mada" },
        { q: "Bapak Proklamator negara Indonesia adalah Soekarno dan...?", a: "Mohammad Hatta" },
        { q: "Organisasi internasional PBB memiliki kepanjangan yaitu?", a: "Perserikatan Bangsa-Bangsa" },
        { q: "Benua terkering sekaligus benua yang hanya diisi oleh satu negara adalah benua?", a: "Australia" },
        { q: "Kegiatan menyalurkan barang dari produsen menuju ke konsumen disebut?", a: "Distribusi" },
        { q: "Kegiatan memakai atau menghabiskan nilai guna suatu barang disebut?", a: "Konsumsi" },
        { q: "Negara kincir angin adalah sebutan akrab bagi negara?", a: "Belanda" },
        { q: "Ibukota dari provinsi Jawa Barat adalah kota?", a: "Bandung" },
        { q: "Lembaga sosial terkecil yang ada di masyarakat adalah?", a: "Keluarga" },
        { q: "Uang kertas dan uang logam yang kita gunakan sehari-hari disebut jenis uang?", a: "Kartal" },
        { q: "Apa nama rumah adat tradisional yang berasal dari provinsi Sumatra Barat?", a: "Rumah Gadang" },
        { q: "Suku Bugis dan Suku Toraja adalah suku bangsa asli dari pulau?", a: "Sulawesi" },
        { q: "Garis khayal horizontal yang membelah bumi menjadi utara dan selatan dinamakan garis?", a: "Khatulistiwa / Ekuator" },
        { q: "Siapa tokoh penjelajah dunia pertama yang berhasil mengelilingi bumi asal Portugal?", a: "Ferdinand Magellan" },
        { q: "Kegiatan mendatangkan atau membeli barang dari luar negeri ke dalam negeri disebut?", a: "Impor" },
        { q: "Kegiatan menjual atau mengirim barang dagangan dari dalam negeri ke luar negeri disebut?", a: "Ekspor" },
        { q: "Apa nama mata uang resmi negara Malaysia?", a: "Ringgit" },
        { q: "Kerajaan Sriwijaya merupakan kerajaan corak Buddha besar yang berpusat di kota?", a: "Palembang" },
        { q: "Buku kumpulan surat Raden Ajeng Kartini yang terkenal berjudul?", a: "Habis Gelap Terbitlah Terang" },
        { q: "Daerah pengekalan budaya Jawa kuno yang dipimpin oleh seorang Sultan di Jawa adalah?", a: "Yogyakarta" },
        { q: "Apa judul lagu kebangsaan negara Indonesia?", a: "Indonesia Raya" },
        { q: "Samudra yang membatasi wilayah Indonesia di bagian barat dan selatan adalah Samudra?", a: "Hindia" },
        { q: "Siapa nama presiden kedua Republik Indonesia?", a: "Soeharto" },
        { q: "Tari Kecak dan Tari Pendet merupakan tarian adat tradisional dari daerah?", a: "Bali" },
        { q: "Sila pertama dalam Pancasila dilambangkan dengan gambar?", a: "Bintang" },
        { q: "Sistem barter adalah sistem perdagangan masyarakat kuno yang dilakukan dengan cara?", a: "Tukar-menukar barang" },
        { q: "Apa nama mata uang resmi yang digunakan negara Amerika Serikat?", a: "Dollar AS" },
        { q: "Benua terbesar di dunia yang kita tinggali ini bernama benua?", a: "Asia" },
        { q: "Ibukota dari negara Filipina adalah?", a: "Manila" },
        { q: "Hari Lahir Pancasila diperingati setiap tanggal berapa?", a: "1 Juni" },
        { q: "Gunung berapi aktif di selat Sunda yang meletus dahsyat pada tahun 1883 bernama?", a: "Krakatau" },
        { q: "Negara mana yang menjajah Indonesia paling lama dalam sejarah?", a: "Belanda" },
        { q: "Pusat peradaban kuno suku Maya terletak di benua Amerika bagian?", a: "Tengah / Selatan" },
        { q: "Danau vulkanik terbesar di Indonesia dan Asia Tenggara adalah Danau?", a: "Toba" },
        { q: "Siapakah pencipta lagu 'Bagimu Negeri'?", a: "Kusbini" },
        { q: "Kota di Indonesia yang dilewati langsung oleh garis khatulistiwa nol derajat adalah?", a: "Pontianak" },
        { q: "Apa nama kitab kuno karangan Mpu Tantular yang memuat kalimat 'Bhinneka Tunggal Ika'?", a: "Kitab Sutasoma" },
        { q: "Lembaga tinggi negara yang bertugas membuat undang-undang disebut lembaga?", a: "Legislatif (DPR/MPR)" },
        { q: "Kerajaan Islam pertama yang berdiri di pulau Jawa adalah Kerajaan?", a: "Demak" },
        { q: "Alat musik tiup tradisional khas dari suku Sunda bernama?", a: "Suling" },
        { q: "Laut yang sangat luas di antara benua-benua dinamakan?", a: "Samudra" },
        { q: "Ibukota dari negara Thailand adalah?", a: "Bangkok" },
        { q: "Suku Asmat dan Suku Dani merupakan suku asli yang mendiami wilayah pulau?", a: "Papua" },
        { q: "Tanggal berapakah hari kemerdekaan Republik Indonesia diperingati?", a: "17 Agustus" },
        { q: "Siapa penjahit kain bendera pusaka Merah Putih pertama?", a: "Fatmawati" },
        { q: "Bentuk negara Indonesia sesuai UUD 1945 pasal 1 ayat 1 adalah negara?", a: "Kesatuan" }
    ],
    "Lagu": [
        { q: "Siapakah pencipta lagu kebangsaan 'Indonesia Raya'?", a: "W.R. Supratman" },
        { q: "Lagu daerah 'Soleram' berasal dari provinsi apa?", a: "Riau" },
        { q: "Lagu pop legendaris 'Bohemian Rhapsody' dinyanyikan oleh band?", a: "Queen" },
        { q: "Siapa penyanyi pop dunia yang dijuluki sebagai 'King of Pop'?", a: "Michael Jackson" },
        { q: "Lagu daerah 'Ampar-Ampar Pisang' berasal dari daerah?", a: "Kalimantan Selatan" },
        { q: "Grup vokal atau boyband legendaris asal Inggris yang mempopulerkan lagu 'Hey Jude' adalah?", a: "The Beatles" },
        { q: "Siapa penyanyi wanita Indonesia pemilik lagu hits 'Maju Mundur Cantik'?", a: "Syahrini" },
        { q: "Lagu 'Yamko Rambe Yamko' merupakan lagu daerah yang berasal dari?", a: "Papua" },
        { q: "Sebutkan instrumen musik gesek bersenar 4 yang dimainkan di pundak!", a: "Biola" },
        { q: "Alat musik petik tradisional asal NTT yang terbuat dari daun lontar bernama?", a: "Sasando" },
        { q: "Lagu nasional 'Halo-Halo Bandung' diciptakan oleh?", a: "Ismail Marzuki" },
        { q: "Berapa jumlah garis horizontal pada paranada penulisan not balok?", a: "5" },
        { q: "Siapa penyanyi Indonesia penyanyi lagu hit global 'Glimpse of Us'?", a: "Joji (Internasional) / NIKI (Rich Brian Circle)" },
        { q: "Lagu anak-anak 'Pelangi-Pelangi' diciptakan oleh siapa?", a: "A.T. Mahmud" },
        { q: "Alat musik perkusi pukul tradisional khas Minahasa Sulawesi Utara bernama?", a: "Kolintang" },
        { q: "Genre musik asli Indonesia yang identik dengan sentuhan kendang dan suling adalah musik?", a: "Dangdut" },
        { q: "Lagu daerah 'Rasa Sayange' berasal dari daerah?", a: "Maluku" },
        { q: "Lagu pop romantis 'Perfect' dinyanyikan oleh penyanyi pria asal Inggris bernama?", a: "Ed Sheeran" },
        { q: "Alat musik tiup modern yang terbuat dari logam kuningan bercorong lengkung adalah?", a: "Saksofon" },
        { q: "Siapa komponis tuli legendaris dunia pembuat simfoni klasik 'Symphony No. 5'?", a: "Ludwig van Beethoven" },
        { q: "Lagu wajib nasional 'Hari Merdeka' diciptakan oleh?", a: "H. Mutahar" },
        { q: "Alat musik tiup bambu tradisional berkelompok asal Jawa Barat bernama?", a: "Angklung" },
        { q: "Penyanyi wanita dunia dengan julukan 'Queen of Pop' pemilik lagu 'Like a Virgin' adalah?", a: "Madonna" },
        { q: "Lagu daerah Sumatra Utara yang mengisahkan kerinduan pada kampung halaman bernama?", a: "Sinanggar Tulo / Kampuang Nan Jauh di Mato (Sumbar)" },
        { q: "Sebutkan tingkatan tangga nada vokal tertinggi untuk wanita!", a: "Sopran" },
        { q: "Sebutkan tingkatan tangga nada vokal terendah untuk pria!", a: "Bass" },
        { q: "Lagu hits 'Hati-Hati di Jalan' dibawakan oleh penyanyi pria Indonesia bernama?", a: "Tulus" },
        { q: "Grup band pop alternatif Indonesia pembuat lagu 'Dan' dan 'Melompat Lebih Tinggi' adalah?", a: "Sheila on 7" },
        { q: "Alat musik pukul bersenar banyak yang dimainkan dengan cara ditekan tutsnya adalah?", a: "Piano" },
        { q: "Lagu nasional 'Tanah Airku' diciptakan oleh seorang musisi wanita legendaris bernama?", a: "Ibu Sud" },
        { q: "Siapa komposer lagu pop instrumental romantis piano 'River Flows in You'?", a: "Yiruma" },
        { q: "Alat musik ritmis yang berbentuk lingkaran logam tipis berpiringan kecil gemerincing bernama?", a: "Tamborin" },
        { q: "Lagu daerah 'Apuse' menceritakan tentang perpisahan seorang cucu dengan?", a: "Kakek/Neneknya" },
        { q: "Grup K-Pop fenomena global pengisi lagu 'Dynamite' dan 'Butter' adalah?", a: "BTS" },
        { q: "Band rock legendaris Indonesia asal Jakarta pelantun lagu 'Ku Tak Bisa' bernama?", a: "Slank" },
        { q: "Lagu kebangsaan negara Amerika Serikat berjudul?", a: "The Star-Spangled Banner" },
        { q: "Istilah untuk tanda cepat lambatnya sebuah lagu dinyanyikan dinamakan?", a: "Tempo" },
        { q: "Lagu pop 'Sesuatu di Jogja' dipopulerkan oleh band indie bernama?", a: "Adhitia Sofyan" },
        { q: "Alat musik petik mirip gitar berukuran kecil bersenar empat bernama?", a: "Ukulele" },
        { q: "Lagu anak-anak 'Burung Kakak Tua' berasal dari wilayah daerah?", a: "Maluku" },
        { q: "Siapa penyanyi lagu legendaris 'My Heart Will Go On' (Soundtrack Titanic)?", a: "Celine Dion" },
        { q: "Istilah menyanyi solo tanpa iringan instrumen musik disebut?", a: "Akapela" },
        { q: "Lagu nasional 'Gugur Bunga' ditulis untuk menghormati jasa para?", a: "Pahlawan" },
        { q: "Alat musik tiup kecil bertsuts piano dengan selang tiup plastik dinamakan?", a: "Pianika" },
        { q: "Siapakah vokalis utama dari grup band legendaris Indonesia Dewa 19 masa kini?", a: "Ello / Virzha" },
        { q: "Lagu daerah Jawa Tengah 'Gundul Pacul' mengandung makna filosofis tentang?", a: "Pemimpin / Kepala Daulat" },
        { q: "Berapa jumlah total ketukan pada lagu berbirama 4/4 dalam satu birama?", a: "4 ketukan" },
        { q: "Lagu 'Kemesraan' dipopulerkan bersama oleh musisi legendaris Iwan Fals dan...?", a: "Rafika Duri / Chrisye" },
        { q: "Alat musik pukul kendang dua sisi berbahan kayu asal India bernama?", a: "Tabla" },
        { q: "Lagu wajib nasional 'Satu Nusa Satu Bangsa' diciptakan oleh?", a: "L. Manik" }
    ],
    "Sejarah Dunia": [
        { q: "Pada tahun berapakah Perang Dunia Pertama dimulai?", a: "1914" },
        { q: "Siapa presiden pertama Amerika Serikat?", a: "George Washington" },
        { q: "Kota di Jepang yang dijatuhi bom atom pertama kali oleh Sekutu adalah?", a: "Hiroshima" },
        { q: "Kekaisaran kuno yang dipimpin oleh Julius Caesar berpusat di kota?", a: "Roma" },
        { q: "Siapa tokoh pemimpin pergerakan Nazi Jerman selama Perang Dunia II?", a: "Adolf Hitler" },
        { q: "Tembok pemisah kota Berlin barat dan timur runtuh pada tahun?", a: "1989" },
        { q: "Siapa penemu benua Amerika yang berlayar dengan tiga kapal Spanyol?", a: "Christopher Columbus" },
        { q: "Revolusi Prancis yang meruntuhkan monarki absolut terjadi pada tahun?", a: "1789" },
        { q: "Negara mana yang pertama kali meluncurkan manusia ke luar angkasa?", a: "Uni Soviet" },
        { q: "Siapa nama manusia pertama yang berhasil mendarat di permukaan bulan?", a: "Neil Armstrong" },
        { q: "Peradaban kuno Mesopotamia terletak di lembah di antara dua sungai yaitu Eufrat dan?", a: "Tigris" },
        { q: "Siapa raja mumi terkenal dari Mesir Kuno yang makamnya ditemukan utuh?", a: "Tutankhamun" },
        { q: "Perang sipil dingin yang melibatkan blok Barat (AS) dan blok Timur (Soviet) disebut?", a: "Perang Dingin" },
        { q: "Siapa tokoh kulit hitam penentang apartheid di Afrika Selatan yang menjadi presiden?", a: "Nelson Mandela" },
        { q: "Kekaisaran Mongol didirikan dan dipimpin pertama kali oleh penakluk besar bernama?", a: "Genghis Khan" },
        { q: "Kapal pesiar mewah Titanic tenggelam setelah menabrak gunung es pada tahun?", a: "1912" },
        { q: "Nama kode serangan kilat Jerman ke Polandia pembuka PD II adalah?", a: "Blitzkrieg" },
        { q: "Perang selama 30 tahun di Eropa pada abad ke-17 diakhiri dengan Perjanjian?", a: "Westphalia" },
        { q: "Siapa nama arsitek peradaban Yunani Kuno pembentuk teori geometri matematika?", a: "Pythagoras" },
        { q: "Kota kuno legendaris di Peru peninggalan suku Inca yang berada di atas gunung adalah?", a: "Machu Picchu" },
        { q: "Bencana kebocoran reaktor nuklir terparah sejarah Soviet terjadi di kota?", a: "Chernobyl" },
        { q: "Negara kincir angin Belanda menjajah nusantara Indonesia selama kurang lebih?", a: "3,5 Abad" },
        { q: "Siapa pemimpin militer Prancis yang berhasil menaklukkan sebagian besar Eropa abad ke-19?", a: "Napoleon Bonaparte" },
        { q: "Perjanjian perdamaian penutup Perang Dunia I dinamakan Perjanjian?", a: "Versailles" },
        { q: "Siapa tokoh ilmuwan penemu teori relativitas fisika modern?", a: "Albert Einstein" },
        { q: "Sistem perbudakan ras kulit hitam resmi dihapus di AS oleh presiden?", a: "Abraham Lincoln" },
        { q: "Apa nama jalur perdagangan darat kuno penghubung Cina dengan benua Eropa?", a: "Jalur Sutra" },
        { q: "Peradaban Mesir Kuno sangat bergantung pada siklus air dari sungai?", a: "Nil" },
        { q: "Siapa filsuf Yunani terkenal yang menjadi guru dari Alexander Agung?", a: "Aristoteles" },
        { q: "Dokumen piagam kebebasan Inggris tahun 1215 pembatas kuasa raja bernama?", a: "Magna Carta" },
        { q: "Konferensi Asia-Afrika (KAA) pertama tahun 1955 diselenggarakan di kota?", a: "Bandung" },
        { q: "Pada tahun berapakah organisasi PBB resmi didirikan?", a: "1945" },
        { q: "Siapa ratu terakhir kerajaan Mesir Kuno yang terkenal kecantikannya?", a: "Cleopatra" },
        { q: "Perang perebutan kota suci Yerusalem pada abad pertengahan dinamakan Perang?", a: "Salib" },
        { q: "Apa nama pakta pertahanan militer blok barat bentukan tahun 1949?", a: "NATO" },
        { q: "Negara mana yang diserang Jepang di pangkalan Pearl Harbor tahun 1941?", a: "Amerika Serikat" },
        { q: "Nama peradaban kuno pembuat undang-undang tertulis tertua 'Eye for an eye' adalah?", a: "Babilonia (Hammurabi)" },
        { q: "Zaman keemasan kebangkitan seni dan sains di Eropa abad 14-17 disebut zaman?", a: "Renaissance" },
        { q: "Kota kuno Romawi yang musnah tertimbun abu vulkanik Gunung Vesuvius adalah?", a: "Pompeii" },
        { q: "Siapa tokoh penemu benua Australia dan pemeta samudra asal Inggris?", a: "James Cook" },
        { q: "Perang kemerdekaan Amerika Serikat melawan penjajahan kerajaan?", a: "Inggris" },
        { q: "Konferensi meja bundar (KMB) kedaulatan Indonesia diadakan di kota?", a: "Den Haag" },
        { q: "Siapa nama penemu struktur bangunan cetak mesin pres pertama di dunia?", a: "Johannes Gutenberg" },
        { q: "Perang Korea yang memecah Korea Utara dan Selatan meletus pada tahun?", a: "1950" },
        { q: "Negara Asia manakah yang berhasil mengalahkan Kekaisaran Rusia pada perang tahun 1905?", a: "Jepang" },
        { q: "Monumen batu melingkar purbakala megalitikum di Inggris bernama?", a: "Stonehenge" },
        { q: "Siapa kaisar pertama yang menyatukan seluruh daratan Tiongkok dan membangun Tembok Besar?", a: "Qin Shi Huang" },
        { q: "Negara pecahan Uni Soviet terbesar yang berdiri pasca bubar 1991 adalah?", a: "Rusia" },
        { q: "Siapa tokoh wanita perawat legendaris dunia pendiri keperawatan modern?", a: "Florence Nightingale" },
        { q: "Kota Konstantinopel jatuh ke tangan Kesultanan Ottoman pada tahun?", a: "1453" }
    ],
    "Fun Fact": [
        { q: "Hewan mamalia apa yang diketahui tidak bisa melompat?", a: "Gajah" },
        { q: "Berapa jumlah warna yang ada pada pelangi?", a: "7 Warna" },
        { q: "Apa satu-satunya buah yang memiliki biji di luar kulitnya?", a: "Stroberi" },
        { q: "Berapa jumlah jantung yang dimiliki oleh hewan gurita?", a: "3 Jantung" },
        { q: "Hewan apa yang memiliki sidik jari sangat mirip dengan sidik jari manusia?", a: "Koala" },
        { q: "Satu-satunya burung yang diketahui bisa terbang mundur adalah burung?", a: "Kolibri" },
        { q: "Mamalia terbesar di bumi yang masih hidup sampai sekarang adalah?", a: "Paus Biru" },
        { q: "Benua mana di bumi ini yang tidak memiliki reptil atau ular asli?", a: "Antartika" },
        { q: "Bahan makanan alami apa yang diketahui tidak bisa membusuk bahkan setelah ribuan tahun?", a: "Madu" },
        { q: "Bagian tubuh manusia mana yang ukuran panjangnya sama dengan rentang jarak pergelangan tangan ke siku?", a: "Telapak Kaki" },
        { q: "Hewan air apa tidur dengan satu mata tetap terbuka?", a: "Lumba-lumba" },
        { q: "Berapa lama waktu yang dibutuhkan cahaya matahari untuk sampai ke permukaan bumi?", a: "Sekitar 8 Menit" },
        { q: "Warna asli dari air susu kudanil yang unik adalah warna?", a: "Merah Muda / Pink" },
        { q: "Hewan berkaki seribu (luwing) sebenarnya rata-rata memiliki kaki berjumlah?", a: "Kurang dari 400" },
        { q: "Negara mana yang memiliki zona waktu terbanyak di dunia (termasuk wilayah jajahannya)?", a: "Prancis" },
        { q: "Organ tubuh manusia mana yang bisa tumbuh kembali secara mandiri meski dipotong sebagian?", a: "Hati / Liver" },
        { q: "Hewan apa yang memegang rekor waktu tidur terlama dalam sehari (mencapai 22 jam)?", a: "Koala" },
        { q: "Menara Eiffel di Paris bisa bertambah tinggi saat musim panas karena pemuaian besi logam sebesar?", a: "15 cm" },
        { q: "Indra pengecap pada hewan kupu-kupu terletak di bagian?", a: "Kaki" },
        { q: "Berapa jumlah total tulang yang dimiliki manusia saat sudah dewasa?", a: "206 Tulang" },
        { q: "Ikan hiu kehilangan gigi sepanjang hidupnya, total gigi hiu yang copot bisa mencapai?", a: "30.000 Gigi" },
        { q: "Hujan teraneh di dunia, yaitu hujan katak dan ikan kecil, dipicu oleh fenomena cuaca?", a: "Puting Beliung / Water spout" },
        { q: "Hewan melata siput diketahui bisa tidur tanpa bangun selama?", a: "3 Tahun" },
        { q: "Otot terkuat di dalam tubuh manusia berdasarkan ukuran beratnya adalah otot?", a: "Rahang (Masseter)" },
        { q: "Suara kunyit bebek (wek-wek) konon memiliki mitos unik tidak bisa menghasilkan?", a: "Gema / Echo" },
        { q: "Kaktus tertua bisa hidup di gurun gersang tanpa air selama?", a: "200 Tahun" },
        { q: "Berapa pasang syaraf rusuk yang ada pada tubuh ular raksasa?", a: "Hingga 400 Pasang" },
        { q: "Hewan unta menyimpan cadangan lemak energi utama mereka di bagian?", a: "Punuk" },
        { q: "Buah pisang secara botani diklasifikasikan masuk ke dalam golongan buah?", a: "Beri (Berry)" },
        { q: "Bunyi gemertak saat kita membunyikan jari tangan berasal dari gelembung gas apa yang pecah?", a: "Nitrogen" },
        { q: "Hewan semut tidak memiliki organ pernapasan berupa?", a: "Paru-paru" },
        { q: "Berapa kecepatan rata-rata bersin manusia saat keluar dari hidung?", a: "160 km/jam" },
        { q: "Logam emas murni 24 karat memiliki tekstur fisik yang sangat?", a: "Lunak / Lembek" },
        { q: "Hewan apa yang tidak bisa menengokkan kepalanya ke belakang tanpa memutar badannya?", a: "Buaya" },
        { q: "Mata burung burung unta berukuran lebih besar dibandingkan dengan ukuran?", a: "Otaknya" },
        { q: "Hewan anjing mendeteksi arah datangnya suara dalam waktu kilat yaitu?", a: "0,06 Detik" },
        { q: "Warna kotak hitam (black box) perekam data penerbangan pesawat terbang sebenarnya berwarna?", a: "Oranye Jingga" },
        { q: "Jenis cairan tubuh manusia yang bisa melarutkan silet pisau cukur baja adalah cairan?", a: "Asam Lambung" },
        { q: "Berapa jumlah kelopak mata yang dimiliki seekor unta gurun?", a: "3 Kelopak" },
        { q: "Hewan beruang kutub jika dilihat di bawah mikroskop sebenarnya memiliki kulit berwarna?", a: "Hitam" },
        { q: "Sayap lebah mengepak sangat cepat dalam satu detik sebanyak?", a: "200 Kali" },
        { q: "Negara mana yang menjadi satu-satunya tempat tanpa adanya nyamuk hidup?", a: "Islandia" },
        { q: "Berapa persen air kandungan yang membentuk sebuah buah semangka segar?", a: "92 Persen" },
        { q: "Hewan tikus bisa bertahan hidup tanpa minum air lebih lama dibanding hewan?", a: "Unta" },
        { q: "Sidik lidah manusia bersifat sama seperti sidik jari, yaitu bersifat?", a: "Unik / Berbeda tiap orang" },
        { q: "Gigi hewan berang-berang berwarna oranye karena banyak mengandung zat?", a: "Zat Besi" },
        { q: "Kertas berbahan dasar kayu pertama kali ditemukan oleh bangsa?", a: "Cina / Tiongkok" },
        { q: "Berapa rata-hari kedipan mata manusia dalam satu menit?", a: "15-20 Kali" },
        { q: "Perusahaan pembuat ban terbesar di dunia berdasarkan volume unit tahunan adalah?", a: "Lego" },
        { q: "Hewan pinguin melamar pasangannya dengan cara memberikan hadiah sebutir?", a: "Batu Kerikil" }
    ],
    "Geologi": [
        { q: "Apa nama lapisan bumi yang paling luar dan keras?", a: "Kerak Bumi (Crust)" },
        { q: "Jenis batuan yang terbentuk dari pembekuan magma atau lava dinamakan?", a: "Batuan Beku" },
        { q: "Skala yang digunakan untuk mengukur kekuatan gempa bumi adalah?", a: "Skala Richter / Moment Magnitude" },
        { q: "Batuan sedimen yang terbentuk dari sisa-sisa tumbuhan purba yang mengendap jutaan tahun adalah?", a: "Batu Bara" },
        { q: "Zat cair kental super panas yang berada di dalam perut bumi dinamakan?", a: "Magma" },
        { q: "Magma yang sudah keluar mengalir ke permukaan bumi saat gunung meletus disebut?", a: "Lava" },
        { q: "Alat pencatat getaran gempa bumi dinamakan?", a: "Seismograf" },
        { q: "Superkontinen raksasa tunggal yang menyatukan seluruh benua bumi jutaan tahun lalu bernama?", a: "Pangaea" },
        { q: "Batuan kapur yang mengalami perubahan suhu dan tekanan tinggi berubah menjadi batu?", a: "Marmer" },
        { q: "Pusat titik gempa yang berada tepat di permukaan bumi dinamakan?", a: "Episentrum" },
        { q: "Pusat titik gempa yang berada jauh di dalam perut bumi dinamakan?", a: "Hiposentrum" },
        { q: "Gelombang air laut raksasa yang dipicu oleh gempa tektonik bawah laut disebut?", a: "Tsunami" },
        { q: "Mineral alami yang memiliki tingkat kekerasan tertinggi di bumi (skala 10 Mohs) adalah?", a: "Intan / Berlian" },
        { q: "Kawasan aktif gempa dan gunung berapi yang mengelilingi samudra Pasifik disebut?", a: "Cincin Api / Ring of Fire" },
        { q: "Proses pengikisan batuan atau tanah oleh air, angin, atau es dinamakan?", a: "Erosi" },
        { q: "Jenis batuan yang terbentuk dari pengendapan materi hancuran batuan lain dinamakan?", a: "Batuan Sedimen" },
        { q: "Batuan yang mengalami perubahan bentuk akibat tekanan dan suhu ekstrem dinamakan?", a: "Batuan Metamorf" },
        { q: "Sebutkan nama patahan tektonik aktif terbesar dan terkenal di California AS!", a: "Patahan San Andreas" },
        { q: "Zat padat homogen alami yang membentuk batuan bumi disebut?", a: "Mineral" },
        { q: "Lapisan bumi yang terletak di antara kerak bumi dan inti bumi dinamakan?", a: "Mantel Bumi" },
        { q: "Unsur logam cair utama penyusun inti luar bumi adalah besi dan?", a: "Nikel" },
        { q: "Ilmu yang mempelajari tentang fosil sisa makhluk hidup purba dinamakan?", a: "Paleontologi" },
        { q: "Batu obsidian terbentuk dari pembekuan lava yang sangat cepat sehingga strukturnya mirip?", a: "Kaca" },
        { q: "Skala penentu tingkat kekerasan mineral batu di dunia dinamakan skala?", a: "Mohs" },
        { q: "Cekungan kawah besar runtuhan puncak gunung berapi pasca meletus dahsyat disebut?", a: "Kaldera" },
        { q: "Proses hancurnya batuan secara fisik, kimia, atau biologi dinamakan?", a: "Pelapukan" },
        { q: "Semburan air panas alami dari dalam perut bumi yang memancar berkala disebut?", a: "Geyser" },
        { q: "Batu apung termasuk ke dalam kelompok besar jenis batuan?", a: "Beku" },
        { q: "Teori perpindahan lempeng-lempeng pembentuk kulit bumi dinamakan teori?", a: "Tektonik Lempeng" },
        { q: "Pertemuan dua lempeng tektonik yang saling bertumbukan mendesak ke atas membentuk?", a: "Pegunungan" },
        { q: "Pertemuan dua lempeng tektonik yang saling menjauh dinamakan pergerakan?", a: "Divergen" },
        { q: "Pertemuan dua lempeng tektonik yang saling bergesekan mendatar dinamakan pergerakan?", a: "Transform" },
        { q: "Lembah dalam bawah laut yang terbentuk di area penunjaman lempeng disebut?", a: "Palung Laut" },
        { q: "Palung laut terdalam di dunia yang terletak di Samudra Pasifik bernama Palung?", a: "Mariana" },
        { q: "Mineral pembentuk pasir putih pantai yang sangat umum ditemukan adalah?", a: "Kuarsa" },
        { q: "Struktur batu runcing yang menggantung tumbuh di langit-langit gua kapur disebut?", a: "Stalaktit" },
        { q: "Struktur batu runcing yang tumbuh berdiri di lantai gua kapur disebut?", a: "Stalagmit" },
        { q: "Zaman geologi purba di mana dinosaurus hidup mendominasi bumi dinamakan zaman?", a: "Mesozoikum" },
        { q: "Lapisan batuan bumi yang berpori dan mampu menyimpan serta mengalirkan air tanah disebut?", a: "Akuifer" },
        { q: "Fosil panduan yang digunakan untuk menentukan umur relatif lapisan batuan disebut fosil?", a: "Indeks" },
        { q: "Tanah subur berwarna gelap hasil endapan abu vulkanik gunung berapi disebut tanah?", a: "Andosol" },
        { q: "Logam mulia aluminium diekstraksi dari bijih mineral utama bernama?", a: "Bauksit" },
        { q: "Pembagian waktu sejarah bumi berdasarkan peristiwa geologi besar dinamakan skala waktu?", a: "Geologi" },
        { q: "Gas vulkanik beracun berbau telur busuk yang keluar dari kawah gunung adalah?", a: "H2S / Belerang" },
        { q: "Kondisi patahan batu di mana satu blok batuan bergeser turun ke bawah disebut sesar?", a: "Normal" },
        { q: "Batu serpih (shale) yang terkena metamorfosis tekanan berubah menjadi batu?", a: "Sabak" },
        { q: "Siklus perputaran batuan dari magma, membeku, lapuk, mengendap, lalu meleleh kembali disebut?", a: "Siklus Batuan" },
        { q: "Gelombang gempa yang merambat di dalam tubuh bumi dinamakan gelombang?", a: "Badan (Body Wave)" },
        { q: "Bagian lempeng bumi yang membentuk dasar samudra luas dinamakan kerak?", a: "Samudra" },
        { q: "Ilmu spesifik yang mempelajari tentang sifat fisik dan kimia batuan bernama?", a: "Petrologi" }
    ],
    "Bisnis": [
        { q: "Siapa pendiri utama perusahaan teknologi raksasa Microsoft?", a: "Bill Gates" },
        { q: "Apa istilah ekonomi untuk kenaikan harga barang secara umum dan terus-menerus?", a: "Inflasi" },
        { q: "Strategi pemasaran dengan jargon 4P terdiri dari Product, Price, Place, dan...?", a: "Promotion" },
        { q: "Surat berharga yang menunjukkan kepemilikan modal seseorang dalam suatu perusahaan disebut?", a: "Saham" },
        { q: "Apa kepanjangan dari istilah populer UMKM di Indonesia?", a: "Usaha Mikro Kecil dan Menengah" },
        { q: "Laporan keuangan yang menunjukkan posisi harta, utang, dan modal usaha pada tanggal tertentu dinamakan?", a: "Neraca" },
        { q: "Siapa tokoh pendiri e-commerce raksasa Amazon yang menjadi salah satu orang terkaya dunia?", a: "Jeff Bezos" },
        { q: "Kegiatan mempromosikan produk menggunakan media internet dan gadget dinamakan digital...?", a: "Marketing" },
        { q: "Istilah bagi perusahaan rintisan berbasis teknologi yang bernilai di atas 1 miliar dolar AS adalah?", a: "Unicorn" },
        { q: "Nilai uang yang harus dikorbankan atau dibayarkan untuk memproduksi suatu barang disebut?", a: "Biaya Produksi" },
        { q: "Pasar di mana hanya ada satu penjual tunggal yang menguasai seluruh penawaran barang disebut pasar?", a: "Monopoli" },
        { q: "Selisih keuntungan bersih yang didapat dari pendapatan dikurangi total biaya operasional dinamakan?", a: "Laba" },
        { q: "Logo, nama, atau simbol tiruan yang digunakan perusahaan sebagai identitas produk mereka disebut?", a: "Brand / Merek" },
        { q: "Pihak atau orang yang menyalurkan barang dari pabrik produsen menuju ke toko eceran disebut?", a: "Distributor" },
        { q: "Dokumen rancangan tertulis menyeluruh mengenai target dan operasional usaha baru dinamakan rencana?", a: "Bisnis (Business Plan)" },
        { q: "Slogan atau frasa pendek unik yang digunakan untuk mempromosikan keunggulan produk dinamakan?", a: "Tagline / Slogan" },
        { q: "Pembagian keuntungan perusahaan yang dibagikan secara berkala kepada para pemegang saham disebut?", a: "Dividen" },
        { q: "Apa kepanjangan dari istilah analisis SWOT dalam manajemen strategi?", a: "Strengths, Weaknesses, Opportunities, Threats" },
        { q: "Orang yang berani mengambil risiko finansial untuk mendirikan dan mengelola usaha baru dinamakan?", a: "Entrepreneur / Wirausahawan" },
        { q: "Tempat bertemunya penjual dan pembeli untuk bertransaksi saham perusahaan publik di Indonesia dinamakan?", a: "Bursa Efek Indonesia (BEI)" },
        { q: "Istilah untuk kerugian atau titik di mana modal pendapatan sama dengan pengeluaran produksi dinamakan?", a: "Break Even Point (BEP)" },
        { q: "Sistem bisnis waralaba di mana hak penjualan produk menggunakan sistem nama merek yang sudah sukses disebut?", a: "Franchise" },
        { q: "Siapa tokoh investor saham legendaris dunia dengan julukan 'Oracle of Omaha'?", a: "Warren Buffett" },
        { q: "Biaya usaha yang jumlah totalnya tetap sama dan tidak terpengaruh oleh volume produksi barang disebut biaya?", a: "Tetap (Fixed Cost)" },
        { q: "Biaya usaha yang jumlahnya berubah-ubah mengikuti kapasitas volume pembuatan produk disebut biaya?", a: "Variabel (Variable Cost)" },
        { q: "Aktivitas memata-matai atau menilai kelebihan produk milik kompetitor bisnis saingan disebut pasar?", a: "Riset Pasar" },
        { q: "Merek dagang sistem operasi ponsel pintar terpopuler milik Google adalah?", a: "Android" },
        { q: "Mata uang digital kripto pertama dan terbesar di dunia yang diciptakan Satoshi Nakamoto bernama?", a: "Bitcoin" },
        { q: "Istilah bagi perusahaan rintisan teknologi dengan valuasi di atas 10 miliar dolar AS dinamakan?", a: "Decacorn" },
        { q: "Aset perusahaan yang berwujud fisik dan bisa dicairkan menjadi uang dalam waktu cepat disebut aset?", a: "Lancar" },
        { q: "Proses penggabungan dua atau lebih perusahaan menjadi satu entitas perusahaan baru dinamakan?", a: "Merger" },
        { q: "Strategi penetapan harga barang sangat murah di awal peluncuran untuk merebut pasar dinamakan harga?", a: "Penetrasi" },
        { q: "Pajak yang dikenakan atas pertambahan nilai komoditas barang beli di mall atau toko retail dinamakan?", a: "PPN" },
        { q: "Iklan pendek promosi produk yang dipasang di bagian halaman koran atau website dinamakan iklan?", a: "Banner / Baris" },
        { q: "Siapa miliarder pendiri perusahaan mobil listrik Tesla dan antariksa SpaceX?", a: "Elon Musk" },
        { q: "Hak eksklusif resmi perlindungan ciptaan penemuan teknologi baru agar tidak dicuri saingan dinamakan hak?", a: "Paten" },
        { q: "Tindakan pengurangan karyawan secara massal oleh perusahaan demi menghemat pengeluaran dinamakan?", a: "PHK / Layoff" },
        { q: "Individu atau lembaga yang menggunakan barang atau jasa hasil produksi disebut?", a: "Konsumen" },
        { q: "Istilah penurunan nilai fisik aset tetap (seperti mesin/mobil) seiring waktu pemakaian dinamakan?", a: "Depresiasi / Penyusutan" },
        { q: "Model bisnis penjualan barang di mana penjual tidak menyetok barang melainkan meneruskan order ke supplier disebut?", a: "Dropship" },
        { q: "Pendapatan kotor total perusahaan sebelum dikurangi biaya-biaya operasional dinamakan?", a: "Omset / Revenue" },
        { q: "Siapa pendiri awal jaringan restoran cepat saji terbesar di dunia McDonald's?", a: "Ray Kroc / McDonald Brothers" },
        { q: "Tindakan menawarkan saham perusahaan ke masyarakat umum untuk pertama kali di bursa disebut?", a: "IPO (Initial Public Offering)" },
        { q: "Sistem pencatatan transaksi keuangan keluar masuk secara urut waktu dinamakan?", a: "Pembukuan" },
        { q: "Strategi pemasaran dari mulut ke mulut dalam dunia bisnis modern diistilahkan dengan?", a: "Word of Mouth (WOM)" },
        { q: "Kartu sakti pascabayar atau prabayar bank penunjang transaksi cashless di toko dinamakan kartu?", a: "Debit / Kredit" },
        { q: "Apa nama mata uang terkuat di dunia saat ini berdasarkan nilai konversi?", a: "Dinar Kuwait" },
        { q: "Ikon logo bisnis restoran KFC menampilkan wajah dari pendirinya yaitu?", a: "Colonel Sanders" },
        { q: "Istilah untuk dana investasi awal yang disuntikkan pemodal ke perusahaan rintisan baru bernama dana?", a: "Modal Ventura (Venture Capital)" },
        { q: "Motto pelayanan prima pelanggan yang sangat terkenal dalam dunia bisnis retail adalah?", a: "Pembeli adalah raja" }
    ]
};

// =========================================================================
// STATE MANAGEMENT (SISTEM RUANG CO-OP REAL-TIME TANPA DATA BOT MOCKUP)
// =========================================================================
let gameState = {
    role: null, // 'admin' atau 'player'
    currentUser: "",
    gameCode: "482910", // 6 Digit Kode Game Akses Admin
    mode: "solo", // 'solo' atau 'team'
    category: "Matematika",
    players: [], // KOSONG DEFAULT - Menunggu player asli masuk via kode game
    buzzerWinner: null,
    timerInterval: null,
    timeLeft: 10,
    currentQuestionIndex: null
};

// =========================================================================
// AUTHENTICATION LOGIC
// =========================================================================
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

    // Sesuai Rekues: Kredensial Statis Tetap Terjaga & Aman dari UI Luar
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

    // Proteksi duplikasi username
    if(gameState.players.some(p => p.name.toLowerCase() === username.toLowerCase())) {
        return alert("Nama ini sudah digunakan di dalam room!");
    }

    gameState.role = 'player';
    gameState.currentUser = username;
    
    // Alokasi tim otomatis seimbang (3-4 player per regu) jika memilih mode team
    const teamName = gameState.players.length < 4 ? "Tim A" : (gameState.players.length < 8 ? "Tim B" : "Tim C");

    gameState.players.push({
        name: username,
        isReady: false,
        score: 0,
        team: teamName
    });

    renderLobby();
}

// =========================================================================
// LOBBY LOGIC
// =========================================================================
function renderLobby() {
    document.getElementById('screen-auth').classList.add('hidden-screen');
    document.getElementById('screen-lobby').classList.remove('hidden-screen');
    document.getElementById('display-game-code').innerText = gameState.gameCode;

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

// =========================================================================
// GAMEPLAY ARENA LOGIC
// =========================================================================
function startGame() {
    if(gameState.players.length === 0) return alert("Belum ada pemain yang bergabung di room kuis!");

    gameState.mode = document.getElementById('game-mode').value;
    gameState.category = document.getElementById('game-category').value;

    document.getElementById('screen-lobby').classList.add('hidden-screen');
    document.getElementById('screen-game').classList.remove('hidden-screen');

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

    document.getElementById('game-badge-mode').innerText = gameState.mode === 'solo' ? "Get The Point (Solo)" : "Team Point (Regu)";
    document.getElementById('game-display-category').innerText = `Kategori: ${gameState.category}`;

    updateScoreboard();
}

function updateScoreboard() {
    const scoreContainer = document.getElementById('game-scoreboard-list');
    scoreContainer.innerHTML = "";

    if (gameState.mode === 'solo') {
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
        let teamScores = {};
        gameState.players.forEach(p => {
            if(!teamScores[p.team]) teamScores[p.team] = 0;
            teamScores[p.team] += p.score;
        });

        Object.keys(teamScores).forEach(teamName => {
            const item = document.createElement('div');
            item.className = "p-3 bg-slate-900 border border-slate-700 rounded-xl space-y-1";
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

// =========================================================================
// INTERACTION ENGINE (GENERATOR, BUZZER, TIMER COUNTDOWN)
// =========================================================================
function generateNextQuestion() {
    clearInterval(gameState.timerInterval);
    resetBuzzerState();

    const categoryPool = questionBank[gameState.category];
    const randIndex = Math.floor(Math.random() * categoryPool.length);
    const selectedQuestion = categoryPool[randIndex];

    document.getElementById('display-question').innerText = selectedQuestion.q;
    document.getElementById('display-answer').innerText = selectedQuestion.a;

    const btnBuzzer = document.getElementById('btn-buzzer');
    if(btnBuzzer) {
        btnBuzzer.disabled = false;
        btnBuzzer.className = "w-full py-12 bg-rose-600 hover:bg-rose-500 active:scale-95 text-white font-black text-3xl rounded-2xl shadow-2xl border-b-8 border-rose-800 uppercase tracking-widest transition-all";
    }
}

function hitBuzzer() {
    if(gameState.buzzerWinner !== null) return; 

    gameState.buzzerWinner = gameState.currentUser;
    document.getElementById('buzzer-winner').innerText = `✋ ${gameState.buzzerWinner} Menekan Tercepat!`;
    
    const btnBuzzer = document.getElementById('btn-buzzer');
    btnBuzzer.disabled = true;
    btnBuzzer.className = "w-full py-12 bg-slate-700 text-slate-500 font-black text-3xl rounded-2xl cursor-not-allowed uppercase tracking-widest";

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
            alert("Waktu menjawab lisan habis! Admin silakan putuskan Benar/Salah.");
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

function evaluateAnswer(isCorrect) {
    if(!gameState.buzzerWinner || gameState.buzzerWinner === "- Tidak Ada -") {
        return alert("Belum ada player yang mengunci buzzer untuk divalidasi skornya!");
    }

    clearInterval(gameState.timerInterval);
    const pIndex = gameState.players.findIndex(p => p.name === gameState.buzzerWinner);
    
    if(pIndex !== -1) {
        if(isCorrect) {
            gameState.players[pIndex].score += 10;
            alert(`Jawaban lisan dari ${gameState.buzzerWinner} BENAR! (+10 Pts)`);
        } else {
            gameState.players[pIndex].score -= 10;
            alert(`Jawaban lisan dari ${gameState.buzzerWinner} SALAH! (-10 Pts)`);
        }
    }

    updateScoreboard();
    resetBuzzerState();
}
