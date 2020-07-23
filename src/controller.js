import {BarController} from 'chart.js';
import {color} from 'chart.js/helpers/color';
import {requestAnimFrame} from 'chart.js/helpers/extras';
export default class MyBarController extends BarController {
}

MyBarController.id = 'myBar';
MyBarController.defaults = BarController.defaults;
MyBarController.color = color;
MyBarController.raf = requestAnimFrame;
