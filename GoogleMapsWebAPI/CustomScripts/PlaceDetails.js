function mapDetails(placeId, attractionId, userRequest) {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -33.866, lng: 151.196 },
        zoom: 15
    });

    var infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);

    if (placeId == null)
        placeId = 'ChIJN1t_tDeuEmsRUsoyG83frY4';

    service.getDetails({
        placeId: placeId
    }, function (place, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            
            var lattidue = place.geometry.location.lat();
            var longtitude = place.geometry.location.lng();

            //placeDetails
            var result = [];
            result.address_components = [];
            result.adr_address = place.adr_address;
            result.formatted_address = place.formatted_address;
            result.formatted_phone_number = place.formatted_phone_number;
            if (place.geometry != null) {
                result.geometry = [];
                if (place.geometry.location != null)
                {
                    result.geometry.location = [];
                    result.geometry.location.lat = place.geometry.location.lat();
                    result.geometry.location.lng = place.geometry.location.lng();
                }                
            }            
            result.icon = place.icon;
            result.id = place.id;
            result.international_phone_number = place.international_phone_number;
            result.name = place.name;
            if (place.opening_hours != null) {
                result.opening_hours = [];
                result.opening_hours.open_now = place.opening_hours.open_now;

                if (place.opening_hours.periods != null) {
                    result.opening_hours.periods = [];
                    result.opening_hours.periods.open = [];
                    result.opening_hours.periods.closeStatus = [];
                    $.each(place.opening_hours.periods, function (_key, _value) {
                        if (_value["close"] != null) {
                            $.each(_value["close"], function (_subKey, _subValue) {
                                var close = [];
                                close.day = _subValue["day"];
                                close.time = _subValue["time"];
                                result.opening_hours.periods.closeStatus.push(close);
                            });
                        }

                        if (_value["open"] != null) {
                            $.each(_value["open"], function (_subKey, _subValue) {
                                var open = [];
                                open.day = _subValue["day"];
                                open.time = _subValue["time"];
                                result.opening_hours.periods.open.push(close);
                            });
                        }


                        
                    });                    
                }

                if (place.opening_hours.weekday_text != null) {
                    result.opening_hours.weekday_text = [];
                    $.each(place.opening_hours.weekday_text, function (_key, _value) {
                        result.opening_hours.weekday_text.push(_value);
                    });
                }
            }

            if (place.photos != null) {
                result.photos = [];

                $.each(place.photos, function (_key, _value) {
                    var photo = [];
                    photo.height = _value["height"];
                    photo.html_attributions = [];
                    $.each(_value.html_attributions, function (_subkey, _subvalue) {
                        photo.html_attributions.push(_subvalue);
                    });
                    photo.width = _value.width;                    
                    result.photos.push(photo);
                });
                               
            }

            result.place_id = place.place_id;
            result.rating=place.rating;
            result.reference=place.reference;
            if(place.reviews!=null)
            {
                result.reviews = [];
                
                $.each(place.reviews, function (_key, _value) {
                    reviews = [];
                    if (_value["aspects"] != null) {
                        reviews.aspects = [];
                        $.each(_value["aspects"], function (_subkey, _subvalue) {
                            var aspects = [];
                            aspects.rating = _subvalue["rating"];
                            aspects.type = _subvalue["type"];
                            reviews.aspects.push(aspects);
                        });                        
                    }
                    reviews.author_name = _value["author_name"];
                    reviews.author_url = _value["author_url"];
                    reviews.language = _value["language"];
                    reviews.rating = _value["rating"];
                    reviews.text = _value["text"];
                    result.reviews.push(reviews);
                });
                
            }
            
            result.scope = place.scope;
            if(place.types!=null)
            {
                result.types=[];
                $.each(place.types,function(_key,_value){
                    result.types.push(_value);
                });
                
            }
            
            result.url = place.url;
            result.utc_offset = place.utc_offset;
            result.vicinity = place.vicinity;
            result.website = place.website;
            
            

            result.address_components.types = [];
            $.each(place.address_components.types, function (typesKey, typesValue) {
                result.address_components.types.push(typesValue);
            });


            var marker = new google.maps.Marker({
                map: map,
                position: place.geometry.location,

            });            
        }
    });
}


function GetDistanceBetweenTwoPoints(sourceAttractionId, sourceText, destinationAttractionId, destinationText) {
    //GetPlaceDistance(sourceLatitue, sourceLongtitude, destinationLatitude, destinationLongtitude);
    //var source = "BAPS Shri Swaminarayan Mandir, Claireville Drive, Toronto, ON, Canada";
    //var destination = ""
    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix({
        origins: [sourceText],
        destinations: [destinationText],
        travelMode: 'DRIVING',
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false
    }, function (response, status) {
        if (status !== 'OK') {
            alert('Error was: ' + status);
        } else {
            
            var originList = response.originAddresses;
            var destinationList = response.destinationAddresses;
            //var outputDiv = document.getElementById('output');
            //outputDiv.innerHTML = '';
            //deleteMarkers(markersArray);

            var showGeocodedAddressOnMap = function (asDestination) {
                var icon = asDestination ? destinationIcon : originIcon;
                return function (results, status) {
                    if (status === 'OK') {
                        
                        
                    } else {
                        alert('Geocode was not successful due to: ' + status);
                    }
                };
            };
        }
    });
}


//Get address information
function GetAddressInformation(attractionId, address) {
    $.ajax({
        type: "GET",
        url: googleAPI + "/geocode/json",
        dataType: "json",
        data: { address: address, key: googleAPIKey },
        beforeSend: function () {
            //$(".blockPage").show();
        },
        success: function (data) {

            address = [];

            $.each(data, function (addressKey, addressValue) {
                if (addressKey == "results") {
                    $.each(addressValue, function (resultKey, resultValue) {
                       
                        item = [];
                        item.data = resultValue["place_id"];
                        
                        item.value = resultValue["formatted_address"];
                        
                        //address.push(item);

                        
                        GetingPlaceDetails();
                                                
                    });
                }
            });      
        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {
            $(".blockPage").hide();
        }
    });
}


function GetingPlaceDetails() {
    $.ajax({
        type: "GET",
        url: "http://localhost:63939/GoogleMaps/UpdateSearchInformation",
        dataType: "json",        
        beforeSend: function () {
            //$(".blockPage").show();
        },
        success: function (data) {

            
        },
        error: function (result) {
            alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
        },
        complete: function () {
            $(".blockPage").hide();
        }
    });
}
