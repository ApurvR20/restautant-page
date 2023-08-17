import oily_oafs from '../assets/oily_oafs.png'
import glyphid_slammers from '../assets/glyphid_slammers.png';
import leaf_lovers from '../assets/leaf_lovers.png';
import credit from '../assets/credit.webp';
const menu_title = 'Menu';
const menu_desc = document.createElement('div');

const beer_menu = [
    {logo: oily_oafs,name: "Oily Oafs", price: 35}, 
    {logo : glyphid_slammers ,name: "Glyphid Slammer", price: 85},
    {logo: leaf_lovers, name: "Leaf Lovers Special", price: 25}
]

const table = document.createElement('table');

const row_adder = (arr) => {

    arr.forEach(e => { 

    const tr = document.createElement('tr');

    const logo = document.createElement('td');
    const img = document.createElement('img');
    img.src = e.logo;
    img.style= "width : 75px; height : auto";
    logo.appendChild(img);

    const name = document.createElement('td');
    name.textContent = e.name;

    const price = document.createElement('td');
    price.textContent = `${e.price}     `;

    const credits = document.createElement('img');
    credits.id = "credits";
    credits.src = credit;
    price.appendChild(credits);

    tr.appendChild(logo);
    tr.appendChild(name);
    tr.appendChild(price);
    table.appendChild(tr);
    });
} 

row_adder(beer_menu);

menu_desc.appendChild(table);


export {menu_title,menu_desc};