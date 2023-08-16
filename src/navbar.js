const Navbar = () =>{
    
    const navbar = document.createElement('ul');
    navbar.id = 'navbar';
    
    const home = document.createElement('li');
    let a = document.createElement('a');
    a.textContent = 'Home';
    home.appendChild(a);

    const menu = document.createElement('li');
    menu.textContent = 'Menu';

    const contact = document.createElement('li');
    contact.textContent = 'Contact';

    navbar.appendChild(home);
    navbar.appendChild(menu);
    navbar.appendChild(contact);

    return {navbar,home,menu,contact};
}

export default Navbar;

