import $ from 'jquery';
import MicroEvent from './vendor/microevent';
import Throttle from'./vendor/throttle';

let inlineSizer = {
  init() {
    this._cacheDom();
    this._buildGroups();
    this._bindEvents();
  },

  _cacheDom() {
    this.$blocks = $('.js-block');
  },

  _bindEvents() {
    $(window).on( 'resize', $.throttle( 150, this._handleResize.bind(this) ) );
  },

  _buildGroups() {
    this.blocks = {};

    this.$blocks.each( i => {
      let block = $(this.$blocks[i]),
          group = block.data('group');

      if ( this.blocks[group] ) {
        this.blocks[group].push(block);
      } else {
        this.blocks[group] = [block]
      }
    });

    this._handleResize();
  },

  _handleResize() {
    this.setToAuto();
    for ( let group in this.blocks ) {
      let blocks = this.blocks[group],
          max = this._getMax(blocks);
          
      for (let i = 0; i < blocks.length; i++) {
        if (blocks[i].outerHeight() < max) {
          blocks[i].css({ 'height': `${max}px`});
        }
      };
    }
  },

  _getMax(blocks) {
    let max = 0;
    for (let i = 0; i < blocks.length; i++) {
      max = blocks[i].outerHeight() > max ? blocks[i].outerHeight() : max;
    };

    return max;
  },

  setToAuto() {
    this.$blocks.css({ 'height': 'auto'});
  }
}

export default inlineSizer;
