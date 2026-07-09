window.addEventListener('scroll', () => {
  const header = document.querySelector('header.site-header');
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});