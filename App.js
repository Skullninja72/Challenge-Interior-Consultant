const opMenu = document.getElementById('opMenu');
const clozMenu = document.getElementById('clozMenu');
const navbar = document.getElementById('navbar');
const navbarlinks = document.getElementById('navbarlinks');

opMenu.addEventListener('click', () => {
  navbar.style.top = '0%';
  setTimeout(() => {
    navbarlinks.style.opacity = 1; 
    clozMenu.style.opacity = 1;   
  }, 800);
});

clozMenu.addEventListener('click', () => {
  navbar.style.top = '-100%';
  navbarlinks.style.opacity = 0;
  clozMenu.style.opacity = 0;
});