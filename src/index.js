import renderPage from './modules/nav';
import renderHome from './modules/home';
import renderMenu from './modules/menu';
import renderAbout from './modules/about';

init();

function addNavEvents() {
  const homeButton = document.getElementById('home');
  const menuButton = document.getElementById('menu');
  const aboutButton = document.getElementById('about');

  homeButton.addEventListener('click', renderHome);
  menuButton.addEventListener('click', renderMenu);
  aboutButton.addEventListener('click', renderAbout);
}

function init() {
  renderPage();
  renderHome();
  addNavEvents();
}