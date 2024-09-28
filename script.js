document.getElementById('showPhone').addEventListener('click', function() {
    var phone = document.getElementById('phone');
    if (phone.style.display === 'none') {
        phone.style.display = 'block';
        this.textContent = 'Sembunyikan Nomor Telepon';
    } else {
        phone.style.display = 'none';
        this.textContent = 'Tampilkan Nomor Telepon';
    }
});