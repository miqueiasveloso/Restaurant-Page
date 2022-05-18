function createTitle(id, text) {
    const mainTitle = document.createElement('main-title');
    mainTitle.setAttribute('id', id);
    const logo = document.createElement('h1');
    logo.textContent = text;
    mainTitle.appendChild(logo);
    return mainTitle;
  }
  function createButton(id, text) {
    const button = document.createElement('button');
    button.setAttribute('id', id);
    const span = document.createElement('span');
    span.textContent = text;
    button.appendChild(span);
    button.classList.add('tab');
    return button;
  }
  function createNav(id) {
    const nav = document.createElement('nav');
    nav.setAttribute('id', id);
  
    const homeButton = createButton('home', 'Home');
    const menuButton = createButton('menu', 'Menu');
    const aboutButton = createButton('about', 'About');
  
    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(aboutButton);
    return nav;
  }
  function createMain(id) {
    const main = document.createElement('main');
    main.setAttribute('id', id);
    return main;
  }
  function createFooter(id, text) {
    const footer = document.createElement('footer');
    footer.setAttribute('id', id);
    const h3 = document.createElement('h3');
    h3.textContent = text;
    footer.appendChild(h3);
    return footer;
  }
  function renderPage() {
    const content = document.getElementById('content');
    const mainTitle = createTitle('main-title', 'Cat Coffee Shop');
    content.appendChild(mainTitle);
    
    const nav = createNav('nav');
    content.appendChild(nav);
    
    const tabContent = createMain('tab-content');
    content.appendChild(tabContent);
    
    const footer = createFooter('footer', '@CatCoffeeShop');
    content.appendChild(footer);
  }
  
  export default renderPage;