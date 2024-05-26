<script>
    function openModal(productId) {
            var modal = document.getElementById("myModal");
    var title = document.getElementById("modal-title");
    var description = document.getElementById("modal-description");

    if (productId === 'sayur1') {
        title.textContent = 'Sayur A';
    description.textContent = 'Deskripsi lengkap tentang Sayur A.';
            } else if (productId === 'sayur2') {
        title.textContent = 'Sayur B';
    description.textContent = 'Deskripsi lengkap tentang Sayur B.';
            } else if (productId === 'sayur3') {
        title.textContent = 'Sayur C';
    description.textContent = 'Deskripsi lengkap tentang Sayur C.';
            }

    modal.style.display = "block";
        }

    function closeModal() {
            var modal = document.getElementById("myModal");
    modal.style.display = "none";
        }

    window.onclick = function (event) {
            var modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
            }
        }

    function validateForm() {
            var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Semua field harus diisi!");
    return false;
            } else {
        alert("Pesan Anda berhasil dikirim!");
    return true;
            }
        }

        document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
        });
</script>