function setButtonActive(id) {
    const activeButton = document.querySelector('.tab.active');
    if (activeButton) activeButton.classList.remove('active');
  
    const homeButton = document.getElementById(id);
    homeButton.classList.add('active');
  }
  
  function createCoffee(src, text, price, alt) {
    const coffee = document.createElement('div');
    coffee.classList.add('coffee');
    const img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', alt);
  
    const description = document.createElement('div');
    description.classList.add('description');
  
    const coffeeName = document.createElement('h3');
    coffeeName.textContent = text;
  
    const coffeePrice = document.createElement('h2');
    coffeePrice.textContent = price;
  
    description.appendChild(coffeeName);
    description.appendChild(coffeePrice);
  
    coffee.appendChild(img);
    coffee.appendChild(description);
    return coffee;
  }
  
  function renderMenu() {
    const content = document.getElementById('tab-content');
    content.classList.add('grid-lay');
    content.classList.remove('flex-lay');
  
    content.textContent = '';
    setButtonActive('menu');
  
    const coffeeMenu = [
      createCoffee(
        'https://media.istockphoto.com/photos/espresso-coffee-cup-with-beans-on-vintage-table-picture-id664313320?k=20&m=664313320&s=170667a&w=0&h=pPTRcIrqLJ9sVmEencU4b89DvoBOh-QRpatg1Zi2FHM=',
        'Caffè Espresso',
        '$3.60',
        'Café Espresso'
      ),
      createCoffee(
        'https://www.anamariabrogui.com.br/assets/uploads/receitas/fotos/usuario-3235-18a45e40b548a7ecbb5448c6c891a55f.jpg',
        'Capuccino plus Brownie',
        '$3.70',
        'Capuccino plus Brownie'
      ),
      createCoffee(
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/4/5/0/LS-Library_Blended-Coffee-Frappe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1522779310869.jpeg',
        'Iced Coffee',
        '$4.10',
        'Iced Coffee'
      ),
      createCoffee(
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Latte_art_3.jpg/220px-Latte_art_3.jpg',
        'Vanilla Caffè Latte',
        '$3.70',
        'Vanilla Caffè Latte'
      ),
      createCoffee(
        'https://i.pinimg.com/originals/bb/3e/2a/bb3e2a011447432c95aa648582e03ae2.jpg',
        'Cat themed Cookies',
        '$4.00',
        'Cat themed Cookies'
      ),
      createCoffee(
        'https://i.pinimg.com/originals/00/46/83/004683f42c1f14baac48d318e3a9504d.jpg',
        'Cat themed Caffè Latte',
        '$3.90',
        'Cat themed Caffè Latte'
      ),
      createCoffee(
        'https://reviewcafe.com.br/wp-content/uploads/2022/01/cafe-long-black.jpg',
        'Caffè Americano',
        '$3.50',
        'Caffè Americano'
      ),
      createCoffee(
        'https://charactermedia.com/wp-content/uploads/2019/01/cat-cafe-4.jpg',
        'Cat themed Espresso',
        '$3.85',
        'Cat themed Espresso'
      )
    ];
  
    coffeeMenu.forEach((coffee) => {
      content.appendChild(coffee);
    });
  }
  
  export default renderMenu;