"use strict";
exports.__esModule = true;
var Error_1 = require("../Modules/Error");
var MapsActions = /** @class */ (function () {
    function MapsActions() {
        this.errorParameters = {};
    }
    MapsActions.prototype.addMarderk = function (data, googleMaps, isTravelStep) {
        try {
            var markInfo = void 0;
            if (isTravelStep) {
                markInfo =
                    googleMaps.addMarker({
                        lat: data.lat,
                        lng: data.lng,
                        title: data.title,
                        icon: {
                            path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                            scale: 5,
                            strokeColor: "#FFA500",
                            fillOpacity: 0.8
                        },
                        infoWindow: {
                            content: data.content
                        }
                    });
            }
            else {
                if (data.IsNearLocation) {
                    markInfo =
                        googleMaps.addMarker({
                            lat: data.lat,
                            lng: data.lng,
                            title: data.title,
                            icon: {
                                path: google.maps.SymbolPath.CIRCLE,
                                scale: 5,
                                strokeColor: "#32CD32",
                                fillOpacity: 0.8
                            },
                            infoWindow: {
                                content: data.content
                            }
                        });
                }
                else {
                    markInfo =
                        googleMaps.addMarker({
                            lat: data.lat,
                            lng: data.lng,
                            title: data.title,
                            label: data.label,
                            infoWindow: {
                                content: data.content
                            }
                        });
                }
            }
            return markInfo;
        }
        catch (e) {
            MapsActions.prototype.errorParameters = {};
            MapsActions.prototype.errorParameters.data = JSON.stringify(data);
            Error_1.Error.prototype.logError("MapsActions", "addMarderk", MapsActions.prototype.errorParameters, e);
        }
    };
    MapsActions.prototype.writeTextOnMap = function (data, googleMaps) {
        try {
            googleMaps.drawOverlay({
                lat: data.lat,
                lng: data.lng,
                content: "<div class='mapText'>" + data.textContent + "</div>"
            });
        }
        catch (e) {
            MapsActions.prototype.errorParameters = {};
            MapsActions.prototype.errorParameters.data = JSON.stringify(data);
            Error_1.Error.prototype.logError("MapsActions", "writeTextOnMap", MapsActions.prototype.errorParameters, e);
        }
    };
    return MapsActions;
}());
exports.MapsActions = MapsActions;
