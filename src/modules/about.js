function setButtonActive(id) {
    const activeButton = document.querySelector('.tab.active');
    if (activeButton) activeButton.classList.remove('active');
  
    const homeButton = document.getElementById(id);
    homeButton.classList.add('active');
  }
  function createSection(name, data) {
    const section = document.createElement('section');
    section.classList.add('section');
  
    const title = document.createElement('h2');
    title.classList.add('section-title');
    title.textContent = name;
    section.appendChild(title);
  
    data.forEach((d) => {
      const para = document.createElement('p');
      para.classList.add('section-description');
      para.textContent = d;
      section.appendChild(para);
    });
  
    return section;
  }
  
  function renderAbout() {
    const content = document.getElementById('tab-content');
    content.classList.add('flex-lay');
    content.classList.remove('grid-lay');
    content.textContent = '';
    setButtonActive('about');
  
    const phoneSection = createSection('Phones', [
      '555-MEOW',
      '555-MEOW2'
    ]);
  
    const addressSection = createSection('address', ['Mr. Coffee Maker St., 555']);
  
    content.appendChild(phoneSection);
    content.appendChild(addressSection);
  }
  
  export default renderAbout;