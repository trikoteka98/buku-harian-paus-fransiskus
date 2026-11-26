/* ============================================================
   IL DIARIO — arsip isi The Private Diary of Pope Francis
   Semua teks disusun dari sumber terbuka yang tercantum di bawah.
   ============================================================ */

const FACTS = [
  { value: "24 NOV 2026", label: "Tanggal rilis", foot: "dirilis 24 Nov · 94 negara" },
  { value: "5", label: "Bahasa", foot: "Italia · Inggris · Spanyol · Prancis · Portugis" },
  { value: "94", label: "Negara", foot: "sebaran internasional" },
  { value: "1992—2024", label: "Rentang catatan", foot: "20 Des 1992 – 18 Agu 2024" },
  { value: "86 + 55", label: "Halaman terisi", foot: "sebelum & sesudah menjadi Paus" },
  { value: "141 / 160", label: "Halaman buku", foot: "edisi Inggris / edisi lainnya" },
  { value: "9798217492480", label: "ISBN edisi Inggris", foot: "paperback Image Books, AS/Kanada" },
  { value: "3j 24m", label: "Durasi audiobook", foot: "dibaca Jim Morlino & Peter Ganim" },
  { value: "Sr. Bernadette Reis", label: "Penerjemah Inggris", foot: "dari naskah bahasa Spanyol" },
  { value: "1963", label: "Buku harian paus terakhir", foot: "Yohanes XXIII; sebagian naskah Yohanes Paulus II" }
];

