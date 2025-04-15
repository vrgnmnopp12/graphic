// Menunggu sampai dokumen siap
document.addEventListener("DOMContentLoaded", function() {
  
  // Menangani pengiriman form login
  document.getElementById('loginForm').addEventListener('submit', function(e) {
    // Mencegah form untuk melakukan refresh halaman
    e.preventDefault();

    // Ambil nilai dari input username dan password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Logika login sederhana
    if (username === 'admin' && password === '123') {
      alert('Login berhasil!');
      // Arahkan pengguna ke halaman katalog produk
      window.location.href = 'catalog.html';
    } else {
      // Jika login gagal, tampilkan pesan kesalahan
      alert('Username atau Password salah');
    }
  });

});
// JavaScript Document