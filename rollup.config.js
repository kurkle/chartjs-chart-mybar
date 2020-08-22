/* eslint-disable import/no-commonjs */

const babel = require('rollup-plugin-babel');
const {nodeResolve} = require('@rollup/plugin-node-resolve');
const terser = require('rollup-plugin-terser').terser;
const pkg = require('./package.json');
const chartjs = require('rollup-plugin-chartjs-globals');

const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * ${pkg.homepage}
 * (c) ${(new Date(process.env.SOURCE_DATE_EPOCH ? (process.env.SOURCE_DATE_EPOCH * 1000) : new Date().getTime())).getFullYear()} ${pkg.author}
 * Released under the ${pkg.license} license
 */`;

module.exports = [
	{
		input: 'src/index.js',
		output: {
			file: `dist/${pkg.name}.js`,
			banner,
			format: 'umd',
			indent: false
		},
		plugins: [
			chartjs(),
			nodeResolve(),
			babel(),
		],
		external: (e) => e === 'chart.js' || e.startsWith('chart.js/'),
	},
	{
		input: 'src/index.js',
		output: {
			file: `dist/${pkg.name}.min.js`,
			format: 'umd',
			indent: false
		},
		plugins: [
			chartjs(),
			nodeResolve(),
			babel(),
			terser({
				output: {
					preamble: banner
				}
			})
		],
		external: (e) => e === 'chart.js' || e.startsWith('chart.js/'),
	},
	{
		input: 'src/index.esm.js',
		output: {
			file: `dist/${pkg.name}.esm.js`,
			banner,
			format: 'esm',
			indent: false,
			globals: {
				'chart.js': 'Chart'
			}
		},
		plugins: [
			nodeResolve()
		],
		external: (e) => e === 'chart.js' || e.startsWith('chart.js/'),
	}
];