const ASPECTS = [
  {
    id: "takut", cat: "Batin", icon: "🕯", iconName: "triangle-alert",
    title: "“Aku takut”",
    teaser: "Perasaan tidak memadai dan keinginan agar Tuhan ‘mengambilnya’ saja.",
    source: "Vatican News · 24 Nov 2026",
    body: [
      "Di agenda itu ia menulis singkat: <strong>“I am afraid”</strong> — takut tidak memadai dalam menjalankan perannya, atau bisa <strong>“menimbulkan kerugian”</strong> bagi orang lain. Ia bahkan meminta Tuhan ‘mengambilnya’.",
      "Pada akhir 1990-an, tidak lama setelah menjadi Uskup Agung Buenos Aires, ia dua kali menulis bahwa lebih baik ia mati daripada terus menimbulkan kerugian.",
      "Entri 2022 menyebut dirinya <strong>“Jorge yang sombong, cukup diri, sinis, dan menipu diri sendiri”</strong>. Fernández menyebut ini kejujuran yang menyentuh, bukan kerendahan hati retoris."
    ]
  },
  {
    id: "krisis", cat: "Batin", icon: "🌑", iconName: "moon",
    title: "Krisis 2021–2022",
    teaser: "‘Kekeringan, desolasi, masa gelap’ yang berujung damai.",
    source: "America Magazine · 24 Nov 2026",
    body: [
      "Krisis dimulai <strong>24 Januari 2021</strong>: ia merasakan ‘kekeringan, desolasi, masa gelap’, diperparah oleh operasi usus pada Juli 2021, nyeri lutut, dan ‘serangan menentukan dari kekuatan jahat’.",
      "Pada 3 April 2022 di Malta ia tak sanggup menyelesaikan Misa dan meminta Uskup Agung Scicluna menggantikannya. Sejak Mei 2022 ia menggunakan kursi roda. Hal itu menyakitkan dan memalukan bagi dirinya, tetapi juga menjadi pemurnian.",
      "Krisis usai akhir Desember 2022. Buahnya bukan misi baru yang spektakuler, melainkan <strong>penyerahan total ke tangan Tuhan</strong> yang menghasilkan penghormatan mendalam pada martabat orang lain.",
      "Yang sering terlewat: 2021–2022 justru tahun dengan <strong>tujuh perjalanan luar negeri</strong>, <em>Praedicate Evangelium</em>, <em>Traditiones Custodes</em>, Sinode, dan pengangkatan perempuan di jabatan Vatikan — reformasi yang memicu penolakan dan menyakitinya."
    ]
  },
  {
    id: "setan", cat: "Mistis", icon: "👁", iconName: "eye",
    title: "Tiga kali melihat setan",
    teaser: "Mata api, suara parau, dan pintu neraka.",
    source: "America Magazine · BBC · Vatican News",
    body: [
      "<strong>Pertama</strong>, dari dalam mobil: ia melihat mata yang ‘mengancam sekaligus memikat’. <strong>Kedua</strong>, di kapel paroki Karmelit Buenos Aires: ‘mata seperti api… tatapan lebih kuat dari sebelumnya, seperti kilatan api.’ Ia menulis, <strong>“Aku tidak ragu ia hadir secara fisik.”</strong>",
      "<strong>Ketiga</strong>, beberapa hari setelah kunjungan ke Chile Januari 2018: ‘Aku berada dalam rapat. Aku melihatnya dan mendengar suaranya, penuh kemenangan, menguasai segalanya: <em>Sekarang aku sudah mendapat semua yang kuinginkan.</em>’ Ia tak bisa melupakan ‘keparauan suaranya yang kuat’.",
      "Pada <strong>20 Februari 2018</strong>, saat Scicluna dikirim menyelidiki Chile: ‘perasaan takut, panik, gentar bahwa setan akan membalas’ berlangsung hampir semalaman. Keesokan harinya datang kabar bahwa Scicluna sakit dan menjalani operasi: <strong>“Sekarang aku mengerti gelisah tadi malam.”</strong>",
      "<strong>7 Juni 2018</strong>: ‘Aku melihat pintu masuk neraka. Godaan pagan penuh daya… aku menggenggam rosario sebagai senjata.’ Ia menambahkan: ‘Berbahaya mendekati gerbang neraka, karena api bisa menyembur dan membakar.’",
      "Setan juga muncul di <strong>paragraf terakhir</strong> buku harian itu, saat Fransiskus menoleh kembali pada hidupnya — lalu ditutup dengan doa perlindungan kepada Bunda Maria."
    ]
  },
  {
    id: "bantal", cat: "Mistis", icon: "🛡", iconName: "shield",
    title: "Bantal belas kasih",
    teaser: "‘Diselamatkan dari kehancuran’ pada 1 Mei 2019.",
    source: "Vatican News · wawancara Kardinal Fernández",
    body: [
      "Kutipan yang paling menyentuh Fernández: <strong>“Aku merasa pasti bahwa Tuhan mengasihi aku secara istimewa. Itu masa panjang ketika Tuhan menunjukkan kasih-Nya kepadaku dan kesetiaan-Nya… Rasanya seperti ada bantal yang membungkusku dan menyelamatkan aku dari kehancuran.”</strong> (1 Mei 2019)",
      "Di kapel ia menulis: <strong>“Ia tersenyum… aku merasakan tatapan belas kasih Yesus.”</strong> Pada April 2019: ‘Aku merasakan tatapan belas kasih Tuhan dan terdorong berdoa.’",
      "Ia tidak pernah menceritakan pengalaman rohani ini kepada Fernández — padahal soal sosial, politik, dan pastoral ia berbicara tanpa sisa. Fernández: justru itulah yang membuat penerbitannya penting.",
      "Tentang penglihatan setan, Fernández menolak membacanya sekadar sebagai imajinasi: itu adalah momen yang <strong>Tuhan izinkan</strong> agar Fransiskus meninggalkan kedangkalan dan masuk ke kedalaman hidup. Secara lahiriah ia tetap ceria, bercanda, dan tertawa."
    ]
  },
  {
    id: "devosi", cat: "Devosi", icon: "🙏", iconName: "heart",
    title: "Yusuf, Thérèse, Luján",
    teaser: "Kertas doa di bawah patung, mawar putih, Bunda Maria.",
    source: "Vatican News · America Magazine",
    body: [
      "Kebiasaannya meletakkan <strong>kertas kecil berisi permintaan di bawah citra St. Yusuf yang ‘tidur’</strong> ia sebut sebagai <em>“kontemplasi pasif”</em> — cara untuk tidak bertumpu pada kekuatan sendiri dan mengakui kebutuhan akan pertolongan. Fernández menyebut sebagian besar permintaan itu dikabulkan.",
      "Permintaan lewat <strong>St. Thérèse dari Lisieux</strong> sering dijawab dengan kemunculan <strong>mawar putih</strong> di berbagai tempat dan waktu.",
      "Devosi lain: <strong>Bunda Maria dari Luján</strong>, St. Yusuf, dan <em>Salus populi Romani</em> yang lama ia tatap sambil ‘membiarkan diri dipeluk’. Menjelang wafat ia meminta Maria ‘melindungi dan menolongku’.",
      "Di Fatima 2023, saat Hari Pemuda Sedunia Lisbon, ia tidak mengucapkan apa pun di hadapan Bunda Maria. Jawabannya ada di catatan Oktober: <strong>“Aku menatap dan berdoa.”</strong> Ia sedang berbicara dengan Maria."
    ]
  },
  {
    id: "panggilan", cat: "Devosi", icon: "✝", iconName: "cross",
    title: "21 September 1953",
    teaser: "Pengalaman mistis sebelum usia 17 → moto episkopal.",
    source: "America Magazine",
    body: [
      "Pada pesta <strong>St. Matius</strong>, menjelang ulang tahun ke-17, Bergoglio mengalami pengalaman bernuansa mistis tentang belas kasih Tuhan. Itu menjadi tiang utama hidup rohaninya.",
      "Dari pengalaman itu lahir moto episkopalnya: <strong>Miserando atque eligendo</strong> — ‘Dengan belas kasih, Ia memilih’.",
      "Teks Kitab Suci yang paling menonjol dalam catatannya menurut Fernández adalah <strong>Yehezkiel 16</strong>."
    ]
  },
  {
    id: "tubuh", cat: "Tubuh", icon: "☀", iconName: "sunrise",
    title: "Jam empat pagi",
    teaser: "Askese, kelelahan dikesampingkan, waktu yang terasa pendek.",
    source: "America Magazine · Vatican News",
    body: [
      "Ia bangun pukul <strong>04.00</strong> untuk membaca Alkitab, dan menyimpan Alkitab di nakas untuk dibaca bila terbangun pada malam hari.",
      "Fernández menyebut askese dan gaya hidup pengorbanan diri, bahkan ‘kepahlawanan dalam amal pastoral’. Kelelahan serta gangguan kesehatan sejak 1990-an ia sisihkan demi pengabdian pada pelayanan.",
      "Ia sering merasa <strong>“waktu tinggal sedikit”</strong> meski baru berusia 62. Pada <strong>24 Desember 2009</strong>, kepala polisi Buenos Aires mengingatkannya soal ‘kemungkinan serangan’.",
      "Ia tidak takut pada kematian; pada saat-saat tergelap justru ia meminta Tuhan ‘mengambilnya’ agar tidak lagi menimbulkan kerugian."
    ]
  },
  {
    id: "martabat", cat: "Gereja", icon: "⚖", iconName: "scale",
    title: "Martabat manusia",
    teaser: "‘Profesi Kristen yang berani + promosi martabat.’",
    source: "Vatican News · America Magazine",
    body: [
      "Di Santa Marta ada lukisan dengan kalimat Virgil <strong>“There are tears of things”</strong> — ‘ada air mata atas segala sesuatu’. Ia menandainya sebagai ajakan belas kasih menghadapi penderitaan orang.",
      "Dalam <strong>Dokumen Puebla</strong>, ia menandai dengan tinta merah: <em>“profesi Kristen yang berani dan promosi martabat manusia yang efektif.”</em> Fernández menegaskan: ia menolak dibingkai sebagai politisi tanpa iman.",
      "Dokumen <strong>Aparecida</strong> ia garisbawahi: <em>“pengalaman religius… kita harus menawarkan kepada semua umat sebuah perjumpaan pribadi dengan Yesus Kristus, pengalaman religius yang mendalam dan intens.”</em>",
      "Martabat yang dimaksudkan meliputi orang miskin, penyandang disabilitas, migran, dan tahanan. Ia juga menulis rasa malu atas pelecehan anak di Gereja: <strong>21 Juli 2018</strong> ‘Betapa malu dan betapa jahatnya hal ini bagi Gereja’; <strong>6 Agustus 2018</strong> ‘Pintu neraka lagi… semoga kekudusan dan pertobatan berlimpah di tengah skandal ini.’"
    ]
  },
  {
    id: "ignasian", cat: "Batin", icon: "🧭", iconName: "compass",
    title: "Pembedaan roh",
    teaser: "‘Aku merasakannya di hatiku.’",
    source: "America Magazine",
    body: [
      "Seluruh hidupnya sebagai uskup dan Paus dipengaruhi oleh <strong>spiritualitas Ignasian</strong> dan <em>discernment of spirits</em>.",
      "Ia selalu memperhatikan <strong>“apa yang terjadi di dalam”</strong>, mengikuti dorongan ilahi, dan memurnikan apa yang tidak sesuai dengan rencana Tuhan.",
      "Ungkapan yang sering ia ucapkan terkait tindakan atau keputusan: <strong>“I felt it in my heart.”</strong>",
      "Ia ingin ‘membudayakan kehidupan batin yang memuliakan Tuhan’, sambil terus mengakui ‘kelemahan kemanusiaannya sendiri’."
    ]
  },
  {
    id: "omnipotensi", cat: "Gereja", icon: "🏛", iconName: "crown",
    title: "Godaan mahakuasa",
    teaser: "‘Tidak tahu mengatakan tidak’ → jalan reformasi.",
    source: "America Magazine",
    body: [
      "<strong>25 November 2018</strong>: ‘Rasa cukup diri ini dan “aku bisa menyelesaikan semuanya” membawaku ke gerbang neraka. Aku tak bisa melupakan hari itu.’ Ia lanjut: ‘tidak tahu cara mengatakan <em>tidak</em>, mengambil alih masalah seolah aku mahakuasa… <strong>Aku jelas mendengar suara setan.</strong>’",
      "Menurut Fernández, ini godaan kekuasaan: rasa ingin tahu yang ‘mereduksi’ — keinginan mengetahui seperti apa rasanya menjadi seperti Tuhan, lalu keinginan menguasai dan ‘membeli’ orang untuk masuk ke dalam proyeknya.",
      "Godaan itu paling kuat pada mereka yang berkuasa, terutama Paus yang berisiko ‘merasa di atas dunia’. Karena itu Fransiskus sengaja menghindari simbol maupun ungkapan <strong>‘kemegahan’ dan ‘kejayaan’ kepausan</strong>.",
      "Jalan keluar yang ia pilih: pengabdian penuh dengan kepercayaan, belas kasih pada orang miskin, sakit, dan kesepian, serta reformasi seperti <em>Praedicate Evangelium</em> dan Sinode."
    ]
  },
  {
    id: "humor", cat: "Batin", icon: "😌", iconName: "smile",
    title: "Ceria di luar, gelap di dalam",
    teaser: "Ia tetap bercanda sambil berperang batin.",
    source: "Vatican News · America Magazine",
    body: [
      "Fernández menegaskan: dari luar, tak ada yang mencuri sukacita dan humor Fransiskus. <strong>Ia bercanda dan tertawa.</strong>",
      "Namun di dalam, pengalaman-pengalaman itu memberi pesan: <em>waspadalah, ingatlah untuk apa engkau hidup, jalani misimu dengan sungguh-sungguh, jangan kehilangan arah.</em>",
      "Fernández menolak memberi wawancara pribadi tentang Fransiskus setelah wafatnya — ‘di satu sisi aku merasa pengecut, di sisi lain aku tak menemukan kata yang tepat’. Buku ini menjadi caranya membiarkan Fransiskus <strong>berbicara tentang dirinya sendiri</strong>.",
      "Ia mengaku terkejut saat pertama membaca naskah: ada hal-hal yang belum pernah ia dengar, bukan gosip, melainkan fakta penting untuk memahami jiwa Fransiskus secara langsung."
    ]
  },
  {
    id: "boneka", cat: "Gereja", icon: "🎭", iconName: "users",
    title: "Tak ingin jadi ‘boneka’",
    teaser: "Mengapa ia membiarkan pengkritiknya tetap di kursi.",
    source: "CNN · CBC · Infovaticana",
    body: [
      "Dalam rapat 2023, seorang uskup bertanya mengapa Fransiskus belum memecat pejabat Kuria yang sering berbicara buruk tentangnya di depan umum dan mengejar agenda pribadi. Setelah hening panjang, ia menjawab bahwa ia merasakan dorongan kuat di hati: Tuhan tidak ingin ia menjadi <strong>‘puppeteer yang memakai dan memanipulasi orang sesuai keinginannya sendiri’</strong>.",
      "Karena itu ia memilih membiarkan orang itu tetap di posisinya. Entri 30 Desember 2022 menolak godaan memperlakukan <strong>‘orang lain seperti boneka’</strong> dan memperingatkan ‘berbagai cara membeli’ orang. Orang yang dimaksud tidak pernah diidentifikasi.",
      "Ia juga dikenal sering berkata: <strong>‘Setan masuk lewat saku’</strong> — mengaitkan setan dengan gosip dan uang.",
      "Yang benar-benar tertulis di agenda: pada <strong>30 Desember 2022</strong> ia menolak menjadi ‘orang yang memakai orang lain seperti boneka’ dan mengutip ‘berbagai cara membeli’. Semua penilaian tentang pejabat tertentu berasal dari komentar Fernández, bukan dari tulisan tangan Fransiskus, sehingga tidak dimuat di sini."
    ]
  },
  {
    id: "mimpi", cat: "Mistis", icon: "💭", iconName: "cloud-moon",
    title: "Tuhan berbicara lewat mimpi",
    teaser: "Catatan 1992 diberi catatan pinggir pada 2022.",
    source: "Infovaticana · CNN",
    body: [
      "Entri pertama 1992 merekam mimpi: sebagai uskup pembantu ia mengambil jalan pesisir ‘bajo’ alih-alih rute langsung menuju Misa, mengalami hambatan, dan tiba sepuluh menit terlambat. Kesimpulannya saat itu: <strong>‘Buatlah pilihan pasti tentang jalan yang harus dijalani.’</strong>",
      "Pada <strong>23 Januari 2022</strong> ia menambahkan catatan pinggir: <strong>‘Tuhan berbicara kepadaku lewat mimpi.’</strong>",
      "Mimpi lain pada <strong>13 Januari 2017</strong>: ia sudah mengemas koper di sebuah komunitas pedesaan, merasa harus pergi, dan seorang bernama Pucheta menanyakan mengapa ia masih menunggu. Ia bertanya apakah itu peringatan atau godaan, dan memohon: ‘Tuhan, demi kehati-hatian, jangan tutup pintu bagiku.’",
      "Tentang Fatima, catatan Oktober 2023 berbunyi <strong>‘Aku menatap dan bertanya’</strong> serta <strong>‘Aku menatapnya dan ia berbicara kepadaku’</strong>. Infovaticana mencatat kunjungannya terjadi pada <strong>5 Agustus 2023</strong> — ada perbedaan tanggal dengan ringkasan Vatican News."
    ]
  },
  {
    id: "rahmat", cat: "Batin", icon: "💧", iconName: "droplet",
    title: "‘MERCY: this is God’",
    teaser: "Retret, Yehezkiel 16, dan Yubelium Kerahiman.",
    source: "Infovaticana",
    body: [
      "Dalam retret Prapaskah 2014 ia kembali ke <strong>Yehezkiel 16</strong>, teks yang paling sering muncul di halamannya. Ia menulis bahwa tak ada pilihan selain mengingat, merasa malu, dan tidak berani membuka mulut.",
      "<strong>23 Februari 2015</strong>: ‘Aku sering melihat Tuhan perlahan mempersiapkanku untuk apa yang akan Ia minta. Ia membimbingku’ — dua kata terakhir digarisbawahi dua kali.",
      "<strong>25 Februari 2015</strong>, dengan huruf kapital: <strong>‘MERCY: this is God’</strong>, disusul kesimpulan bahwa solusi segalanya adalah ‘kembali ke Rahmat, tidak lelah dengan Rahmat, keutamaan Rahmat’. Dua minggu kemudian, <strong>13 Maret 2015</strong>, ia mengumumkan Tahun Yubelium Kerahiman.",
      "Pada <strong>9 April 2016</strong> nada berubah: serangan setan ‘meningkat, lebih kuat dan lebih mendadak (seperti kilat)’. Ia meminta ‘rahmat ketabahan akhir’."
    ]
  },
  {
    id: "kebenaran", cat: "Batin", icon: "🛤", iconName: "route",
    title: "Jalan pengakuan kebenaran",
    teaser: "30 Desember 2022: titik balik yang ia namai sendiri.",
    source: "Infovaticana · CNN",
    body: [
      "Membaca ulang entri <strong>24 Januari 2021</strong>, ia menulis: ‘Aku pikir ini awal dari jalan yang lain’ — jalan ‘penjauhan dan keduniaan’. Di akhir 2022 ia menyebut jalan itu <strong>‘pengakuan akan kebenaran’</strong>.",
      "Ia meratapi ‘Jorge yang sombong, cukup diri dan sinis’, menolak menjadi orang yang memakai orang lain seperti boneka, dan mengutip Yehezkiel 16:34 soal ‘berbagai cara membeli’ orang.",
      "Kekuatan yang ia sebutkan: belas kasih pada yang paling miskin, sakit, dan terhina; ‘jiwa-jiwa besar yang membela cita Kristen’; kenangan keluarga dan kedua neneknya; serta ‘penghinaan’ — dalam tanda kutip — pada orang yang cukup diri dan berkuasa.",
      "Ia bertekad <strong>‘mendelegasikan tanpa menuntut banyak penjelasan’</strong> agar tidak jatuh kembali ke saling curiga. Dari René Voillaume ia menandai peringatan bahaya terakhir usia tua: <strong>‘jatuh ke dalam keputusasaan yang tersembunyi’</strong>.",
      "Dua hari sebelum entri itu ia meminta doa untuk Benediktus XVI yang ‘sangat sakit’. Benediktus wafat keesokan harinya, <strong>31 Desember 2022</strong> — tak ada satu pun catatan tentang itu dalam buku."
    ]
  }
];

