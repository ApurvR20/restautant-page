const Navbar = () =>{
    
    const navbar = document.createElement('ul');
    navbar.id = 'navbar';
    
    const home = document.createElement('li');
    const a1 = document.createElement('a');
    a1.textContent = 'Home';
    home.appendChild(a1);

    const menu = document.createElement('li');
    const a2 = document.createElement('a');
    a2.textContent = 'Menu';
    menu.appendChild(a2);

    const contact = document.createElement('li');
    const a3 = document.createElement('a');
    a3.textContent = 'Contact';
    contact.appendChild(a3);

    navbar.appendChild(home);
    navbar.appendChild(menu);
    navbar.appendChild(contact);

    return {navbar,home,menu,contact};
}

export default Navbar;

