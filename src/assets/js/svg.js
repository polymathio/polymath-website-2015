import $ from 'jquery';

let svg = {
  init() {
    this.cacheDom();
    this.start();
  },

  cacheDom() {
    this.design = '#svg--design';
  },

  start() {
    this._drawSVG(this.design, 1, 0.07, 0);
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
  }
};

export default svg;