const navbar = document.querySelector('#NavBar');
const topPosition = navbar.offsetTop;

function stickynavbar() {
  if (window.scrollY >= topPosition) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

window.addEventListener('scroll', stickynavbar);
