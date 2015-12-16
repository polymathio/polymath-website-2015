import $ from 'jquery';
import { isInView } from './helpers';

let svg = {
  init() {
    this.cacheDom();
    this.bindEvents();
    
    this._loopFire();
    this._loopStar();
  },

  cacheDom() {
    this.design = '#svg--design';
    this._setUpSVG(this.design);

    this.largeFlame = $('#svg--deploy .fire1');
    this.smallFlame = $('#svg--deploy .fire2');
    this.shootingStar = document.querySelector('.shooting-star');
  },

  bindEvents() {
    $(window).on('scroll', () => {
      if (document.querySelector(this.design) && isInView(document.querySelector(this.design))) {
        this._drawSVG(this.design, 1, 0.07, 0);  
      }
    }).bind(this);
  },

  _setUpSVG(svg) {
    this[svg] = {
      paths: [],
      pathCount: $(svg + " path").length
    };

    for (let i = 0; i < this[svg].pathCount; i++) {
      this[svg].paths[i] = document.querySelector(`${svg} path:nth-child(${i + 1})`);

      let strokeLength = this[svg].paths[i].getTotalLength();
      
      this[svg].paths[i].style.strokeDasharray =  strokeLength + ' ' + strokeLength;
      this[svg].paths[i].style.strokeDashoffset =  -strokeLength;
    };
  },

  _drawSVG(svg, transition, delay, timeout) {
    let { paths, pathCount } = this[svg];

    for (let i = 0; i < pathCount; i++) {
      let strokeLength = paths[i].getTotalLength();
      TweenMax.to(paths[i], transition, { strokeDashoffset: -strokeLength * 2, ease: Power2.easeOut, delay: delay * i });
    };
  },

  _loopFire() {
    if (this.smallFlame) {
      TweenMax.to(this.smallFlame, 0.4, {scaleX: 0.95, y: '-12px', x: '3%', repeat: -1, yoyo: true, ease: Power0.easeNone});
      TweenMax.to(this.largeFlame, 0.4, {scaleX:0.9, y: '-10px', x: '6%', repeat: -1, yoyo: true, ease: Power0.easeNone});
    }
  },

  _loopStar() {
    if (this.shootingStar) {
      let strokeLength = this.shootingStar.getTotalLength();
      this.shootingStar.style.strokeDasharray =  (strokeLength / 3) + ' ' + (strokeLength * 2);
      this.shootingStar.style.strokeDashoffset =  -strokeLength;

      TweenMax.to(this.shootingStar, 1.3, {strokeDashoffset: -strokeLength * 3.5, opacity: 0.5, repeat: -1, ease: Power0.easeNone, repeatDelay: 5});
    }
  }
};

export default svg;