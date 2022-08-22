import initPage from './init.js';
import menuPage from './menu.js';
import contactPage from './contact.js';

export default function activateBtns (){
const home = document.getElementById('home')
const menu = document.getElementById('menu')
const contact = document.getElementById('contact')

home.addEventListener('click',initPage)
menu.addEventListener('click',menuPage)
contact.addEventListener('click',contactPage)
}

initPage();




