function Element(tag) {
  this.tag = document.createElement(tag);
}
const newTag = (tag) => new Element(tag).tag;

const section = newTag('section');
const title = newTag('h1');
const text = newTag('p');
const aside = newTag('aside');
const sidenote = newTag('h3');
const breakfast = newTag('div');
const breakHeader = newTag('h1');
const span = newTag('span');
const imageDiv = newTag('div');
const navbar = newTag('nav');
const brand = newTag('a');
const list = newTag('ul');
const menu = newTag('li');
const shop = newTag('li');
const order = newTag('li');
const productWrapper = newTag('div');
const mainWrapper = newTag('section');
const contactWrapper = newTag('section');
const formDiv = newTag('div');
const contactHeader = newTag('h1');
const form = newTag('form');
const name = newTag('input');
const email = newTag('input');
const textarea = newTag('textarea');
const submit = newTag('button');

const links = [
  'https://images.unsplash.com/photo-1514218953589-2d7d37efd2dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1565461863445-bc2ae630fc53?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=457&q=80',
  'https://images.unsplash.com/photo-1568623269068-c31912c211d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
];

export {
  newTag,
  contactWrapper,
  contactHeader,
  formDiv,
  form,
  name,
  email,
  textarea,
  submit,
  section,
  title,
  text,
  aside,
  sidenote,
  breakfast,
  breakHeader,
  span,
  imageDiv,
  navbar,
  brand,
  list,
  menu,
  shop,
  order,
  mainWrapper,
  productWrapper,
  links,
};
