# 🎉 Aplikasi CV Builder - Selesai!

Aplikasi web untuk membuat CV profesional telah siap digunakan. Berikut adalah panduan lengkap untuk memulai.

## 📁 Struktur Folder

```
buatcv/
├── index.html              # Halaman utama aplikasi
├── guide.html              # Halaman panduan cepat
├── README.md               # Dokumentasi lengkap
├── QUICKSTART.md           # File ini
├── sample-data.json        # Data contoh CV
├── css/
│   └── style.css          # Styling aplikasi
└── js/
    ├── app.js             # Logika utama aplikasi
    └── pdf-export.js      # Fitur export PDF
```

## 🚀 Cara Menjalankan

### Opsi 1: Buka di Browser (Paling Mudah)
1. Buka file `index.html` langsung di browser
   - Double-click pada `index.html`, atau
   - Drag & drop `index.html` ke browser Anda

### Opsi 2: Jalankan dengan Local Server (Rekomendasi)
Jika Anda memiliki Python atau Node.js:

**Dengan Python 3:**
```bash
cd d:\Latihan\buatcv
python -m http.server 8000
# Buka http://localhost:8000 di browser
```

**Dengan Node.js:**
```bash
npm install -g http-server
cd d:\Latihan\buatcv
http-server
# Buka http://localhost:8080 di browser
```

### Opsi 3: Gunakan VS Code Live Server
1. Buka folder `d:\Latihan\buatcv` di VS Code
2. Install extension "Live Server" dari VS Code Marketplace
3. Right-click pada `index.html` → "Open with Live Server"

## 🎯 Panduan Cepat Penggunaan

### Langkah 1: Mulai dari Panduan
Buka file `guide.html` untuk melihat panduan cepat dan informasi fitur

### Langkah 2: Buka Aplikasi Utama
Buka `index.html` untuk mulai membuat CV

### Langkah 3: Isi Data Pribadi Anda
- Klik tab "Data Pribadi" di sidebar
- Isi nama, email, dan informasi kontak
- Tulis ringkasan profesional Anda

### Langkah 4: Tambahkan Pengalaman
- Navigasi ke setiap tab (Pendidikan, Pengalaman Kerja, dll)
- Klik tombol "+ Tambah..." untuk menambahkan item baru
- Isi data di modal dialog yang muncul
- Klik "Simpan"

### Langkah 5: Lihat Preview
- Preview CV Anda secara real-time di panel kanan
- Data akan tersimpan otomatis

### Langkah 6: Export Hasil
- **Export PDF:** Klik "Export PDF" untuk mengunduh CV dalam format PDF
- **Export Data:** Klik "Export Data" untuk backup data dalam format JSON
- **Import Data:** Klik "Import Data" untuk memuat data yang sudah disimpan

## 💾 Menggunakan Data Contoh

File `sample-data.json` berisi data contoh CV dari dokumen yang Anda kirimkan.

### Cara Import Data Contoh:
1. Buka aplikasi (`index.html`)
2. Klik tombol "Import Data" di sidebar
3. Pilih file `sample-data.json`
4. Data akan otomatis terisi dan preview akan diperbarui

## 📋 Fitur Lengkap

### Form Input
- ✅ Data Pribadi (Nama, Kontak, LinkedIn, Ringkasan)
- ✅ Pendidikan (Universitas, Gelar, Program Studi, IPK, Tanggal)
- ✅ Pengalaman Kerja (Perusahaan, Posisi, Tanggal, Deskripsi)
- ✅ Pelatihan (Judul, Institusi, Tanggal, Deskripsi)
- ✅ Sertifikat (Judul, Penerbit, Tanggal, URL)
- ✅ Proyek Teknis (Judul, Teknologi, Deskripsi)
- ✅ Volunteer (Organisasi, Posisi, Tanggal, Deskripsi)
- ✅ Bahasa (Bahasa, Tingkat Kemampuan)

### Fitur Aplikasi
- ✅ Preview Real-time
- ✅ Penyimpanan Otomatis (localStorage)
- ✅ Export ke PDF
- ✅ Export/Import Data JSON
- ✅ Responsive Design
- ✅ Modal Dialog untuk Edit
- ✅ Delete dengan Konfirmasi
- ✅ Reset Data Seluruh Form

## 🎨 Format Tips

### Bullet Points dalam Deskripsi
Gunakan format berikut untuk deskripsi pekerjaan, pelatihan, proyek, dan volunteer:

```
• Tugas atau pencapaian pertama
• Tugas atau pencapaian kedua
• Tugas atau pencapaian ketiga
```

