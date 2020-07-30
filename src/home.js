import {
  section,
  title,
  text,
  aside,
  sidenote,
  breakfast,
  breakHeader,
  span,
  imageDiv,
  newTag,
} from './tools';

section.className = 'main-div active';
section.id = '1';
title.className = 'main-title';
title.innerHTML = 'FOOD';
text.innerHTML =
  'Baked chicken is a very tast dish for the whole family. ' +
  'The combination of delicate aromas and roasting make the ' +
  'chicken terribly tasty, juicy, with a crispy crust.';

[title, text].forEach((item) => section.appendChild(item));

breakfast.className = 'breakfast';
imageDiv.className = 'image-wrapper';
breakHeader.innerHTML = 'CHOOSE YOUR';
span.innerHTML = 'BREAKFAST';

function foodPics(img) {
  const tag = newTag('img');
  tag.src = img;
  imageDiv.appendChild(tag);
  return tag;
}

const foods = [
  'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1571860155542-28f639eeab61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1590288488147-f46142daf112?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=498&q=80',
];

foods.forEach((item) => foodPics(item));
breakHeader.appendChild(span);
[breakHeader, imageDiv].forEach((item) => breakfast.appendChild(item));

sidenote.innerHTML = 'FOOD';

aside.appendChild(sidenote);

section.appendChild(breakfast);
export { aside, section };
