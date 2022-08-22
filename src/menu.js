import MyImage from './menu.jpeg'
import activateBtns from './index.js';

export default function menuPage() {
    const page = document.getElementById('content')
    page.innerHTML = '';
    const home = document.createElement('button');
    home.innerHTML = 'Home!';
    home.style.backgroundColor = 'white';
    home.style.color = 'black';


    const menu = document.createElement('button');
    menu.innerHTML = 'Menu!';
    menu.style.backgroundColor = 'black';
    menu.style.color = 'white';

    const contact = document.createElement('button');
    contact.innerHTML = 'Contact!';
    contact.style.backgroundColor = 'white';
    contact.style.color = 'black';


    const img = document.createElement('img');
    img.src = MyImage;

    const para = document.createElement('p');
    para.innerText = "This is the menu page";

    home.id = 'home';
    menu.id = 'menu';
    contact.id = 'contact';

    page.appendChild(home)
    page.appendChild(menu)
    page.appendChild(contact)
    page.appendChild(para)
    page.appendChild(img)
    activateBtns();

  }