Setiap baris akan otomatis menjadi bullet point di PDF.

## 📱 Kompatibilitas Browser

| Browser | Support | Catatan |
|---------|---------|---------|
| Chrome | ✅ Optimal | Versi terbaru disarankan |
| Firefox | ✅ Optimal | Versi terbaru disarankan |
| Edge | ✅ Optimal | Versi terbaru disarankan |
| Safari | ✅ Good | Mungkin perlu setting izin |

## ⚙️ Persyaratan Teknis

- Browser modern dengan JavaScript ES6+
- Koneksi internet (hanya untuk library CDN saat pertama kali load)
- Ruang penyimpanan browser minimal 5MB untuk localStorage
- PDF library akan otomatis diunduh saat diperlukan

## 💡 Tips Penting

1. **Backup Data Berkala**
   - Gunakan "Export Data" untuk backup JSON
   - Simpan PDF hasil export sebagai backup

2. **Format Konsisten**
   - Gunakan format tanggal yang konsisten (mis: "Jun 2025")
   - Gunakan bullet points untuk deskripsi

3. **Kelengkapan Data**
   - Isi minimal nama dan email di Data Pribadi
   - Isi setidaknya satu pendidikan dan pengalaman
   - Semakin lengkap data, semakin baik CV Anda

4. **Mode Private/Incognito**
   - Tidak gunakan mode Private karena data tidak akan tersimpan
   - Gunakan mode normal untuk penyimpanan otomatis

## 🐛 Troubleshooting

### Data Tidak Tersimpan
**Solusi:** Pastikan tidak menggunakan mode Private/Incognito browser

### PDF Tidak Terdownload
**Solusi:** 
- Matikan popup blocker
- Pastikan koneksi internet aktif
- Coba refresh halaman dan coba lagi

### File Import Gagal
**Solusi:**
- Pastikan file adalah JSON valid
- Gunakan file dari "Export Data" atau `sample-data.json`
- Periksa ukuran file tidak terlalu besar

### Preview Tidak Muncul
**Solusi:**
- Coba refresh halaman (F5)
- Buka Developer Console (F12) untuk melihat error
- Pastikan JavaScript diaktifkan di browser

## 📞 Informasi Tambahan

### File Penting
- `index.html` - Aplikasi utama, buka ini untuk membuat CV
- `guide.html` - Panduan cepat dan penjelasan fitur
- `sample-data.json` - Data contoh untuk dicoba

### Tidak Memerlukan
- ❌ Internet (setelah aplikasi dimuat)
- ❌ Server atau backend
- ❌ Database eksternal
- ❌ Instalasi khusus

### Data Privacy
- 🔒 Data disimpan hanya di browser lokal Anda
- 🔒 Tidak ada data yang dikirim ke server manapun
- 🔒 Aplikasi 100% client-side (berjalan di komputer Anda)
- 🔒 Aman untuk digunakan dengan data pribadi

## ✨ Fitur Unggulan

1. **Interface Intuitif** - Mudah digunakan bahkan untuk pemula
2. **Real-time Preview** - Lihat hasil CV Anda secara langsung
3. **Responsive Design** - Bekerja di desktop, tablet, dan mobile
4. **Export Fleksibel** - PDF profesional atau data JSON
5. **Penyimpanan Aman** - Data tersimpan lokal di komputer Anda
6. **Tidak Perlu Setup** - Buka dan langsung bisa digunakan
7. **Lightweight** - File kecil dan cepat dimuat

## 🎓 Contoh Use Case

1. **Buat CV Baru**
   - Buka `index.html`
   - Isi form dengan data Anda
   - Export ke PDF

2. **Edit CV Lama**
   - Buka `index.html`
   - Import data dari file JSON yang disimpan sebelumnya
   - Edit data yang perlu diubah
   - Export ke PDF versi terbaru

3. **Buat Beberapa Varian CV**
   - Buat CV pertama, export sebagai `CV_v1.pdf` dan `CV_v1.json`
   - Ubah beberapa data
   - Export sebagai `CV_v2.pdf` dan `CV_v2.json`
   - Lakukan sebanyak yang Anda butuhkan

## 📖 Dokumentasi Lengkap

Lihat file `README.md` untuk dokumentasi lengkap dan detail lebih lanjut tentang penggunaan aplikasi.

---

**Selamat membuat CV Anda! Semoga berhasil dalam mencari pekerjaan. 🍀**

Dibuat dengan ❤️ untuk memudahkan pembuatan CV profesional.
