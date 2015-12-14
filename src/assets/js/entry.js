import $ from 'jquery';

import events from './events';
import inlineSizer from'./inlineSizer';
import svg from'./svg';

$(document).ready( () => {
  //events.init();
  inlineSizer.init();
  svg.init();
});