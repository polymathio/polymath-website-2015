import $ from 'jquery';

let contact = {
  init() {
    this._cacheDOM();
    this._bindEvents();
  },

  _cacheDOM() {
    this.$trigger = $('.js-contact-trigger');
    this.$closeTrigger = $('.js-contact-close-trigger');

    this.$clonee = $('.js-contact-clonee');
    this.$clone = $('.js-contact-clone');
    this.$form = $('.js-contact-form');

    this.$input = $('.js-input-focus');
  },

  _bindEvents() {
    this.$trigger.on('click', (e) => {
      e.preventDefault();
      this.expand();
    });

    this.$closeTrigger.on('click', (e) => {
      e.preventDefault();
      this.close();
    });

    this.$input.on('input', function() {
      if ($(this).val()) {
        $(this).addClass('focus');
      } else {
        $(this).removeClass('focus');
      }
    });
  },

  expand() {
    let h = this.$clonee.outerHeight();
    let w = this.$clonee.outerWidth();
    let top = this.$clonee.offset().top;
    let left = this.$clonee.offset().left;

    let winW = $(window).width();
    let pLeft = winW < 768 ? '1.5rem' : '5.5rem';
    let pLeftInit = winW < 768 ? '1.5rem' : '4rem';
    let pTop = winW < 768 ? '8rem' : '4rem';

    this.$clone.addClass('is-expanded');

    //Clone
    TweenMax.set(this.$clone, {
      height: '100%',
      width: '100%',
      top: 0,
      left: 0,
      paddingLeft: pLeft,
      paddingTop: pTop,
      position: 'fixed'
    });

    TweenMax.from(this.$clone, 0.4, {
      height: h,
      width: w,
      top: top,
      left: left,
      paddingLeft: pLeftInit,
      paddingTop: pLeftInit,
      ease: Power3.easeOut
    });

    // Form
    TweenMax.set(this.$form, {
      height: 'auto',
      opacity: 1,
      y: '-48px'
    });

    TweenMax.from(this.$form, 0.5, {
      opacity: 0,
      y: '-16px',
      ease: Power1.easeOut
    });

    TweenMax.set(this.$form, { 'pointer-events': 'auto', delay: 1 });
  },

  close() {
    let h = this.$clonee.outerHeight();
    let w = this.$clonee.outerWidth();
    let top = this.$clonee.offset().top;
    let left = this.$clonee.offset().left;
    let winW = $(window).width();
    let pLeftInit = winW < 768 ? '1.5rem' : '4rem';
    let pTop = winW < 768 ? '1.5rem' : '4rem';

    this.$clone.removeClass('is-expanded');

    TweenMax.to(this.$form, 0.2, {
      height: 0,
      opacity: 0,
      ease: Power1.easeOut
    });
    TweenMax.set(this.$form, { 'pointer-events': 'none' });

    TweenMax.to(this.$clone, 0.4, {
      height: h,
      width: w,
      top: top,
      left: left,
      paddingLeft: pLeftInit,
      paddingTop: pTop,
      ease: Power3.easeOut,
      overwrite: 'all'
    });

    TweenMax.set(this.$clone, {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: 'auto',
      height: 'auto',
      delay: 0.41
    });
  }
}

export default contact;