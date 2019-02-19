function AddMarderk(data) {
    if (data.IsNearLocation) {
        var markInfo =
            googleMaps.addMarker({
                lat: data.lat,
                lng: data.lng,
                title: data.title,
                label: data.label,
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 5,
                    strokeColor: "#FF0000",
                    fillOpacity: 0.8
                },
                infoWindow: {
                    content: data.content
                }
            });

    } else {
        var markInfo =
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
 
    return markInfo;
}