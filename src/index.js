//switch mode to production before deployment
import './style.css'
import {home_title, home_desc} from "./homePage";
import {menu_title, menu_desc} from "./menu";
import {contact_title, contact_desc } from "./contact";
import Navbar from "./navbar";
import banner from "./banner";

const {navbar, home, menu, contact} = Navbar();
const content = document.querySelector('#content');
const page = document.createElement('div');
page.id = 'page';

const page_title = document.createElement('h1');
page_title.textContent = home_title;

const page_content = document.createElement('div');
page_content.appendChild(home_desc);

const switchContent = (title, desc) => {
    if(page_content.textContent != title)
    {
        console.log(title,desc);
        page_title.textContent = title;
        page_content.replaceChild(desc,page_content.firstChild);
    }
}

home.addEventListener('click',() => switchContent(home_title, home_desc));

menu.addEventListener('click',()=>switchContent(menu_title,menu_desc));

contact.addEventListener('click',()=>switchContent(contact_title, contact_desc));


page.appendChild(page_title);
page.appendChild(page_content);
content.appendChild(navbar);
content.appendChild(banner);
content.appendChild(page);

console.log("Hello from index.js");