const TIMELINE = [
  { date: "21 SEP 1953", title: "Pengalaman mistis pertama", text: "Pesta St. Matius, sebelum usia 17 — belas kasih Tuhan jadi tiang hidup; kelak moto Miserando atque eligendo.", key: true },
  { date: "20 DES 1992", title: "Catatan pertama", text: "Di Buenos Aires, enam bulan setelah diangkat jadi uskup pembantu. Agenda hitam mulai terisi." },
  { date: "23 FEB 2015", title: "‘MERCY: this is God’", text: "Tiga entri penting: Tuhan mempersiapkannya, merahmati orang rendah hati, dan mengutamakan rahmat." },
  { date: "13 MAR 2015", title: "Yubelium Kerahiman", text: "Diumumkan dua minggu setelah entri ‘MERCY: this is God’ — buku tidak menghubungkan keduanya." },
  { date: "13 MAR 2013", title: "Terpilih menjadi Paus", text: "21 Juli 2013 ia menulis: “Pada 13 Maret mereka memilihku menjadi Paus.”" },
  { date: "9 APR 2016", title: "Serangan meningkat", text: "Godaan setan ‘lebih kuat dan lebih mendadak, seperti kilat’; ia meminta rahmat ketabahan akhir." },
  { date: "13 JAN 2017", title: "Mimpi koper", text: "Seorang bernama Pucheta menanyakan mengapa ia masih menunggu; apakah peringatan atau godaan?" },
  { date: "JAN 2018", title: "Chile & Uskup Barros", text: "Ia membela Uskup Juan Barros yang dituduh menutupi kasus pelecehan; kemudian mengakui kekeliruannya dan mengirim Scicluna." },
  { date: "18–23 FEB 2018", title: "Retret Ariccia", text: "‘Aku ingin punya ibu, mati sambil mencari ibu’; Yehezkiel 16; ‘sejarah air mata yang tidak ditangiskan’." },
  { date: "20 FEB 2018", title: "Panik semalaman", text: "Takut setan membalas; keesokan harinya kabar Scicluna sakit → “Sekarang aku mengerti gelisah tadi malam.”" },
  { date: "8 APR 2018", title: "Surat untuk Chile", text: "Ia mengakui kesalahan penilaian; bulan berikutnya para uskup Chile mengajukan pengunduran diri." },
  { date: "7 JUN 2018", title: "Pintu neraka", text: "“Aku menggenggam rosario sebagai senjata… godaan pagan tidak punya masa depan, tak ada ruang harapan.”", key: true },
  { date: "25 NOV 2018", title: "Godaan mahakuasa", text: "“Tidak tahu mengatakan tidak… aku jelas mendengar suara setan.”" },
  { date: "11 MAR 2019", title: "Tanpa titik rujukan", text: "Sesudah KTT Vatikan soal pelecehan: ‘lelah, hampir tanpa penopang rohani dan tanpa titik rujukan.’" },
  { date: "1 MEI 2019", title: "Bantal belas kasih", text: "“Rasanya seperti ada bantal yang membungkusku dan menyelamatkan aku dari kehancuran.”", key: true },
  { date: "24 JAN 2021", title: "Krisis rohani mulai", text: "Kekeringan, desolasi, masa gelap; operasi usus Juli 2021 dan serangan batin." },
  { date: "4 JUL 2021", title: "Operasi di Gemelli", text: "Operasi stenosis divertikular usus; nyeri lutut membuatnya tak bisa memimpin Misa pada 2022." },
  { date: "23 JAN 2022", title: "Catatan pinggir atas mimpi", text: "Tiga dekade setelah mimpi 1992 ia menulis: “Tuhan berbicara kepadaku lewat mimpi.”" },
  { date: "3 APR 2022", title: "Malta & kursi roda", text: "Tak sanggup menyelesaikan Misa; sejak Mei 2022 kursi roda — penderitaan yang jadi pemurnian." },
  { date: "DES 2022", title: "Krisis berakhir", text: "Penyerahan total pada Tuhan; melahirkan sintesis spiritualitasnya yang paling matang." },
  { date: "5 AGU 2023", title: "Fatima", text: "Ia menatap Bunda Maria tanpa kata-kata: “Aku menatap dan bertanya.”" },
  { date: "2023", title: "C'est la confiance & Fatima", text: "Nasihat apostolik tentang St. Thérèse, dan kunjungan ke Fatima saat Hari Pemuda Sedunia Lisbon." },
  { date: "18 DES 2023", title: "Fiducia supplicans", text: "Dokumen yang disetujui dalam audiensi ini tidak dibahas dalam buku." },
  { date: "18 AGU 2024", title: "Entri terakhir", text: "Tentang setan, ditutup doa meminta perlindungan Bunda Maria.", key: true },
  { date: "2024", title: "Dilexit nos", text: "Ensiklik terakhir tentang Hati Kristus — buah dari krisis yang sudah dijalani." },
  { date: "21 APR 2025", title: "Wafat", text: "Sebelumnya ia menunjukkan agenda itu ke Fernández: “Kalian yang nanti lihat… whatever is for edification.”" },
  { date: "24 NOV 2026", title: "Buku terbit", text: "Lima bahasa, 94 negara, disunting Fernández dengan restu Paus Leo XIV.", key: true }
];

