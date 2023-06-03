const map = L.map('map1').setView([57.76, 11.96], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution:
    ' <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const callBack = async function (url) {
    await fetch(url)
        .then(response => response.json())
        .then((response) => {
            console.log(response);
        });
};

L.tileLayer.getFeatureInfoWMS('https://public-mapservice.lf.goteborg.se/geoserver/LF_Externwebb/wms?', {
    layers: 'Utrustning',
    format: 'image/png',
    transparent: true,
    attribution: 'Public Geoserver LF Goteborg City',
    // eslint-disable-next-line camelcase
    feature_count: 2,
    callBack
}).addTo(map);