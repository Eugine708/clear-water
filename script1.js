document.addEventListener('DOMContentLoaded', () => {
    
    
    const navLinks = document.querySelectorAll('.nav-link');
    
    const cardButtons = document.querySelectorAll('.btn');


    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });

    let catalogMenuItem = null;
    navLinks.forEach(link => {
        if (link.getAttribute('href') === 'catalog.html') {
            catalogMenuItem = link;
        }
    });

    if (catalogMenuItem) {
        const dropdownMenu = document.createElement('ul');
        dropdownMenu.className = 'dropdown-menu';
        dropdownMenu.innerHTML = `
            <li><a href="catalog.html#water19">Вода 19 литров</a></li>
            <li><a href="catalog.html#water5">Вода 5 литров</a></li>
            <li><a href="catalog.html#water05">Вода 0.5 литра</a></li>
            <li><a href="catalog.html#sets">Наборы воды</a></li>
        `;
        
        
        const parentLi = catalogMenuItem.parentElement;
        parentLi.style.position = 'relative';
        parentLi.appendChild(dropdownMenu);
        
        
        parentLi.addEventListener('mouseenter', () => {
            dropdownMenu.style.display = 'block';
        });
        
        parentLi.addEventListener('mouseleave', () => {
            dropdownMenu.style.display = 'none';
        });
    }
});