const QUOTES = [
  { text: "Aku takut.", date: "TANPA TANGGAL · VATICAN NEWS" },
  { text: "Kemarin malam aku melihat pintu masuk neraka. Godaan pagan penuh daya… aku menggenggam rosario sebagai senjata.", date: "7 JUNI 2018" },
  { text: "Rasanya seperti ada bantal yang membungkusku dan menyelamatkan aku dari kehancuran.", date: "1 MEI 2019" },
  { text: "Ia tersenyum… aku merasakan tatapan belas kasih Yesus.", date: "TANPA TANGGAL · VATICAN NEWS" },
  { text: "Pada 13 Maret mereka memilihku menjadi Paus.", date: "21 JULI 2013" },
  { text: "Jorge yang sombong, cukup diri, sinis, dan menipu diri sendiri.", date: "2022" },
  { text: "Aku menatap dan berdoa.", date: "OKTOBER 2023 · FATIMA" },
  { text: "Sekarang aku mengerti gelisah tadi malam.", date: "21 FEBRUARI 2018" },
  { text: "Betapa malu dan betapa jahatnya hal ini bagi Gereja.", date: "21 JULI 2018" },
  { text: "Kalian yang nanti lihat… whatever is for edification.", date: "FRANSISKUS KEPADA FERNÁNDEZ" }
];

const EXCLUDED = [
  { title: "Tulisan berkode", text: "Bagian paling rahasia memakai tanda aneh seperti hieroglif yang tak bisa dibaca — Fernández menghormati keinginan agar tak dibaca orang." },
  { title: "Orang yang masih hidup", text: "Paragraf tentang orang hidup dicoret; Paus Leo XIV juga meminta kalimat yang bisa membingungkan dihapus." },
  { title: "Urusan praktis", text: "Jadwal pertemuan dan pengingat seperti ‘pergi ke dokter gigi’ dianggap tak memberi pesan apa-apa bagi pembaca." },
  { title: "Frasa berulang", text: "Beberapa kalimat repetitif atau yang tak menambah apa-apa sengaja tidak dimuat." },
  { title: "Keputusan kontroversial", text: "Buku tidak memuat keterangan soal keputusan kepausan yang paling kontroversial." },
  { title: "Konteks sejarah", text: "Fernández memberi tafsir teologis, bukan konteks historis — ini menjadi kritik dari sejumlah pembaca." },
  { title: "Kesaksian Viganò", text: "Tidak ada entri soal pernyataan Kardinal Carlo Maria Viganò yang terbit 25 Agustus 2018." },
  { title: "Tahun 2020", text: "Sama sekali tidak ada catatan dari tahun pandemi yang dimuat dalam pilihan Fernández." },
  { title: "Dokumen 2023–2024", text: "Fiducia supplicans, Dignitas infinita, norma soal fenomena supranatural, dan catatan Medjugorje tidak muncul." },
  { title: "Wafatnya Benediktus XVI", text: "Benediktus wafat 31 Desember 2022, sehari setelah entri terakhir krisis — tak ada catatan tentang itu." },
  { title: "Keputusan 2021–2022", text: "Sidang Becciu, perjanjian China, restrukturisasi Ordo Malta, dan keputusan- keputusan tidak dibahas." }
];

const INCLUDED = [
  { title: "Obrolan dengan Merkel", text: "Percakapan dengan Angela Merkel tetap dimuat, demikian juga keluhan soal beberapa orang Argentina." },
  { title: "Orang yang sudah wafat", text: "Keluhan tentang orang-orang yang telah meninggal tidak disensor." },
  { title: "Hal yang mengganggu", text: "Fernández: buku berisi semua yang berharga, termasuk hal provokatif dan mengganggu, tanpa disembunyikan." },
  { title: "Pengalaman batin yang tak pernah diceritakan", text: "Tentang Yesus, Maria, dan setan — yang bahkan tidak ia sampaikan kepada Fernández." },
  { title: "Seni di ruang kerja", text: "Bagian II membahas karya seni dan gambar di ruang kerja di Domus Santa Marta yang ia maknai." },
  { title: "Garis bawah di empat buku", text: "Dokumen Puebla, Aparecida, dan kalimat Virgil ‘ada air mata atas segala sesuatu’ ikut dibedah." },
  { title: "Kata ‘boneka’ dari buku harian", text: "Entri 30 Desember 2022 menolak memperlakukan orang lain seperti boneka dan menyebut ‘berbagai cara membeli’." },
  { title: "Kisah ‘boneka’", text: "Percakapan 2023 soal pejabat Kuria yang mengkritiknya dan keputusan untuk tidak memecatnya." },
  { title: "Mimpi & retret Ariccia", text: "Mimpi 1992 dan 2017, catatan pinggir 2022, serta entri retret Februari 2018." }
];

