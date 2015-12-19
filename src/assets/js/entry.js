import $ from 'jquery';

import events from './events';
import inlineSizer from'./inlineSizer';
import svg from'./svg';
import contact from'./contact';
import validation from'./validation';
import nav from'./nav';

$(document).ready( () => {
  //events.init();
  inlineSizer.init();
  svg.init();
  contact.init();
  validation.init();
  nav.init();
});