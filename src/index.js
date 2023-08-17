import './style.css'
import {home_title, home_desc} from "./homePage";
import {menu_title, menu_desc} from "./menu";
import {contact_title, contact_desc } from "./contact";
import Navbar from "./navbar";
import banner from "./banner";
import footer from './footer';

const {navbar, home, menu, contact} = Navbar();
const body = document.querySelector('body');
const page = document.createElement('div');
page.id = 'page';

const page_title = document.createElement('h1');
page_title.textContent = home_title;

const page_content = document.createElement('div');
page_content.appendChild(home_desc);

page.appendChild(page_title);
page.appendChild(page_content);

const switchContent = (title, desc) => {
    if(page_content.textContent != title)
    {
        page_title.textContent = title;
        page_content.replaceChild(desc,page_content.firstChild);
    }
}

home.addEventListener('click',() => switchContent(home_title, home_desc));

menu.addEventListener('click',()=>switchContent(menu_title,menu_desc));

contact.addEventListener('click',()=>switchContent(contact_title, contact_desc));


body.appendChild(navbar);
body.appendChild(banner);
body.appendChild(page);
body.appendChild(footer);