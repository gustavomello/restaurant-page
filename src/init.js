import MyImage from './home.png'
import activateBtns from './index.js';

export default function initPage() {
    const page = document.getElementById('content')
    page.innerHTML = '';
    const home = document.createElement('button');
  
    home.innerHTML = 'Home!';
    home.style.backgroundColor = 'black';
    home.style.color = 'white';

    const menu = document.createElement('button');
    menu.innerHTML = 'Menu!';
    menu.style.backgroundColor = 'white';
    menu.style.color = 'black';

    const contact = document.createElement('button');
    contact.innerHTML = 'Contact!';
    contact.style.backgroundColor = 'white';
    contact.style.color = 'black';


    const img = document.createElement('img');
    img.src = MyImage;

    const para = document.createElement('p');
    para.innerText = "This is the home";

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