const STRUCTURE = [
  { num: "01", title: "Il Diario", text: "Kutipan catatan tangan yang ditafsirkan dan dikontekstualkan secara teologis oleh Kardinal Fernández, diurutkan per topik." },
  { num: "02", title: "Gambar & karya seni", text: "Benda-benda visual di ruang kerjanya di Domus Santa Marta — semuanya diberi makna oleh Fernández." },
  { num: "03", title: "Garis bawah", text: "Garis bawah yang ia buat di empat buku yang diminta dikirim dari Buenos Aires setelah terpilih menjadi Paus." }
];

const SOURCES = [
  { host: "VATICAN", title: "Humanity, fears, thirst for God, temptations: Francis' mystical side in ‘Diary’", url: "https://www.vaticannews.va/en/vatican-city/news/2026-11/personal-diary-pope-francis-cardinal-fernandez-book.html" },
  { host: "VATICAN", title: "Cardinal Fernández: ‘The Diary reveals Francis' heart and his spirituality’", url: "https://www.vaticannews.va/en/vatican-city/news/2026-11/cardinal-fernandez-interview-diary-pope-francis.html" },
  { host: "AMERICA", title: "Private diary reveals encounters with the devil, a spiritual crisis and profound inner life", url: "https://www.americamagazine.org/vatican-dispatch/2026/11/24/pope-francis-private-diary-devil-spiritual-crisis/" },
  { host: "WIKIPEDIA", title: "The Private Diary of Pope Francis — ringkasan, agenda, dan daftar sumber", url: "https://en.wikipedia.org/wiki/The_Private_Diary_of_Pope_Francis" },
  { host: "BBC", title: "Pope Francis' diary reveals claims he saw the devil three times", url: "https://www.bbc.com/news/articles/cm78270l4z7no" },
  { host: "REUTERS", title: "Pope Francis had visions of the Devil and Hell, diaries reveal", url: "https://www.reuters.com/world/pope-francis-had-visions-devil-hell-diaries-reveal-2026-11-24/" },
  { host: "WAPO", title: "The temptation of Pope Francis: private diary reveals torment, visions of Devil", url: "https://www.washingtonpost.com/world/2026/11/24/pope-francis-private-diary-reveals-torment-visions-devil/" },
  { host: "CNN", title: "Pope Francis battled visions of the devil during a two-year spiritual crisis", url: "https://www.cnn.com/2026/11/24/europe/pope-francis-private-diaries-intl-latam" },
  { host: "CBC", title: "Private diaries of Pope Francis reveal spiritual crisis and visions of the devil", url: "https://www.cbc.ca/news/world/pope-francis-crisis-devil-hell-9.7433668" },
  { host: "PRH", title: "The Private Diary of Pope Francis — ISBN, penerjemah, dan format buku", url: "https://www.penguinrandomhouse.com/books/863775/the-private-diary-of-pope-francis-by-pope-francis-and-victor-manuel-fernandez/" },
  { host: "INFOVATICANA", title: "Francis feared being a ‘puppeteer’ in 2021 and 2022", url: "https://infovaticana.com/en/2026/11/24/francis-feared-being-a-puppeteer-in-2021-and-2022-what-the-newspaper-reports-and-what-he-signed/" }
];

/* Kutipan verbatim yang dipublikasikan media (bahasa Inggris).
   Bukan seluruh naskah buku; buku harian aslinya ditulis tangan dalam bahasa Spanyol. */
const SRC_URL = {
  "America Magazine": "https://www.americamagazine.org/vatican-dispatch/2026/11/24/pope-francis-private-diary-devil-spiritual-crisis/",
  "BBC": "https://www.bbc.com/news/articles/cm78270l4z7no",
  "Vatican News": "https://www.vaticannews.va/en/vatican-city/news/2026-11/personal-diary-pope-francis-cardinal-fernandez-book.html",
  "Vatican News / interview": "https://www.vaticannews.va/en/vatican-city/news/2026-11/cardinal-fernandez-interview-diary-pope-francis.html",
  "The Washington Post": "https://www.washingtonpost.com/world/2026/11/24/pope-francis-private-diary-reveals-torment-visions-devil/",
  "CNN": "https://www.cnn.com/2026/11/24/europe/pope-francis-private-diaries-intl-latam",
  "CBC": "https://www.cbc.ca/news/world/pope-francis-crisis-devil-hell-9.7433668",
  "Penguin Random House": "https://www.penguinrandomhouse.com/books/863775/the-private-diary-of-pope-francis-by-pope-francis-and-victor-manuel-fernandez/",
  "Infovaticana": "https://infovaticana.com/en/2026/11/24/francis-feared-being-a-puppeteer-in-2021-and-2022-what-the-newspaper-reports-and-what-he-signed/"
};

