import MyImage from './contact.jpeg'
import activateBtns from './index.js';

export default function contactPage() {
    const page = document.getElementById('content')
    page.innerHTML = '';
    const home = document.createElement('button');
    home.innerHTML = 'Home!';
    home.style.backgroundColor = 'white';
    home.style.color = 'black';


    const menu = document.createElement('button');
    menu.innerHTML = 'Menu!';
    menu.style.backgroundColor = 'white';
    menu.style.color = 'black';

    const contact = document.createElement('button');
    contact.innerHTML = 'Contact!';
    contact.style.backgroundColor = 'black';
    contact.style.color = 'white';


    const img = document.createElement('img');
    img.src = MyImage;

    const para = document.createElement('p');
    para.innerText = "This is the contact page";

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