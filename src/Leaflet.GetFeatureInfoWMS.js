L.TileLayer.GetFeatureInfoWMS = L.TileLayer.WMS.extend({

    getFeatureParam: {
        // eslint-disable-next-line camelcase
        feature_count: 1,
        srs: 'EPSG:4326',
        // eslint-disable-next-line camelcase
        info_format: 'application/json',
    },

    initialize(url, options) {
        if (options.callBack) {
            this._callBack = options.callBack;
            delete options.callBack;
        }

        for (const i in this.getFeatureInfo) {
            if (i in options) {
                this.getFeatureInfo[i] = options[i];
            }
        }

        if ('cql_filter' in options) {
            // eslint-disable-next-line camelcase
            this.getFeatureInfo.cql_filter = options.cql_filter;
        }

        if ('propertyName' in options) {
            this.getFeatureInfo.propertyName = options.propertyName;
        }

        L.Util.setOptions(this, this.getFeatureParam);
        L.TileLayer.WMS.prototype.initialize.call(this, url, options);

    },

    onAdd(map) {
        L.TileLayer.WMS.prototype.onAdd.call(this, map);
        map.on('click', this.getFeatureInfo, this);
    },

    onRemove(map) {
        L.TileLayer.WMS.prototype.onRemove.call(this, map);
        map.off('click', this.getFeatureInfo, this);
    },

    getFeatureInfo(evt) {
        const point = this._map.latLngToContainerPoint(evt.latlng);
        const lPoint = L.point(point.x, point.y, true);
        const size = this._map.getSize();

        const infoParams = {
            request: 'GetFeatureInfo',
            // eslint-disable-next-line camelcase
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

        const url = this._url + L.Util.getParamString(params, this._url, false);

        if (this._callBack) {
            this._callBack(url);
        }
    }
});

L.tileLayer.getFeatureInfoWMS = function (url, options) {
    return new L.TileLayer.GetFeatureInfoWMS(url, options);
};
