// Menangani klik hamburger untuk membuka dan menutup sidebar
const hamburger = document.getElementById('hamburger-menu');
const sidebar = document.getElementById('sidebar');

// Fungsi untuk membuka dan menutup sidebar
hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Menutup sidebar jika klik di luar area sidebar
document.addEventListener('click', (e) => {
  if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
    sidebar.classList.remove('active');
  }
});






// Daftar gambar hero
const heroImages = [
    'image/bg2.png', // Gambar pertama
    'image/bg3.png', // Gambar kedua
    'image/bg1.png'  // Gambar ketiga
  ];
  
  let currentImageIndex = 0;
  
  // Fungsi untuk mengganti gambar background
  function changeHeroImage() {
    const heroSection = document.querySelector('.hero');
    heroSection.style.backgroundImage = `url(${heroImages[currentImageIndex]})`;
    
    // Update index gambar berikutnya
    currentImageIndex = (currentImageIndex + 1) % heroImages.length;
  }
  
  // Ubah gambar setiap 5 detik
  setInterval(changeHeroImage, 5000);
  
  // Panggil fungsi untuk pertama kali ketika halaman dimuat
  changeHeroImage();









  // Menggunakan Intersection Observer API
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".property-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Stop mengamati setelah animasi selesai
      }
    });
  });

  cards.forEach((card) => {
    observer.observe(card);
  });
});
