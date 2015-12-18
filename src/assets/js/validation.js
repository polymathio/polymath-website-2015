import $ from 'jquery';
import Parsley from './vendor/parsley';

let validation = {
  init() {
    $('.js-parsley').parsley();
  }
}

export default validation;