const ORIGINALS = [
  {
    "date": "TANPA TANGGAL",
    "en": "I am afraid",
    "id": "Aku takut.",
    "source": "Vatican News"
  },
  {
    "date": "12 FEB 2013",
    "en": "Yesterday the Pope resigned.",
    "id": "Kemarin Paus mengundurkan diri.",
    "source": "Vatican News"
  },
  {
    "date": "21 JUL 2013",
    "en": "On 13 March they elected me Pope.",
    "id": "Pada 13 Maret mereka memilihku menjadi Paus.",
    "source": "Vatican News / interview"
  },
  {
    "date": "2016",
    "en": "If the devil is attacking so blatantly, it's because there's not much time left and he wants his prey",
    "id": "Jika setan menyerang dengan begitu terang-terangan, itu karena waktu tinggal sedikit dan ia menginginkan mangsanya.",
    "source": "Vatican News"
  },
  {
    "date": "SEBAGAI USKUP AGUNG · DARI MOBIL",
    "en": "his menacing and, at the same time, seductive eyes",
    "id": "matanya yang mengancam sekaligus memikat.",
    "source": "America Magazine"
  },
  {
    "date": "KAPEL KARMELIT · BUENOS AIRES",
    "en": "He looked at me with flaming eyes... more intense than the previous one. They were like flashes of fire",
    "id": "Ia menatapku dengan mata berapi… lebih intens dari sebelumnya. Seperti kilatan api.",
    "source": "BBC"
  },
  {
    "date": "TANPA TANGGAL",
    "en": "I don't doubt that he was physically present.",
    "id": "Aku tidak ragu bahwa ia hadir secara fisik.",
    "source": "America Magazine"
  },
  {
    "date": "TANPA TANGGAL",
    "en": "I clearly heard the voice of the devil",
    "id": "Aku jelas mendengar suara setan.",
    "source": "Vatican News"
  },
  {
    "date": "2018 · CHILE",
    "en": "Devastated because of the situation in Chile",
    "id": "Hancur karena situasi di Chile.",
    "source": "BBC"
  },
  {
    "date": "2021 · MENOLEH KE CHILE",
    "en": "It was hard for me to admit what happened in Chile; I didn't think it was so serious.",
    "id": "Sulit bagiku mengakui apa yang terjadi di Chile; aku tidak menyangka begitu serius.",
    "source": "BBC"
  },
  {
    "date": "2018 · SETELAH CHILE",
    "en": "I saw him and heard his voice, triumphant, possessing everything",
    "id": "Aku melihatnya dan mendengar suaranya, penuh kemenangan, menguasai segalanya.",
    "source": "BBC"
  },
  {
    "date": "2018 · RAPAT",
    "en": "Now I've gotten everything I wanted.",
    "id": "Sekarang aku sudah mendapat semua yang kuinginkan.",
    "source": "America Magazine"
  },
  {
    "date": "2018 · RAPAT",
    "en": "I can't forget the powerful raspiness of his voice",
    "id": "Aku tak bisa melupakan keparauan suaranya yang kuat.",
    "source": "BBC"
  },
  {
    "date": "20 FEB 2018",
    "en": "During dinner, a sensation of fear, panic, fright that the devil would take revenge. It lasted a good part of the night.",
    "id": "Saat makan malam, ia merasakan takut, panik, dan gentar bahwa setan akan membalas. Berlangsung hampir semalaman.",
    "source": "America Magazine"
  },
  {
    "date": "21 FEB 2018",
    "en": "Now I understand last night's restlessness.",
    "id": "Sekarang aku mengerti gelisah tadi malam.",
    "source": "America Magazine"
  },
  {
    "date": "7 JUN 2018",
    "en": "Last night I saw the entrance to Hell. Pagan seduction in full force. I peeked in to look a little and it terrified me. It was before going to sleep. I grabbed the rosary as a weapon. I thank God for this help. Prayer alone makes room for the Lord to save us….This isn't the first time in my life I've had this experience, but this time the intensity was voracious. It's dangerous to approach the gate of hell, because the flames can leap out and burn. Pagan seduction is strong but closed in on itself. It has no future; there's no room for hope in it. Its brightness is blinding, and nothing else matters.",
    "id": "Kemarin malam aku melihat pintu masuk neraka. Godaan pagan penuh daya. Aku mengintip sedikit dan aku ketakutan. Itu sebelum tidur. Aku menggenggam rosario sebagai senjata. Aku bersyukur kepada Tuhan atas pertolongan itu. Hanya doa yang memberi ruang bagi Tuhan untuk menyelamatkan kita… Ini bukan pertama kalinya aku mengalami hal ini, tetapi kali ini intensitasnya mengganas. Berbahaya mendekati gerbang neraka, karena api bisa menyembur dan membakar. Godaan pagan itu kuat, tetapi tertutup pada dirinya sendiri. Ia tak punya masa depan; tak ada ruang harapan di dalamnya. Kilaunya menyilaukan, dan tak ada lagi yang penting.",
    "source": "America Magazine"
  },
  {
    "date": "21 JUL 2018",
    "en": "What shame and what evil this has brought on the church",
    "id": "Betapa malu dan betapa jahatnya hal ini bagi Gereja.",
    "source": "America Magazine"
  },
  {
    "date": "6 AGU 2018",
    "en": "Once more the gates of hell…. May holiness and conversion abound in the midst of so many scandals.",
    "id": "Pintu neraka sekali lagi… Semoga kekudusan dan pertobatan berlimpah di tengah begitu banyak skandal.",
    "source": "America Magazine"
  },
  {
    "date": "25 NOV 2018",
    "en": "This sense of self-sufficiency and I can solve everything brought me to the gates of hell. I can't forget the day I saw it.",
    "id": "Rasa cukup diri dan ‘aku bisa menyelesaikan semuanya’ membawaku ke gerbang neraka. Aku tak bisa melupakan hari itu.",
    "source": "America Magazine"
  },
  {
    "date": "25 NOV 2018",
    "en": "not knowing how to say 'no,' taking on problems and matters as if I'm omnipotent.",
    "id": "tidak tahu cara mengatakan ‘tidak’, mengambil alih masalah dan urusan seolah aku mahakuasa.",
    "source": "America Magazine"
  },
  {
    "date": "1 MEI 2019",
    "en": "I felt with certainty that the Lord loved me with a predilection. It was a long time during which the Lord showed me the love he has for me, his faithfulness... It felt like a cushion was wrapped around me and saved me from disintegrating.",
    "id": "Aku merasa pasti bahwa Tuhan mengasihi aku secara istimewa. Itu masa panjang ketika Tuhan menunjukkan kasih-Nya kepadaku dan kesetiaan-Nya… Rasanya seperti ada bantal yang membungkusku dan menyelamatkan aku dari kehancuran.",
    "source": "Vatican News / interview"
  },
  {
    "date": "APR 2019",
    "en": "I felt the merciful gaze of the Lord and was moved to prayer.",
    "id": "Aku merasakan tatapan belas kasih Tuhan dan terdorong berdoa.",
    "source": "America Magazine"
  },
  {
    "date": "TANPA TANGGAL",
    "en": "He smiled… I felt the merciful gaze of Jesus.",
    "id": "Ia tersenyum… aku merasakan tatapan belas kasih Yesus.",
    "source": "Vatican News"
  },
  {
    "date": "TANPA TANGGAL",
    "en": "He smiled at me",
    "id": "Ia tersenyum padaku.",
    "source": "Vatican News / interview"
  },
  {
    "date": "TANPA TANGGAL",
    "en": "spoke to me through a look",
    "id": "Ia berbicara kepadaku lewat sebuah tatapan.",
    "source": "Vatican News / interview"
  },
  {
    "date": "TANPA TANGGAL",
    "en": "I fell asleep in that loving presence",
    "id": "Aku tertidur dalam kehadiran penuh kasih itu.",
    "source": "Vatican News / interview"
  },
  {
    "date": "2021–2022",
    "en": "dryness, desolation, a dark time",
    "id": "kekeringan, desolasi, masa gelap.",
    "source": "Vatican News / interview"
  },
  {
    "date": "2022",
    "en": "the proud, self-sufficient, cynical, self-deceptive Jorge",
    "id": "Jorge yang sombong, cukup diri, sinis, dan menipu diri sendiri.",
    "source": "America Magazine"
  },
  {
    "date": "AKHIR 2022",
    "en": "withdrawal and worldliness",
    "id": "penarikan diri dan keduniaan.",
    "source": "America Magazine"
  },
  {
    "date": "OKT 2023 · FATIMA",
    "en": "I gazed and prayed.",
    "id": "Aku menatap dan berdoa.",
    "source": "Vatican News"
  },
  {
    "date": "TANPA TANGGAL",
    "en": "The Virgin saved me",
    "id": "Bunda Maria menyelamatkan aku.",
    "source": "Vatican News"
  },
  {
    "date": "MENJELANG WAFAT",
    "en": "to protect and help me",
    "id": "untuk melindungi dan menolongku.",
    "source": "Vatican News"
  },
  {
    "date": "2021–2022",
    "en": "who uses others like puppets",
    "id": "seseorang yang memakai orang lain seperti boneka",
    "source": "CNN"
  },
  {
    "date": "30 DES 2022",
    "en": "I reread the process of 01-24-21. I think this is the beginning of the other path",
    "id": "Aku membaca ulang proses 24-01-21. Aku pikir ini awal dari jalan yang lain.",
    "source": "Infovaticana"
  },
  {
    "date": "30 DES 2022",
    "en": "the path of recognition of the truth",
    "id": "jalan pengakuan akan kebenaran",
    "source": "Infovaticana"
  },
  {
    "date": "2021–2022",
    "en": "governance issues, pressure regarding decisions to make, and aridity and desolation",
    "id": "masalah tata kelola, tekanan untuk mengambil keputusan, serta kekeringan dan desolasi",
    "source": "CNN"
  },
  {
    "date": "23 JAN 2022",
    "en": "The Lord spoke to me through dreams",
    "id": "Tuhan berbicara kepadaku lewat mimpi.",
    "source": "Infovaticana"
  },
  {
    "date": "25 FEB 2015",
    "en": "MERCY: this is God",
    "id": "RAHMAT: inilah Tuhan.",
    "source": "Infovaticana"
  },
  {
    "date": "23 FEB 2015",
    "en": "I have often noticed that the Lord slowly prepares me for what he will ask of me. He guides me",
    "id": "Aku sering melihat Tuhan perlahan mempersiapkanku untuk apa yang akan Ia minta. Ia membimbingku.",
    "source": "Infovaticana"
  },
  {
    "date": "19 FEB 2018",
    "en": "I want to have a mother, to die seeking a mother",
    "id": "Aku ingin punya ibu, untuk mati sambil mencari ibu.",
    "source": "Infovaticana"
  },
  {
    "date": "21 FEB 2018",
    "en": "the history of the tears not wept",
    "id": "sejarah air mata yang tidak ditangiskan.",
    "source": "Infovaticana"
  },
  {
    "date": "11 MAR 2019",
    "en": "I arrived very tired… and exhausted, almost without spiritual support and without any point of reference",
    "id": "Aku tiba sangat lelah… dan kehabisan tenaga, hampir tanpa penopang rohani dan tanpa titik rujukan.",
    "source": "CNN"
  },
  {
    "date": "2021",
    "en": "I fell off the cot",
    "id": "Aku jatuh dari dipan — ungkapan untuk ‘sudah saatnya sadar’.",
    "source": "CNN"
  },
  {
    "date": "18 AGU 2024",
    "en": "playing the fool or the distracted",
    "id": "bermain sebagai orang bodoh atau orang yang sedang lengah.",
    "source": "Infovaticana"
  },
  {
    "date": "2 JUL 2017",
    "en": "I must be careful not to feel too secure in my ministry",
    "id": "Aku harus berhati-hati supaya tidak merasa terlalu aman dalam pelayananku.",
    "source": "Infovaticana"
  },
  {
    "date": "9 APR 2016",
    "en": "the grace of final perseverance",
    "id": "rahmat ketabahan akhir.",
    "source": "Infovaticana"
  },
  {
    "date": "25 MEI 2019",
    "en": "security and strength to fight",
    "id": "rasa aman dan kekuatan untuk berjuang.",
    "source": "Infovaticana"
  },
  {
    "date": "1992",
    "en": "Make a definitive choice about the path to follow",
    "id": "Buatlah pilihan pasti tentang jalan yang harus dijalani.",
    "source": "Infovaticana"
  },
  {
    "date": "OKT 2023",
    "en": "I looked and asked",
    "id": "Aku menatap dan bertanya.",
    "source": "Infovaticana"
  },
  {
    "date": "OKT 2023",
    "en": "I looked at her and she spoke to me",
    "id": "Aku menatapnya dan ia berbicara kepadaku.",
    "source": "Infovaticana"
  }
];

