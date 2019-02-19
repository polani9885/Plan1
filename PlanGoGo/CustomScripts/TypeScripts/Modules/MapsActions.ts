import {Error} from "../Modules/Error";
import {GlobalVaraibles} from "../Common/GlobalVaraibles";

export class MapsActions {

    public errorParameters: any = {};

    

    public addMarderk(data: any, googleMaps:any,isTravelStep:boolean) {
        
        try {
            let markInfo: any;
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
            } else {
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

                } else {
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
        } catch (e) {
            MapsActions.prototype.errorParameters = {};
            MapsActions.prototype.errorParameters.data = JSON.stringify(data);
            Error.prototype.logError("MapsActions", "addMarderk", MapsActions.prototype.errorParameters, e);
        }
    }

    public writeTextOnMap(data: any, googleMaps: any) {
        try {
            googleMaps.drawOverlay({
                lat: data.lat,
                lng: data.lng,
                content: "<div class='mapText'>" + data.textContent + "</div>"
            });

        } catch (e) {
            MapsActions.prototype.errorParameters = {};
            MapsActions.prototype.errorParameters.data = JSON.stringify(data);
            Error.prototype.logError("MapsActions", "writeTextOnMap", MapsActions.prototype.errorParameters, e);
        }
    }
}