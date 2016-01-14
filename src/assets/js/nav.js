import $ from 'jquery';

let nav = {
  init() {
    this._cacheDOM();
    this._bindEvents();
  },

  _cacheDOM() {
    this.$trigger = $('.js-menu-trigger');
    this.$menu = $('.js-nav-menu');
    this.$list = $('.js-nav-list');
    this.$link = $('.js-nav-link');
    this.$nav = $('.js-nav');
  },

  _bindEvents() {
    this.$trigger.on('click', (e) => {
      e.preventDefault();
      this.toggleMenu();
    })
  },

  toggleMenu() {
    if (!this.$nav.hasClass('is-open')) {
      this.expand();
    } else {
      this.close();
    }
  },

  expand() {
    this.$nav.addClass('is-open');

    TweenMax.set(this.$menu, { opacity: 1 });

    TweenMax.to(this.$menu, 0.35, {
      height: '100%',
      width: '100%',
      top: 0,
      left: 0,
      'pointer-events': 'auto',
      ease: Power2.easeOut
    });

    TweenMax.set(this.$link, {
      y: -16,
      opacity: 0
    });

    TweenMax.staggerTo(this.$link, 0.3, {
      y: 0,
      opacity: 1,
      delay: 0.15,
      ease: Power2.easeOut
    }, 0.03);

    TweenMax.set(this.$list, { position: 'absolute', delay: 1 });
  },

  close() {
    let winW = $(window).width();
    let top = winW < 640 ? 0 : '0.75rem';
    let left = winW < 640 ? 0 : '5.75rem';

    TweenMax.to(this.$menu, 0.35, {
      height: '4.3rem',
      width: '4.4rem',
      top: top,
      left: left,
      'pointer-events': 'none',
      ease: Power2.easeOut
    });

    TweenMax.set(this.$link, {
      opacity: 0,
      y: -16
    });

    TweenMax.set(this.$list, { position: 'fixed', delay: 0.36 });
    TweenMax.set(this.$menu, { opacity: 0, delay: 0.45 });

    window.setTimeout( () => {
      this.$nav.removeClass('is-open');
    }, 300);
  }
}

export default nav;