import $ from 'jquery';

let svg = {
  init() {
    this.cacheDom();
    this.start();
  },

  cacheDom() {
    this.design = '#svg--design';
    this.largeFlame = $('#svg--deploy .fire1');
    this.smallFlame = $('#svg--deploy .fire2');
  },

  start() {
    this._drawSVG(this.design, 1, 0.07, 0);
    this._loopFire();
  },

  _drawSVG(svg, transition, delay, timeout) {
    var holder = [];
    var pathCount = $(svg + " path").length;

    for (var i = 0; i < pathCount; i++) {
      holder[i] = document.querySelector(svg + ' path:nth-child(' + (i + 1) + ')');

      var strokeLength = holder[i].getTotalLength();
      
      holder[i].style.strokeDasharray =  strokeLength + ' ' + strokeLength;
      holder[i].style.strokeDashoffset =  -strokeLength;

      TweenMax.to(holder[i], transition, { strokeDashoffset: -strokeLength * 2, ease: Power2.easeOut, delay: delay * i });
    };
  },

  _loopFire() {
    //yoyo
    
    TweenMax.to(this.smallFlame, 0.4, {scaleX: 0.95, y: '-12px', x: '3%', repeat: -1, yoyo: true, ease: Power0.easeNone});
    TweenMax.to(this.largeFlame, 0.4, {scaleX:0.9, y: '-10px', x: '6%', repeat: -1, yoyo: true, ease: Power0.easeNone});
  }
};

export default svg;