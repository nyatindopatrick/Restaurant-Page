import {
  navbar, brand, list, menu, shop, order,
} from './tools';

navbar.className = 'navbar';
navbar.id = 'nav';
brand.href = '/';
brand.innerHTML = 'SERVICE';
list.id = 'tab-menu';
menu.dataset.tab = '1';
shop.dataset.tab = '2';
order.dataset.tab = '3';

navbar.appendChild(brand);
menu.innerHTML = 'MENU';
shop.innerHTML = 'SHOP';
order.innerHTML = 'CONTACTS';

[menu, shop, order].forEach((item) => list.appendChild(item));

navbar.appendChild(list);

export default navbar;
