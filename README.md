
# Pemilihan Tech Stack
Untuk frontend, ada beberapa opsi yang dipertimbangkan:
- Plain HTML, CSS, & JS => opsi yang standar dan sederhana
- React.js => opsi untuk pembuatan SPA, tetapi aplikasi harus di-build terlebih dahulu sebelum di-serve (lebih kompleks dari Plain HTML, CSS, & JS)
- Jade => opsi paling sederhana untuk layout yang benar-benar hanya menunjukkan MVP

Karena keterbatasan waktu dan tidak adanya requirement untuk layouting yang kompleks, **Jade** dipilih untuk bagian frontend.

Untuk backend, Express.js digunakan sesuai requirement yang ditentukan. Untuk persistence layer, Firebase (produk Real-Time Database) digunakan karena sudah terintegrasi dengan Firebase Hosting untuk mempermudah hosting. Karena data ingin digunakan sangat sederhana, penggunaan RTDB atau Firestore pasti memenuhi requirement.

# Technical Tasks
**Express.js**
- Membuat endpoint untuk frontend agar dapat menampilkan data berupa jumlah klik
- Membuat endpoint untuk frontend agar dapat mengupdate jumlah klik

**Jade**
- Membuat halaman yang berisi button yang dapat diklik
- Menghubungkan button yang diklik dengan endpoint update jumlah klik
- Membuat button yang mengarah ke halaman tabel jumlah klik
- Membuat halaman tabel jumlah klik yang mendapatkan data jumlah klik dari endpoint Express.js

**Hosting**
- Deploy simple static Express.js app melalu Firebase Hosting untuk Cloud Functions