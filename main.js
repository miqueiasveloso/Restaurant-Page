(()=>{"use strict";function t(t,e){const n=document.createElement("button");n.setAttribute("id",t);const c=document.createElement("span");return c.textContent=e,n.appendChild(c),n.classList.add("tab"),n}const e=function(){const t=document.getElementById("tab-content");t.classList.add("flex-lay"),t.classList.remove("grid-lay"),t.textContent="";const e=function(){const t=document.createElement("section");t.classList.add("section");const e=document.createElement("h2");e.classList.add("section-title"),e.textContent="Welcome, Visitors!",t.appendChild(e);const n=document.createElement("p");return n.classList.add("section-description"),n.textContent="Welcome to the Cat Coffee shop, a place where you can hang out with cats and enjoy a sip of coffee at the same time!",t.appendChild(n),t}();!function(t){const e=document.querySelector(".tab.active");e&&e.classList.remove("active"),document.getElementById("home").classList.add("active")}(),t.appendChild(e)};function n(t,e,n,c){const o=document.createElement("div");o.classList.add("coffee");const a=document.createElement("img");a.setAttribute("src",t),a.setAttribute("alt",c);const s=document.createElement("div");s.classList.add("description");const d=document.createElement("h3");d.textContent=e;const i=document.createElement("h2");return i.textContent=n,s.appendChild(d),s.appendChild(i),o.appendChild(a),o.appendChild(s),o}const c=function(){const t=document.getElementById("tab-content");t.classList.add("grid-lay"),t.classList.remove("flex-lay"),t.textContent="",function(t){const e=document.querySelector(".tab.active");e&&e.classList.remove("active"),document.getElementById("menu").classList.add("active")}(),[n("https://media.istockphoto.com/photos/espresso-coffee-cup-with-beans-on-vintage-table-picture-id664313320?k=20&m=664313320&s=170667a&w=0&h=pPTRcIrqLJ9sVmEencU4b89DvoBOh-QRpatg1Zi2FHM=","Caffè Espresso","$3.60","Café Espresso"),n("https://www.anamariabrogui.com.br/assets/uploads/receitas/fotos/usuario-3235-18a45e40b548a7ecbb5448c6c891a55f.jpg","Capuccino plus Brownie","$3.70","Capuccino plus Brownie"),n("https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/4/5/0/LS-Library_Blended-Coffee-Frappe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1522779310869.jpeg","Iced Coffee","$4.10","Iced Coffee"),n("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Latte_art_3.jpg/220px-Latte_art_3.jpg","Vanilla Caffè Latte","$3.70","Vanilla Caffè Latte"),n("https://i.pinimg.com/originals/bb/3e/2a/bb3e2a011447432c95aa648582e03ae2.jpg","Cat themed Cookies","$4.00","Cat themed Cookies"),n("https://i.pinimg.com/originals/00/46/83/004683f42c1f14baac48d318e3a9504d.jpg","Cat themed Caffè Latte","$3.90","Cat themed Caffè Latte"),n("https://reviewcafe.com.br/wp-content/uploads/2022/01/cafe-long-black.jpg","Caffè Americano","$3.50","Caffè Americano"),n("https://charactermedia.com/wp-content/uploads/2019/01/cat-cafe-4.jpg","Cat themed Espresso","$3.85","Cat themed Espresso")].forEach((e=>{t.appendChild(e)}))};function o(t,e){const n=document.createElement("section");n.classList.add("section");const c=document.createElement("h2");return c.classList.add("section-title"),c.textContent=t,n.appendChild(c),e.forEach((t=>{const e=document.createElement("p");e.classList.add("section-description"),e.textContent=t,n.appendChild(e)})),n}const a=function(){const t=document.getElementById("tab-content");t.classList.add("flex-lay"),t.classList.remove("grid-lay"),t.textContent="",function(t){const e=document.querySelector(".tab.active");e&&e.classList.remove("active"),document.getElementById("about").classList.add("active")}();const e=o("Phones",["555-MEOW","555-MEOW2"]),n=o("address",["Mr. Coffee Maker St., 555"]);t.appendChild(e),t.appendChild(n)};(function(){const e=document.getElementById("content"),n=function(t,e){const n=document.createElement("main-title");n.setAttribute("id","main-title");const c=document.createElement("h1");return c.textContent="Cat Coffee Shop",n.appendChild(c),n}();e.appendChild(n);const c=function(e){const n=document.createElement("nav");n.setAttribute("id","nav");const c=t("home","Home"),o=t("menu","Menu"),a=t("about","About");return n.appendChild(c),n.appendChild(o),n.appendChild(a),n}();e.appendChild(c);const o=function(t){const e=document.createElement("main");return e.setAttribute("id","tab-content"),e}();e.appendChild(o);const a=function(t,e){const n=document.createElement("footer");n.setAttribute("id","footer");const c=document.createElement("h3");return c.textContent="@CatCoffeeShop",n.appendChild(c),n}();e.appendChild(a)})(),e(),function(){const t=document.getElementById("home"),n=document.getElementById("menu"),o=document.getElementById("about");t.addEventListener("click",e),n.addEventListener("click",c),o.addEventListener("click",a)}()})();