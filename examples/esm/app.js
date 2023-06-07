import { Map } from 'leaflet';
import { TileLayer } from 'leaflet-infowms';
import 'leaflet/dist/leaflet.css';

const map = new Map('mapa');
const osmUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const osm = new TileLayer(osmUrl, {
    attribution:
        ' <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
});

const nexrad = new TileLayer.InfoWMS('https://public-mapservice.lf.goteborg.se/geoserver/LF_Externwebb/wms?', {
    layers: 'Utrustning',
    format: 'image/png',
    transparent: true,
    attribution: 'Public Geoserver LF Goteborg City',
    feature_count: 2,
    callBack
});

function callBack(url) {
    console.log(url)
}

map.addLayer(osm)
    .addLayer(nexrad)
    .setView([57.76, 11.96], 12);

/*
callBack

URL: https://public-mapservice.lf.goteborg.se/geoserver/LF_Externwebb/wms?&service=WMS&request=GetFeatureInfo&layers=Utrustning&styles=&format=image%2Fpng&transparent=true&version=1.1.1&width=800&height=600&srs=EPSG%3A4326&feature_count=2&info_format=application%2Fjson&attribution=Public%20Geoserver%20LF%20Goteborg%20City&query_layers=Utrustning&bbox=11.822662353515625%2C57.70506439429962%2C12.097320556640627%2C57.814955058421184&x=459&y=34
JSON:

{
    "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "id": "Utrustning.2505",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        11.97862382,
                        57.80930594
                    ]
                },
                "geometry_name": "the_geom",
                "properties": {
                    "Arealskiss": "79713",
                    "Ytnummer": 0,
                    "Kund": "LF",
                    "Enhet": "407340",
                    "Skötselkat": "Egen regi",
                    "Typ": "",
                    "Antal": 1,
                    "Städning": "",
                    "Marktyp_1": "Dagvattenbrunn",
                    "PON_distri": "3. Norra Hisingen",
                    "Uppdaterad": "",
                    "Kommentar": "Från Utrustningsskiktet",
                    "MI_PRINX": 2848
                }
            },
            {
                "type": "Feature",
                "id": "Utrustning.2506",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        11.9779107,
                        57.80931955
                    ]
                },
                "geometry_name": "the_geom",
                "properties": {
                    "Arealskiss": "79713",
                    "Ytnummer": 0,
                    "Kund": "LF",
                    "Enhet": "407340",
                    "Skötselkat": "Egen regi",
                    "Typ": "",
                    "Antal": 1,
                    "Städning": "",
                    "Marktyp_1": "Dagvattenbrunn",
                    "PON_distri": "3. Norra Hisingen",
                    "Uppdaterad": "",
                    "Kommentar": "Från Utrustningsskiktet",
                    "MI_PRINX": 2849
                }
            }
        ],
            "totalFeatures": "unknown",
                "numberReturned": 2,
                    "timeStamp": "2023-06-07T14:49:33.676Z",
                        "crs": {
        "type": "name",
            "properties": {
            "name": "urn:ogc:def:crs:EPSG::4326"
        }
    }
} */