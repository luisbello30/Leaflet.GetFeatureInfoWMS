import { TileLayer, tileLayer, Util, Point } from 'leaflet';

const TileLayerInfoWMS = TileLayer.WMS.extend({
    getFeatureParam: {
        feature_count: 1,
        srs: 'EPSG:4326',
        info_format: 'application/json',
    },

    initialize(url, options) {
        for (const i in this.getFeatureInfo) {
            if (i in options) {
                this.getFeatureInfo[i] = options[i];
            }
        }

        if ('cql_filter' in options) {
            this.getFeatureInfo.cql_filter = options.cql_filter;
        }

        if ('propertyName' in options) {
            this.getFeatureInfo.propertyName = options.propertyName;
        }

        Util.setOptions(this, this.getFeatureParam);
        TileLayer.WMS.prototype.initialize.call(this, url, options);
    },

    onAdd(map) {
        TileLayer.WMS.prototype.onAdd.call(this, map);
        map.on('click', this.getFeatureInfo, this);
    },

    onRemove(map) {
        TileLayer.WMS.prototype.onRemove.call(this, map);
        map.off('click', this.getFeatureInfo, this);
    },

    getFeatureInfo(evt) {
        const point = this._map.latLngToContainerPoint(evt.latlng);
        const lPoint = new Point(point.x, point.y, true);
        const size = this._map.getSize();

        const infoParams = {
            request: 'GetFeatureInfo',
            query_layers: this.wmsParams.layers,
            height: size.y,
            width: size.x,
            bbox: this._map.getBounds().toBBoxString(),
        };

        const params = {
            ...this.wmsParams,
            ...this.options,
            ...infoParams,
        };

        params[params.version === '1.3.0' ? 'i' : 'x'] = lPoint.x;
        params[params.version === '1.3.0' ? 'j' : 'y'] = lPoint.y;

        const url = this._url + Util.getParamString(params, this._url, false);

        this.fire('click', {
            url,
            params,
            latlng: evt.latlng
        });
    }
});

export function tileLayerInfoWMS(url, options) {
    return new TileLayerInfoWMS(url, options);
}

TileLayer.InfoWMS = TileLayerInfoWMS;
tileLayer.infoWMS = tileLayerInfoWMS;

export { TileLayer, tileLayer };
