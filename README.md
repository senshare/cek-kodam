# Deskripsi Aplikasi "Cek Kodam"

# Tujuan Aplikasi
Aplikasi "Cek Kodam" dirancang untuk memungkinkan pengguna mengecek nama Kodam (Komando Daerah Militer) berdasarkan kode daerah militer yang mereka masukkan. Aplikasi ini memudahkan pengguna dalam mencari informasi tentang Kodam dengan cepat dan efisien.

# Fitur Utama
1. Input Kode Daerah Militer : Pengguna dapat memasukkan kode daerah militer ke dalam input teks.
2. Pengecekan Kodam : Tombol "Cek Kodam" akan memicu pengecekan terhadap kode yang dimasukkan.
3. Menampilkan Hasil : Aplikasi akan menampilkan nama Kodam jika kode ditemukan, atau pesan error jika kode tidak ditemukan.

# Komponen dan Fungsionalitas
1. HTML (index.html)
   - Struktur Dasar : Menyediakan struktur dasar halaman web.
   - Form Input : Menyediakan input teks untuk memasukkan kode daerah militer dan tombol untuk melakukan pengecekan.
   - Hasil Pengecekan : Area untuk menampilkan hasil pengecekan Kodam atau pesan error.

2. CSS (style.css)
   - Styling : Mengatur tampilan elemen-elemen HTML agar lebih menarik dan user-friendly.
   - Responsif : Menyesuaikan tata letak dan tampilan agar terlihat baik di berbagai ukuran layar.

3. JavaScript (script.js)
   - Data Kodam : Menyimpan data pasangan kode daerah militer dan nama Kodam dalam objek `kodamData`.
   - Fungsi Pengecekan : Fungsi `cekKodam()` yang mengecek apakah kode yang dimasukkan ada dalam objek `kodamData`, dan menampilkan hasilnya.

# Cara Kerja Aplikasi

1. Memasukkan Kode : Pengguna memasukkan kode daerah militer ke dalam input teks.
2. Menekan Tombol Cek Kodam : Pengguna menekan tombol "Cek Kodam" untuk memulai proses pengecekan.
3. Pengecekan Kode : Fungsi JavaScript mengambil nilai dari input teks, mengubahnya menjadi huruf kecil, dan menghilangkan spasi berlebih.

4. Menampilkan Hasil :
   - Jika kode ditemukan dalam objek `kodamData`, nama Kodam ditampilkan di bawah input dengan teks berwarna hijau.
   - Jika kode tidak ditemukan, pesan error ditampilkan dengan teks berwarna merah.

# Keunggulan Aplikasi
- Sederhana dan Cepat : Aplikasi ini mudah digunakan dan memberikan hasil dengan cepat.
- User-Friendly : Tampilan yang bersih dan navigasi yang intuitif.
- Informasi Akurat : Memberikan informasi yang tepat berdasarkan data yang disediakan dalam objek `kodamData`.

# Penggunaan
Aplikasi ini cocok digunakan oleh siapa saja yang membutuhkan informasi cepat tentang Kodam berdasarkan kode daerah militer, seperti pelajar, peneliti, atau masyarakat umum.

Dengan desain yang sederhana namun fungsional, aplikasi "Cek Kodam" menyediakan solusi efektif untuk mencari informasi mengenai Kodam di Indonesia.
