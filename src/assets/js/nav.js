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
    console.log('expand');
    
    this.$nav.addClass('is-open');

    TweenMax.to(this.$menu, 0.5, {
      height: '100%',
      width: '100%',
      top: 0,
      right: 0,
      'pointer-events': 'auto',
      ease: Power2.easeOut
    });

    TweenMax.set(this.$link, {
      y: -16,
      opacity: 0
    });

    TweenMax.staggerTo(this.$link, 0.4, {
      y: 0,
      opacity: 1,
      delay: 0.15,
      ease: Power2.easeOut
    }, 0.03);

    TweenMax.set(this.$list, { position: 'absolute', delay: 1 });
  },

  close() {
    TweenMax.to(this.$menu, 0.4, {
      height: '4.7rem',
      width: '4.9rem',
      top: '1.5rem',
      right: '1.5rem',
      'pointer-events': 'none',
      ease: Power2.easeOut
    });

    TweenMax.set(this.$link, {
      opacity: 0,
      y: -16
    });

    TweenMax.set(this.$list, { position: 'fixed', delay: 0.4 });

    window.setTimeout( () => {
      this.$nav.removeClass('is-open');
    }, 300);
  }
}

export default nav;