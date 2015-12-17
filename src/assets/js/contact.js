import $ from 'jquery';

let contact = {
  init() {
    this._cacheDOM();
    this._bindEvents();
  },

  _cacheDOM() {
    this.$trigger = $('.js-contact-trigger');

    this.$clonee = $('.js-contact-clonee');
    this.$clone = $('.js-contact-clone');
    this.$form = $('.js-contact-form');
  },

  _bindEvents() {
    this.$trigger.on('click', (e) => {
      e.preventDefault();
      this.fill();
    });
  },

  fill() {
    let h = this.$clonee.outerHeight();
    let w = this.$clonee.outerWidth();
    let top = this.$clonee.offset().top;
    let left = this.$clonee.offset().left;

    this.$clone.addClass('is-expanded');

    TweenMax.set(this.$clone, {
      height: '100%',
      width: '100%',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: 'fixed'
    });

    TweenMax.from(this.$clone, 0.4, {
      height: h,
      width: w,
      top: top,
      left: left,
      ease: Power3.easeOut
    });

    TweenMax.set(this.$form, {
      height: 'auto',
      opacity: 1,
      y: 0
    });

    TweenMax.from(this.$form, 0.5, {
      height: 0,
      opacity: 0,
      y: '32px',
      ease: Power1.easeOut
    });
  },

  empty() {
    this.$filler.removeClass('is-filled');
  }
}

export default contact;