# CV Builder - Panduan Pengguna

Aplikasi web untuk membuat CV profesional dengan antarmuka yang user-friendly dan kemampuan export ke PDF yang sesuai dengan template standar.

## Fitur Utama

- **Form Interaktif** - Isi data CV Anda dengan mudah melalui form yang terorganisir
- **Preview Real-time** - Lihat tampilan CV Anda secara langsung saat mengisi data
- **Penyimpanan Otomatis** - Data disimpan secara otomatis di browser Anda
- **Export PDF** - Ekspor CV Anda ke format PDF yang profesional dan siap dikirim
- **Responsif** - Kompatibel dengan berbagai ukuran layar
- **Tab Navigation** - Navigasi mudah antara berbagai bagian CV

## Cara Menggunakan

### 1. Data Pribadi
- Buka tab "Data Pribadi" di sisi kiri
- Isi kolom berikut:
  - **Nama Lengkap** (Wajib) - Nama Anda
  - **Lokasi** - Kota dan negara tempat tinggal
  - **Nomor Telepon** - Hubungi dengan format +62...
  - **Email** (Wajib) - Email profesional Anda
  - **LinkedIn** - Nama profil LinkedIn Anda
  - **Ringkasan Profesional** - Deskripsi singkat tentang diri dan tujuan karir Anda

### 2. Pendidikan
- Klik tombol "+ Tambah Pendidikan"
- Isi detail pendidikan:
  - Universitas/Sekolah
  - Gelar (S1, S2, D3, dll)
  - Program Studi
  - Tanggal Mulai dan Selesai
  - IPK (opsional)
- Klik "Simpan" untuk menyimpan
- Anda dapat menambahkan beberapa pendidikan

### 3. Pengalaman Kerja
- Klik tombol "+ Tambah Pengalaman"
- Isi detail pekerjaan:
  - Perusahaan
  - Posisi/Jabatan
  - Tanggal Mulai dan Selesai
  - Deskripsi Tugas (Gunakan • untuk poin-poin)
- Contoh format deskripsi:
  ```
  • Memberikan dukungan teknis tingkat pertama
  • Menangani tiket insiden dan permintaan layanan
  • Memantau kinerja jaringan dan sistem
  ```

### 4. Pelatihan
- Tambahkan pelatihan atau kursus yang Anda ikuti
- Format deskripsi sama seperti Pengalaman Kerja

### 5. Sertifikat
- Tambahkan sertifikat profesional yang Anda miliki
- Isi detail:
  - Judul Sertifikat
  - Penerbit/Organisasi
  - Tanggal Penerbitan dan Kadaluarsa
  - URL Kredensial (opsional)

### 6. Proyek Teknis
- Tambahkan proyek yang telah Anda kerjakan
- Isi:
  - Judul Proyek
  - Teknologi yang digunakan
  - Deskripsi dengan poin-poin (•)

### 7. Volunteer
- Tambahkan pengalaman volunteer atau kegiatan sosial
- Format sama seperti Pengalaman Kerja

### 8. Bahasa
- Tambahkan bahasa yang Anda kuasai
- Pilih tingkat kemampuan:
  - Native Proficiency
  - Fluent
  - Professional Working
  - Intermediate
  - Basic Proficiency

## Tips Penggunaan

1. **Penyimpanan Data**
   - Data Anda secara otomatis disimpan di browser lokal
   - Data akan tersimpan bahkan jika Anda menutup browser
   - Untuk backup, gunakan fitur Export PDF secara berkala

2. **Edit Data**
   - Klik tombol "Edit" pada setiap item untuk mengubah data
   - Untuk Data Pribadi, ubah langsung di form utama

3. **Hapus Data**
   - Klik tombol "Hapus" untuk menghapus item
   - Konfirmasi akan muncul sebelum menghapus

4. **Reset Semua**
   - Gunakan tombol "Reset" untuk menghapus semua data
   - Tindakan ini tidak dapat dibatalkan, pastikan Anda sudah backup

5. **Export PDF**
   - Klik tombol "Export PDF" di bagian bawah sidebar
   - File PDF akan otomatis diunduh dengan nama file berdasarkan nama Anda

## Format Terbaik untuk Deskripsi

Untuk deskripsi pekerjaan, pelatihan, atau proyek, gunakan format berikut:

```
• Tugas atau pencapaian pertama
• Tugas atau pencapaian kedua
• Tugas atau pencapaian ketiga
```

Setiap baris akan secara otomatis dikonversi menjadi bullet point di PDF.

## Kompatibilitas Browser

Aplikasi ini bekerja terbaik di:
- Google Chrome (versi terbaru)
- Mozilla Firefox (versi terbaru)
- Microsoft Edge
- Safari

Untuk fitur terbaik, gunakan browser dengan dukungan JavaScript lengkap.

## Troubleshooting

**Q: Data saya hilang setelah refresh browser**
A: Pastikan browser Anda tidak menggunakan mode "Private/Incognito". Fitur penyimpanan hanya bekerja di mode normal.

**Q: PDF tidak tereksport dengan baik**
A: Pastikan:
1. Koneksi internet stabil (untuk mengunduh library PDF)
2. Tidak ada popup blocker yang menghalangi
3. Coba refresh halaman dan coba lagi

**Q: Bagaimana cara backup data?**
A: Lakukan export PDF secara berkala untuk backup. Data juga tersimpan di browser lokal dan dapat diakses kapan saja.

## Persyaratan Teknis

- Browser modern dengan dukungan JavaScript ES6
- Koneksi internet untuk library CDN (html2pdf)
- Minimal ruang penyimpanan browser 5MB untuk localStorage

## Catatan

- Aplikasi ini menyimpan data di localStorage browser Anda
- Jika Anda menghapus data browser atau cache, data CV Anda akan hilang
- Pastikan selalu backup data penting Anda secara berkala dengan export PDF

---

Dibuat untuk memudahkan pembuatan CV profesional. Semoga berhasil!
