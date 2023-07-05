# Leaflet.InfoWMS

You can create a URL with "GetFeatureInfo" WMS request data about a map image coordinate and get it from the click event

## Requirement

-   [Lealfet](https://leafletjs.com/)

## Leaflet Versión

Test on leaflet 1.7.1

## Demo

[Demo](https://luisbello30.github.io/Leaflet.InfoWMS)

## Installing

```bash
npm install leaflet-infowms
```

or using Yarn

```bash
yarn add leaflet-infowms
```

## Getting started

```javascript

import { Map } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { TileLayer } from 'leaflet-infowms';

const map = new Map('mapa');
const baseLayerUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const baseLayer = new TileLayer(baseLayerUrl, {
    attribution:
        ' <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
});

const wmsLayerUrl = 'https://public-mapservice.lf.goteborg.se/geoserver/LF_Externwebb/wms?'
const wmsLayer = new TileLayer.InfoWMS(wmsLayerUrl, {
        layers: 'Utrustning',
        format: 'image/png',
        transparent: true,
        attribution: 'Public Geoserver LF Goteborg City',
        feature_count: 1
    }
);

wmsLayer.on('click', function (e) {
    console.log(e);
    fetch(e.url)
        .then((response) => response.json() )
        .then((response) => {
            console.log(response);
        });
});

```

## API reference

TODO
