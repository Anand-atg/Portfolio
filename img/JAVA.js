<script>
  const sections = document.querySelectorAll(".page-section");
  const navLinks = document.querySelectorAll("nav a");

  function showSection(id) {
    sections.forEach(section => {
      section.style.display = section.id === id ? "block" : "none";
    });
  }

  // Show only 'home' on first load
  showSection("home");

  // Handle nav clicks
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      showSection(targetId);
    });
    })


    <script>
document.querySelectorAll('.blog-item-img img').forEach(img => {
    img.addEventListener('click', () => {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = lightbox.querySelector('img');
        lightboxImg.src = img.src;
        lightbox.style.display = 'flex';
    });
});

document.getElementById('lightbox').addEventListener('click', () => {
    document.getElementById('lightbox').style.display = 'none';
});
</script>

</script>
