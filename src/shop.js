import { newTag, mainWrapper, productWrapper, links } from './tools';

mainWrapper.className = 'main-div';
mainWrapper.id = '2';
productWrapper.className = 'products';

function product(img) {
  const tag = newTag('div');
  const productImage = newTag('img');
  const choose = newTag('p');
  productImage.src = img;
  choose.innerHTML = 'Choose';
  tag.appendChild(productImage);
  tag.appendChild(choose);
  return tag;
}
const newProduct = (src) => product(src);

const images = links.map((item) => newProduct(item));

images.forEach((item) => productWrapper.appendChild(item));

mainWrapper.appendChild(productWrapper);

export default mainWrapper;
