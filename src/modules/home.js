function createAboutSection() {
    const about = document.createElement('section');
    about.classList.add('section');
  
    const title = document.createElement('h2');
    title.classList.add('section-title');
    title.textContent = 'Welcome, Visitors!';
  
    about.appendChild(title);
  
    const p = document.createElement('p');
    p.classList.add('section-description');
    p.textContent =
      'Welcome to the Cat Coffee shop, a place where you can hang out with cats and enjoy a sip of coffee at the same time!';
  
    about.appendChild(p);
    return about;
  }
  
  function setButtonActive(id) {
    const activeButton = document.querySelector('.tab.active');
    if (activeButton) activeButton.classList.remove('active');
  
    const homeButton = document.getElementById(id);
    homeButton.classList.add('active');
  }
  
  function renderHome() {
    const content = document.getElementById('tab-content');
    content.classList.add('flex-lay');
    content.classList.remove('grid-lay');
  
    content.textContent = '';
  
    const aboutSection = createAboutSection();
  
    setButtonActive('home');
  
    content.appendChild(aboutSection);
  }
  
  export default renderHome;