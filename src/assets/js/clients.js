import $ from 'jquery';

let clients = {
  init() {
    this._cacheDOM();
    if (this.$slider.length > 0) {
      this._buildSlider();
      this._bindEvents();  
    }
  },

  _cacheDOM() {
    this.$slider = $('.js-clients-slider');
    this.$slides = $('.js-clients-slide');
    this.$buttons = $('.js-clients-button');
  },

  _bindEvents() {
    this.$buttons.on('click', function(e) {
      e.preventDefault();
      clients.goToSlide($(this).data('target'));
    });
  },

  _buildSlider() {
    this.$buttons.each( function(i) {
      $(this).data('target', i);
    });

    this.limit = this.$slides.length;
    this.current = 0;

    TweenMax.set(this.$slides[this.current], { autoAlpha: 1 });
    this.$buttons.eq(this.current).addClass('is-active');
  },

  goToSlide(target) {
    let x = target < this.current ? 18 : -18;
    //console.log(`target: ${target} current: ${this.current} x: ${x}`);

    this.$buttons.eq(this.current).removeClass('is-active');
    TweenMax.to(this.$slides[this.current], 0.2, { autoAlpha: 0, x: x });

    this.current = target;
    TweenMax.set(this.$slides[this.current], { x: -x });
    TweenMax.to(this.$slides[this.current], 0.2, { autoAlpha: 1, x: 0, delay: 0.1 });
    this.$buttons.eq(this.current).addClass('is-active');
  }
}

export default clients;