# Buku Harian Paus Fransiskus (Il Diario)

Aplikasi web statis (HTML + CSS + JS, tanpa proses build) yang merangkum isi
**The Private Diary of Pope Francis** — buku yang terbit 24 November 2026.

## Cara membuka

Buka `index.html` langsung di peramban, atau jalankan server statis:

```bash
cd buku-harian-paus-fransiskus
./run.sh
# http://127.0.0.1:4173/buku-harian-paus-fransiskus/preview.html
```

Atau buka `preview.html` langsung — sudah satu file, CSS/JS tertanam (butuh internet hanya untuk ikon Lucide; tanpa itu emoji dipakai).

## Isi

- Ringkasan angka (tanggal rilis, bahasa, negara, rentang catatan)
- 15 sisi batin/mistis/devosi/Gereja — ketuk kartu untuk catatan lengkap
- Linimasa 1953–2026
- 10 kutipan dengan navigasi dan tombol salin
- **65 cuplikan teks asli (EN)** beserta terjemahan Indonesia; 2/3 ditampilkan dulu, tombol "Lihat semua" membuka sisanya dalam satu kolom ke bawah; sebagian juga muncul di dalam dialog tiap sisi
- Bagian khusus **"Yang Tak Ditulis"**: apa yang sengaja yang dicoret dan yang diselamatkan
- Struktur tiga bagian buku
- Tautan ke tujuh sumber utama

## Fitur

Tema terang/gelap (tersimpan di `localStorage`), filter kategori, dialog detail,
karusel kutipan dengan slideshow otomatis setiap 4,5 detik (bisa dijeda; berhenti saat
kursor di atasnya, dialog terbuka, atau tab tersembunyi), ikon Lucide dari jsDelivr
dengan fallback emoji bila CDN tidak tersedia, indikator progres baca, animasi gulir,
dan tata letak responsif.

Semua konten bersifat ringkasan dan menyertakan sumber aslinya.