const ORIGINAL_LIMIT = 6;

const ORIGINAL_BY_ASPECT = {
  "takut": [
    0,
    27
  ],
  "krisis": [
    26,
    28,
    35,
    33,
    34,
    42
  ],
  "setan": [
    5,
    7,
    10,
    12,
    14,
    15,
    43
  ],
  "bantal": [
    20,
    22,
    23,
    24,
    25
  ],
  "devosi": [
    29,
    30,
    31,
    48,
    49
  ],
  "panggilan": [],
  "tubuh": [
    3,
    41
  ],
  "martabat": [
    16,
    17,
    40
  ],
  "ignasian": [],
  "omnipotensi": [
    18,
    19
  ],
  "humor": [],
  "boneka": [
    32
  ],
  "mimpi": [
    36,
    39,
    47,
    48,
    49
  ],
  "rahmat": [
    37,
    38,
    45,
    46
  ],
  "kebenaran": [
    33,
    34,
    35,
    43
  ]
};

/* ==================== helpers ==================== */
const $ = (sel) => document.querySelector(sel);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

let toastTimer;
function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
}

/* ==================== render ==================== */
function renderFacts() {
  $("#factGrid").innerHTML = FACTS.map((f) => `
    <article class="fact-card reveal">
      <span class="fact-value">${esc(f.value)}</span>
      <span class="fact-label">${esc(f.label)}</span>
      <span class="fact-foot">${esc(f.foot)}</span>
    </article>`).join("");
}

function renderAspects(filter = "Semua") {
  const list = filter === "Semua" ? ASPECTS : ASPECTS.filter((a) => a.cat === filter);
  $("#aspectGrid").innerHTML = list.map((a, i) => {
    const num = String(ASPECTS.indexOf(a) + 1).padStart(2, "0");
    return `
      <button class="aspect-card just-rendered" style="--i:${i}" type="button" data-aspect="${esc(a.id)}" aria-label="Baca sisi: ${esc(a.title)}">
        <span class="aspect-number">${num}</span>
        <span class="aspect-icon" aria-hidden="true"><span class="icon-fallback">${esc(a.icon)}</span><i data-lucide="${esc(a.iconName || "sparkles")}"></i></span>
        <h3>${esc(a.title)}</h3>
        <p>${esc(a.teaser)}</p>
        <span class="aspect-more">Baca catatan →</span>
      </button>`;
  }).join("");
  observeReveals();
  initIcons();
}

function renderFilters() {
  const cats = ["Semua", ...new Set(ASPECTS.map((a) => a.cat))];
  $("#filterRow").innerHTML = cats.map((c) => `
    <button class="filter-chip ${c === "Semua" ? "is-active" : ""}" type="button" data-filter="${esc(c)}">${esc(c)}</button>
  `).join("");
}

function renderTimeline() {
  $("#timelineList").innerHTML = TIMELINE.map((t) => `
    <li class="timeline-item reveal">
      <span class="timeline-date">${esc(t.date)}</span>
      <div class="timeline-body ${t.key ? "key" : ""}">
        <h3>${esc(t.title)}</h3>
        <p>${esc(t.text)}</p>
      </div>
    </li>`).join("");
}

function renderLists() {
  $("#excludedList").innerHTML = EXCLUDED.map((i) => `<li><div><strong>${esc(i.title)}</strong><span>${esc(i.text)}</span></div></li>`).join("");
  $("#includedList").innerHTML = INCLUDED.map((i) => `<li><div><strong>${esc(i.title)}</strong><span>${esc(i.text)}</span></div></li>`).join("");
  $("#structureGrid").innerHTML = STRUCTURE.map((s) => `
    <article class="structure-card reveal">
      <span class="structure-num">${esc(s.num)}</span>
      <h3>${esc(s.title)}</h3>
      <p>${esc(s.text)}</p>
    </article>`).join("");
}

function renderSources() {
  $("#sourceGrid").innerHTML = SOURCES.map((s) => `
    <a class="source-link" href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">
      <span class="source-host">${esc(s.host)}</span>
      <span class="source-title">${esc(s.title)}</span>
      <span class="source-arrow" aria-hidden="true">↗</span>
    </a>`).join("");
}

function renderOriginals() {
  const direct = ORIGINALS.filter((o) => o.direct !== false);
  $("#originalGrid").innerHTML = direct.map((o, i) => `
    <article class="original-card reveal is-visible ${i >= ORIGINAL_LIMIT ? "is-extra" : ""}" style="--i:${Math.max(0, i - ORIGINAL_LIMIT)}">
      <span class="original-date">${esc(o.date)}</span>
      <blockquote class="original-en">“${esc(o.en)}”</blockquote>
      <p class="original-id"><strong>ID</strong> · ${esc(o.id)}</p>
      <div class="original-foot">
        <a class="original-source" href="${esc(SRC_URL[o.source] || "")}" target="_blank" rel="noopener noreferrer">${esc(o.source)} ↗</a>
        <button class="original-copy" type="button" data-copy-original="${i}">Salin asli</button>
      </div>
    </article>`).join("");
}

/* ==================== quote carousel ==================== */
let quoteIndex = 0;
let quoteTimer;
function renderQuoteDots() {
  $("#quoteDots").innerHTML = QUOTES.map((_, i) => `
    <button type="button" data-quote="${i}" class="${i === quoteIndex ? "is-active" : ""}" aria-label="Kutipan ${i + 1}"></button>
  `).join("");
}
function setQuote(index, animate = true) {
  const next = (index + QUOTES.length) % QUOTES.length;
  const apply = () => {
    quoteIndex = next;
    $("#quoteText").textContent = QUOTES[next].text;
    $("#quoteDate").textContent = QUOTES[next].date;
    renderQuoteDots();
    restartAuto();
  };
  const card = $("#quoteText").closest(".quote-card");
  clearTimeout(quoteTimer);
  if (!animate || next === quoteIndex || !card) { apply(); return; }
  card.classList.add("is-changing");
  quoteTimer = setTimeout(() => {
    apply();
    requestAnimationFrame(() => card.classList.remove("is-changing"));
  }, 170);
}

/* slideshow otomatis: berganti tiap 4,5 detik, jeda saat disentuh/dibuka dialog */
const SLIDE_MS = 4500;
const reduceMotion = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
let autoTimer = null;
let autoPlaying = !reduceMotion;
function stopAuto() { if (autoTimer) { clearInterval(autoTimer); autoTimer = null; } }
function startAuto() {
  if (!autoPlaying || document.hidden || dialog.open) return;
  stopAuto();
  autoTimer = setInterval(() => setQuote(quoteIndex + 1), SLIDE_MS);
}
function restartAuto() { stopAuto(); startAuto(); }
function updateAutoButton() {
  const btn = $("#autoToggle");
  if (!btn) return;
  btn.textContent = autoPlaying ? "⏸" : "▶";
  btn.setAttribute("aria-pressed", String(autoPlaying));
  btn.setAttribute("aria-label", autoPlaying ? "Jeda slideshow otomatis" : "Putar slideshow otomatis");
}
function initIcons() {
  if (!window.lucide) return;
  try {
    window.lucide.createIcons({ attrs: { "stroke-width": 1.8 } });
    document.body.classList.add("lucide-ready");
  } catch (_) { /* biarkan emoji sebagai cadangan */ }
}

