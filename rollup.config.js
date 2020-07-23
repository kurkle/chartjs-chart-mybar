/* eslint-disable import/no-commonjs */
/* eslint-env es6 */

const babel = require('rollup-plugin-babel');
const resolve = require('@rollup/plugin-node-resolve');
const terser = require('rollup-plugin-terser').terser;
const pkg = require('./package.json');

const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * ${pkg.homepage}
 * (c) ${(new Date(process.env.SOURCE_DATE_EPOCH ? (process.env.SOURCE_DATE_EPOCH * 1000) : new Date().getTime())).getFullYear()} ${pkg.author}
 * Released under the ${pkg.license} license
 */`;

 function globals(id) {

 }

module.exports = [
	{
		input: 'src/index.js',
		output: {
			file: `dist/${pkg.name}.js`,
			banner,
			format: 'umd',
			indent: false,
			globals: (id) =>
				id === 'chart.js'
					? 'Chart'
					: id.startsWith('chart.js/helpers/')
						? ['core', 'color', 'extras'].includes(id.substr(17))
							? 'Chart.helpers'
							: 'Chart.helpers.' + id.substr(17)
						: undefined,
		},
		plugins: [
			resolve(),
			babel(),
		],
		external: (e) => e === 'chart.js' || e.startsWith('chart.js/'),
	},
	{
		input: 'src/index.js',
		output: {
			file: `dist/${pkg.name}.min.js`,
			format: 'umd',
			indent: false,
			globals: (id) =>
				id === 'chart.js'
					? 'Chart'
					: id.startsWith('chart.js/helpers/')
						? ['core', 'color', 'extras'].includes(id.substr(17))
							? 'Chart.helpers'
							: 'Chart.helpers.' + id.substr(17)
						: undefined,
		},
		plugins: [
			resolve(),
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
			resolve()
		],
		external: (e) => e === 'chart.js' || e.startsWith('chart.js/'),
	}
];
