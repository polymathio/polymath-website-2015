import $ from 'jquery';
import MicroEvent from './vendor/microevent';

let events = {
  init() {
    MicroEvent.mixin(this);

    $(window).load( () => this.trigger('load') );
    this.bind('load', this.load );
  },

  load() {
    console.log('loaded!');
  }
}

export default events;