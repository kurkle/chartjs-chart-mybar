/*!
 * chartjs-chart-mybar v0.1.0
 * https://github.com/kurkle/chartjs-chart-mybar#readme
 * (c) 2020 Jukka Kurkela
 * Released under the MIT license
 */
(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('chart.js'), require('chart.js/helpers/color'), require('chart.js/helpers/extras')) :
typeof define === 'function' && define.amd ? define(['chart.js', 'chart.js/helpers/color', 'chart.js/helpers/extras'], factory) :
(global = global || self, factory(global.Chart, global.Chart.helpers, global.Chart.helpers));
}(this, function (Chart, color, extras) { 'use strict';

var Chart__default = 'default' in Chart ? Chart['default'] : Chart;

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var MyBarController = /*#__PURE__*/function (_BarController) {
  _inheritsLoose(MyBarController, _BarController);

  function MyBarController() {
    return _BarController.apply(this, arguments) || this;
  }

  return MyBarController;
}(Chart.BarController);
MyBarController.id = 'myBar';
MyBarController.defaults = Chart.BarController.defaults;
MyBarController.color = color.color;
MyBarController.raf = extras.requestAnimFrame;

Chart__default.register(MyBarController);

}));
