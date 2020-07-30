import {
  contactWrapper,
  contactHeader,
  formDiv,
  form,
  name,
  email,
  textarea,
  submit,
} from './tools';

contactWrapper.className = 'main-div';
contactWrapper.id = '3';
contactHeader.className = 'contact-header';
formDiv.className = 'form-wrapper';

name.type = 'text';
email.type = 'email';
submit.type = 'submit';
name.placeholder = 'Enter your name';
email.placeholder = 'Enter your email';
textarea.placeholder = 'Message';
textarea.rows = '6';
submit.innerHTML = 'Send';

contactHeader.innerHTML = 'CONTACT';

[name, email, textarea, submit].forEach((element) => form.appendChild(element));

formDiv.appendChild(form);
contactWrapper.appendChild(contactHeader);
contactWrapper.appendChild(formDiv);

export default contactWrapper;
