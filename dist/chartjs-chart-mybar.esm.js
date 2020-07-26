/*!
 * chartjs-chart-mybar v0.1.0
 * https://github.com/kurkle/chartjs-chart-mybar#readme
 * (c) 2020 Jukka Kurkela
 * Released under the MIT license
 */
import { BarController } from 'chart.js';
import { color } from 'chart.js/helpers/color';
import { requestAnimFrame } from 'chart.js/helpers/extras';

class MyBarController extends BarController {
}

MyBarController.id = 'myBar';
MyBarController.defaults = BarController.defaults;
MyBarController.color = color;
MyBarController.raf = requestAnimFrame;

export default MyBarController;
