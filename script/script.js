/* global L */

const map = L.map('map1').setView([40.404610346549035, -4.25039310600574], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution:
    ' <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
