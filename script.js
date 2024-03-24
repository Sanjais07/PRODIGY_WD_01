// Add event listener to change navbar background color when scrolled
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navigationBar');
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#555';
    }
  }
