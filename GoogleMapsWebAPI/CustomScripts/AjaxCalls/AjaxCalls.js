
//Get address information
function GetAddressInformation(address, attractionId, userRequest) {
    
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
                        mapDetails(resultValue["place_id"], attractionId, userRequest);
                        return false;
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

