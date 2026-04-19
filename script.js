function kirimPesan() {
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let pesan = document.getElementById("pesan").value;

    if (nama === "" || email === "" || pesan === "") {
        alert("Semua data harus diisi!");
    } else {
        alert("Pesan berhasil dikirim!");
    }
}