import terser from '@rollup/plugin-terser';
import pkg from './package.json';

const banner = `/*!
 * leaflet-infowms v${pkg.version} by Luis Bello <luisbello30@gmail.com> (https://about.me/luisbello30)
 * Source and issue tracking: https://github.com/luisbello30/Leaflet.InfoWMS
 *
 * You can create a URL with WMS request data "GetFeatureInfo" about a map image coordinate and get it from a callback
 *
 * Based on and inspired by L.TileLayer.BetterWMS.js (https://gist.github.com/rclark/6908938)
 * by Ryan Clark (rclark) https://github.com/rclark
 * Thank you Ryan for creating and sharing it, many of us have used it for a long time.
 *
 * MIT License
 */`;

export default [{
    input: pkg.source,
    output: [
        {
            file: pkg.main,
            format: 'umd',
            name: 'L.TileLayer.InfoWMS',
            banner,
            sourcemap: true,
            esModule: false,
            globals: { leaflet: 'L' },
        },
        {
            file: pkg.module,
            format: 'es',
            banner,
            sourcemap: true,
        },
    ],
    external: ['leaflet'],
    plugins: [terser()]
}];
