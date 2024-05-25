
  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const package = document.getElementById('package').value; // Ambil nilai paket yang dipilih
    const address = document.getElementById('address').value; // Ambil nilai alamat
    const age = document.getElementById('age').value; // Ambil nilai umur
    const gender = document.querySelector('input[name="gender"]:checked').value; // Ambil nilai jenis kelamin
    const agreement = document.getElementById('agreement').checked; // Periksa apakah kotak centang dipilih

    // Periksa apakah kotak centang dipilih sebelum mengirim formulir
    if (!agreement) {
      alert('Harap centang kotak "Saya bersungguh-sungguh untuk daftar dan tidak main-main" terlebih dahulu.');
      return; // Hentikan proses pengiriman formulir jika kotak centang tidak dipilih
    }

    // Pesan yang akan dikirimkan melalui WhatsApp dengan garis baru dan pilihan paket tebal
    const message = `Hallo, saya ${name} tertarik untuk mendaftar di Kurnia Dewi dengan Paket *${package}*.%0AAlamat: ${address}%0AUmur: ${age} tahun%0AJenis Kelamin: ${gender}%0ANomor Telepon: ${phone}`;
    
    // URL WhatsApp dengan pesan yang telah dibuat
    const whatsappLink = `https://api.whatsapp.com/send?phone=6282317278137&text=${message}`;
    
    // Buka tautan WhatsApp di tab baru
    window.open(whatsappLink, '_blank');
  });
  