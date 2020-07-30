import '../styles/styles.scss';
import { newTag } from './tools';
import navbar from './tabs';
import { aside, section } from './home';
import mainWrapper from './shop';
import contact from './contact';

const content = document.getElementById('content');
const div = newTag('div');
div.className = 'wrapper';

[aside, section, mainWrapper, contact].forEach((item) => div.appendChild(item));
[navbar, div].forEach((item) => content.appendChild(item));

const btn = document.getElementById('tab-menu');

const tabContents = div.getElementsByTagName('section');
btn.addEventListener('click', (e) => {
  const button = e.target.nodeName === 'LI';
  if (!button) return;
  const tabs = e.target.dataset.tab;
  const tabContent = document.getElementById(tabs);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < tabContents.length; i++) {
    if (tabContents[i] !== tabContents[tabs - 1]) {
      tabContents[i].classList.remove('active');
    }
    tabContent.classList.add('active');
  }
});