/* ==================== dialog ==================== */
const dialog = $("#detailDialog");
function openAspect(id) {
  const a = ASPECTS.find((x) => x.id === id);
  if (!a) return;
  $("#dialogCategory").textContent = `SISI ${String(ASPECTS.indexOf(a) + 1).padStart(2, "0")} · ${a.cat.toUpperCase()}`;
  $("#dialogTitle").textContent = a.title;
  const originals = (ORIGINAL_BY_ASPECT[id] || []).map((i) => {
    const o = ORIGINALS[i];
    if (o.direct === false) return "";
    return `<div class="dialog-original"><p class="eyebrow">TEKS ASLI · ${esc(o.date)}</p><blockquote>“${esc(o.en)}”</blockquote><p class="translation">${esc(o.id)}</p></div>`;
  }).join("");
  $("#dialogBody").innerHTML = a.body.map((p) => `<p>${p}</p>`).join("") + originals;
  $("#dialogSource").textContent = `SUMBER: ${a.source}`;
  dialog.classList.remove("is-closing");
  dialog.scrollTop = 0;
  stopAuto();
  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "");
}

function closeDialog() {
  if (!dialog.hasAttribute("open")) return;
  dialog.classList.add("is-closing");
  setTimeout(() => {
    if (dialog.close) dialog.close();
    else dialog.removeAttribute("open");
    dialog.classList.remove("is-closing");
    startAuto();
  }, 210);
}

/* ==================== interactions ==================== */
function initTheme() {
  let saved = null;
  try { saved = localStorage.getItem("il-diario-theme"); } catch (_) {}
  if (saved) document.documentElement.dataset.theme = saved;
  const updateIcon = () => { $("#themeIcon").textContent = document.documentElement.dataset.theme === "dark" ? "☀" : "☾"; };
  updateIcon();
  $("#themeToggle").addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("il-diario-theme", next); } catch (_) {}
    const icon = $("#themeIcon");
    icon.classList.remove("is-spinning");
    void icon.offsetWidth;
    updateIcon();
    icon.classList.add("is-spinning");
    setTimeout(() => icon.classList.remove("is-spinning"), 460);
  });
}

function initMenu() {
  const btn = $("#menuButton");
  const nav = $("#siteNav");
  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", (e) => {
    if (e.target.matches("a")) { nav.classList.remove("is-open"); btn.setAttribute("aria-expanded", "false"); }
  });
}

function initScroll() {
  const bar = $("#progressBar");
  let queued = false;
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
    queued = false;
  };
  window.addEventListener("scroll", () => {
    if (!queued) { queued = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();

  const links = [...document.querySelectorAll("[data-nav]")];
  const sections = links.map((l) => document.querySelector(l.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === `#${entry.target.id}`));
      });
    }, { rootMargin: "-25% 0px -65% 0px" });
    sections.forEach((s) => navObserver.observe(s));
  }
}

let revealObserver;
function observeReveals() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); revealObserver.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
  }
  document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => revealObserver.observe(el));
}

function initEvents() {
  $("#filterRow").addEventListener("click", (e) => {
    const chip = e.target.closest("[data-filter]");
    if (!chip) return;
    document.querySelectorAll("[data-filter]").forEach((c) => c.classList.toggle("is-active", c === chip));
    renderAspects(chip.dataset.filter);
  });

  $("#aspectGrid").addEventListener("click", (e) => {
    const card = e.target.closest("[data-aspect]");
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.1;
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${(e.clientX || rect.left + rect.width / 2) - rect.left - size / 2}px`;
    ripple.style.top = `${(e.clientY || rect.top + rect.height / 2) - rect.top - size / 2}px`;
    card.appendChild(ripple);
    setTimeout(() => ripple.remove(), 650);
    setTimeout(() => openAspect(card.dataset.aspect), 90);
  });

  $("#dialogClose").addEventListener("click", closeDialog);
  dialog.addEventListener("click", (e) => { if (e.target === dialog) closeDialog(); });
  dialog.addEventListener("cancel", (e) => { e.preventDefault(); closeDialog(); });

  $("#autoToggle").addEventListener("click", () => {
    autoPlaying = !autoPlaying;
    updateAutoButton();
    restartAuto();
    toast(autoPlaying ? "Slideshow diputar" : "Slideshow dijeda");
  });
  const stage = $(".quote-stage");
  stage.addEventListener("mouseenter", stopAuto);
  stage.addEventListener("mouseleave", startAuto);
  stage.addEventListener("focusin", stopAuto);
  stage.addEventListener("focusout", startAuto);
  document.addEventListener("visibilitychange", () => document.hidden ? stopAuto() : startAuto());

  $("#quotePrev").addEventListener("click", () => setQuote(quoteIndex - 1));
  $("#quoteNext").addEventListener("click", () => setQuote(quoteIndex + 1));
  $("#quoteDots").addEventListener("click", (e) => {
    const dot = e.target.closest("[data-quote]");
    if (dot) setQuote(Number(dot.dataset.quote));
  });
  document.addEventListener("keydown", (e) => {
    if (dialog.open || ["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;
    if (e.key === "ArrowLeft") setQuote(quoteIndex - 1);
    if (e.key === "ArrowRight") setQuote(quoteIndex + 1);
  });

  $("#copyQuote").addEventListener("click", async (e) => {
    const text = `“${QUOTES[quoteIndex].text}” — Paus Fransiskus, ${QUOTES[quoteIndex].date}`;
    let copied = false;
    try {
      await navigator.clipboard.writeText(text);
      copied = true;
      toast("Kutipan disalin ke papan klip");
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { copied = document.execCommand("copy"); } catch (_) {}
      ta.remove();
      toast(copied ? "Kutipan disalin" : "Salin tidak didukung peramban ini");
    }
    if (copied) {
      const btn = e.currentTarget;
      const original = btn.textContent;
      btn.textContent = "Tersalin ✓";
      setTimeout(() => { btn.textContent = original; }, 1400);
    }
  });

  const moreBtn = $("#moreOriginals");
  const extraCount = ORIGINALS.filter((o) => o.direct !== false).length - ORIGINAL_LIMIT;
  const moreLabel = (expanded) => expanded
    ? `Tampilkan lebih sedikit <span aria-hidden="true">↑</span>`
    : `Tampilkan semua (${extraCount} lagi) <span aria-hidden="true">↓</span>`;
  moreBtn.innerHTML = moreLabel(false);
  moreBtn.addEventListener("click", () => {
    const expanded = $("#asli").classList.toggle("show-all");
    moreBtn.setAttribute("aria-expanded", String(expanded));
    moreBtn.innerHTML = moreLabel(expanded);
  });

  $("#translationToggle").addEventListener("click", (e) => {
    const hidden = $("#asli").classList.toggle("hide-translation");
    e.currentTarget.textContent = hidden ? "Tampilkan terjemahan" : "Sembunyikan terjemahan";
    e.currentTarget.setAttribute("aria-pressed", String(hidden));
  });

  $("#originalGrid").addEventListener("click", async (e) => {
    const btn = e.target.closest("[data-copy-original]");
    if (!btn) return;
    const o = ORIGINALS[Number(btn.dataset.copyOriginal)];
    const text = `“${o.en}” — ${o.date}`;
    let copied = false;
    try {
      await navigator.clipboard.writeText(text);
      copied = true;
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { copied = document.execCommand("copy"); } catch (_) {}
      ta.remove();
    }
    toast(copied ? "Teks asli disalin" : "Salin tidak didukung peramban ini");
    if (copied) {
      const original = btn.textContent;
      btn.textContent = "Tersalin ✓";
      setTimeout(() => { btn.textContent = original; }, 1400);
    }
  });
}

/* ==================== boot ==================== */
renderFacts();
renderFilters();
renderAspects();
renderTimeline();
renderLists();
renderSources();
renderOriginals();
updateAutoButton();
setQuote(0);
initIcons();
initTheme();
initMenu();
initScroll();
initEvents();
observeReveals();
