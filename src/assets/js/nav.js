import $ from 'jquery';

let nav = {
  init() {
    this._cacheDOM();
    this._bindEvents();
  },

  _cacheDOM() {
    this.$trigger = $('.js-menu-trigger');
    this.$menu = $('.js-nav-menu');
    this.$logo = $('.js-nav-logo');
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

    TweenMax.to(this.$menu, 0.4, {
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
      delay: 0.3,
      ease: Power2.easeOut
    }, 0.03);
  },

  close() {
    TweenMax.to(this.$menu, 0.3, {
      height: '4.7rem',
      width: '4.9rem',
      top: '1.5rem',
      right: '1.5rem',
      'pointer-events': 'none',
      ease: Power1.easeOut
    });

    TweenMax.to(this.$link, 0.1, {
      opacity: 0,
      ease: Power2.easeOut
    });

    window.setTimeout( () => {
      this.$nav.removeClass('is-open');
    }, 100);
  }
}

export default nav;