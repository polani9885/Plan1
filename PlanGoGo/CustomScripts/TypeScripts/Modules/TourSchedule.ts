import {Error} from "../Modules/Error";
import {BaseAjaxCall} from "../Common/BaseAjaxCall";
import {Constants} from "../Common/Constants";
import {GlobalVaraibles} from "../Common/GlobalVaraibles";

export class TourSchedule {

    public errorParameters: any = {};
    public parameters: any = {};

    //Public get tour informaiton on tour id
    public getTourInformationOnTripId(scope:any) {
        try {


            BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourSchedule","getTourInformationOnTripId","GET",
                Constants.localUrl + 'UserControls/GetTourInformationOnTripId',
                scope,
                this.getTourInformationOnTripIdResponse
            );
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error.prototype.logError("TourSchedule", "getTourInformationOnTripId", TourSchedule.prototype.errorParameters, e);
        }
    }

    public getTourInformationOnTripIdResponse(data: any, success: number, scope: any) {
        try {
            //1 = success
            if (success === 1) {
                scope.plannedTours(data);
            }
            //2 = Completed
            if (success === 2) {
                $(".blockPage").hide();
            }
            //0 = Error
            if (success === 0) {
               

                $(".blockPage").hide();
               
            }
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error.prototype.logError("TourSchedule", "getTourInformationOnTripIdResponse", TourSchedule.prototype.errorParameters, e);
        }
    }

    //Getting the user vising city list
    public userGetCityList(scope:any) {
        try {


            BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourSchedule", "userGetCityList","GET",
                Constants.localUrl + 'UserControls/User_GetCityList',
                scope,
                this.userGetCityListResponse
            );
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error.prototype.logError("TourSchedule", "userGetCityList", TourSchedule.prototype.errorParameters, e);
        }
    }

    public userGetCityListResponse(data: any, success: number, scope: any) {
        try {
            //1 = success
            if (success === 1) {
                scope.userGetCityListBind(data);
                
            }
            //2 = Completed
            if (success === 2) {
                $(".blockPage").hide();
            }
            //0 = Error
            if (success === 0) {
                

                $(".blockPage").hide();
                
            }
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error.prototype.logError("TourSchedule", "userGetCityListResponse", TourSchedule.prototype.errorParameters, e);
        }
    }

    public userInsertCategoryInformation(scope:any) {
        try {
            TourSchedule.prototype.parameters = {};

            let selectedCategory:any = [];
            $.each(scope.selectedCategoryList,
                function (key, value) {
                    let item:any = {};
                    item.CategoryId = value.GoogleTypeID;
                    item.CategoryName = value.TypeName;
                    selectedCategory.push(item);
                });

            TourSchedule.prototype.parameters.category = selectedCategory;

            BaseAjaxCall.prototype.ajaxWithCallbackValue("TourSchedule", "userInsertCategoryInformation","GET",
                Constants.localUrl + 'UserControls/User_InsertCategoryInformation',
                TourSchedule.prototype.parameters,
                scope,
                this.userInsertCategoryInformationResponse
            );
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error.prototype.logError("TourSchedule", "userInsertCategoryInformation", TourSchedule.prototype.errorParameters, e);
        }
    }

    public userInsertCategoryInformationResponse(data: any, success: number, scope: any) {
        try {
            //1 = success
            if (success === 1) {

                scope.$apply(function () {
                    scope.countryId = data.CountryId;
                });
                TourSchedule.prototype.userGetCityList(scope);
            }
            //2 = Completed
            if (success === 2) {
                $(".blockPage").hide();
            }
            //0 = Error
            if (success === 0) {
                

                $(".blockPage").hide();
                
            }
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error.prototype.logError("TourSchedule", "userInsertCategoryInformationResponse", TourSchedule.prototype.errorParameters, e);
        }
        
    }

    //Get trip attractions information
    public userUserTripGetAttractions(scope: any) {
        try {

            BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourSchedule", "userUserTripGetAttractions","GET",
                Constants.localUrl + 'UserControls/User_UserTripGetAttractions',
                scope,
                this.userUserTripGetAttractionsResponse
            );
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error.prototype.logError("TourSchedule", "userUserTripGetAttractions", TourSchedule.prototype.errorParameters, e);
        }
    }

    public userUserTripGetAttractionsResponse(data: any, success: number, scope: any) {
        try {
            //1 = success
            if (success === 1) {
                scope.userTripAttractionInfo(data);}
            //2 = Completed
            if (success === 2) {
                
            }
            //0 = Error
            if (success === 0) {
                
            }
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error.prototype.logError("TourSchedule", "userUserTripGetAttractionsResponse", TourSchedule.prototype.errorParameters, e);
        }

    }

    //Getting trip stored attraction information
    public userGetUserStoredAttractinInfo(scope: any) {
        try {
            
            BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourSchedule", "userGetUserStoredAttractinInfo","GET",
                Constants.localUrl + 'UserControls/User_GetUserStoredAttractinInfo',
                scope,
                this.userGetUserStoredAttractinInfoResponse
            );
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error.prototype.logError("TourSchedule", "userGetUserStoredAttractinInfo", TourSchedule.prototype.errorParameters, e);
        }
    }

    public userGetUserStoredAttractinInfoResponse(data: any, success: number, scope: any) {
        try {
            
            //1 = success
            if (success === 1) {
                
                scope.attractionInformationRendaring(data);
            }
            //2 = Completed
            if (success === 2) {
                
            }
            //0 = Error
            if (success === 0) {
               
            }
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error.prototype.logError("TourSchedule", "userUserTripGetAttractionsResponse", TourSchedule.prototype.errorParameters, e);
        }

    }

    //Trip requested breaks
    public userRequestedBreaks(scope: any) {
        try {

            BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourSchedule", "userRequestedBreaks","GET",
                Constants.localUrl + 'UserControls/User_RequestedBreaks',
                scope,
                this.userRequestedBreaksResponse
            );
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error.prototype.logError("TourSchedule", "userRequestedBreaks", TourSchedule.prototype.errorParameters, e);
        }
    }
    public userRequestedBreaksResponse(data: any, success: number, scope: any) {
        try {
            //1 = success
            if (success === 1) {
                scope.requestedBreaks(data);
            }
            //2 = Completed
            if (success === 2) {

            }
            //0 = Error
            if (success === 0) {
               
            }
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error.prototype.logError("TourSchedule", "userRequestedBreaksResponse", TourSchedule.prototype.errorParameters, e);
        }
    }

    //Trip build information
    public userUserTripBuildStatus(scope: any) {
        try {

            BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourSchedule", "userUserTripBuildStatus","GET",
                Constants.localUrl + 'UserControls/User_UserTripBuildStatus',
                scope,
                this.userUserTripBuildStatusResponse
            );
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error.prototype.logError("TourSchedule", "userUserTripBuildStatus", TourSchedule.prototype.errorParameters, e);
        }
    }

    public userUserTripBuildStatusResponse(data: any, success: number, scope: any) {
        try {
            //1 = success
            if (success === 1) {
                scope.UserTripBuildStatus = data;
            }
            //2 = Completed
            if (success === 2) {

            }
            //0 = Error
            if (success === 0) {
               
            }
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error.prototype.logError("TourSchedule", "userUserTripBuildStatusResponse", TourSchedule.prototype.errorParameters, e);
        }
    }

    //Getting attraction nearest restarunts
    public userGetNearestRestaruents(scope: any,data:any) {
        try {
            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.attractionsId = data.breakValue.attractionId;
            TourSchedule.prototype.parameters.travelModeId = data.TravelModeId;
            TourSchedule.prototype.parameters.countryId = data.countryId;
            TourSchedule.prototype.parameters.distance = data.breakValue.distance;
            TourSchedule.prototype.parameters.sourceLongitude = data.breakValue.sourceLongitude;
            TourSchedule.prototype.parameters.sourceLatitude = data.breakValue.sourceLatitude;
            TourSchedule.prototype.parameters.attractionTravelStepsId = data.breakValue.attractionTravelStepsId;

            BaseAjaxCall.prototype.ajaxWithCallbackValue("TourSchedule", "userGetNearestRestaruents","GET",
                Constants.localUrl + 'UserControls/User_GetNearestRestaruents',
                TourSchedule.prototype.parameters,
                scope,
                this.userGetNearestRestaruentsReponse
            );
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error.prototype.logError("TourSchedule", "userGetNearestRestaruents", TourSchedule.prototype.errorParameters, e);
        }
    }
    public userGetNearestRestaruentsReponse(data: any, success: number, scope: any) {
        try {
            //1 = success
            if (success === 1) {
                scope.NearLocations = data;
                scope.FilterNearLocations = data;
                scope.ExtraCategorySelectedAttractionFilter();
            }
            //2 = Completed
            if (success === 2) {

            }
            //0 = Error
            if (success === 0) {
               
            }
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error.prototype.logError("TourSchedule", "userGetNearestRestaruentsReponse", TourSchedule.prototype.errorParameters, e);
        }
    }
    //Auto Complete information
    public autoComplte(scope: any, data: any, countryId:number) {
        try {
            
            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.address = data;
            TourSchedule.prototype.parameters.countryId = countryId;
            
            BaseAjaxCall.prototype.ajaxWithCallbackValue("TourSchedule", "autoComplte","GET",
                Constants.localUrl + 'UserControls/AutoComplte',
                TourSchedule.prototype.parameters,
                scope,
                this.autoComplteResponse
            );
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error.prototype.logError("TourSchedule", "autoComplte", TourSchedule.prototype.errorParameters, e);
        }
    }
    public autoComplteResponse(data: any, success: number, scope: any) {
        try {
            //1 = success
            if (success === 1) {
                

                scope.attractionListAutoComplete = [];
                    $.each(data,
                         (attractionKey, attractionValue) =>{
                            let item:any = [];
                            item.value = attractionValue["description"];
                            item.data = attractionValue["googleSearchText"];
                            
                            scope.attractionListAutoComplete.push(item);
                        });
                    //Source Auto Complete Data
                    $('#autoStartLocation').autocomplete({
                        source: scope.attractionListAutoComplete
                    });

                    //Desitnation auto complete information
                    $('#autoDestinationLocation').autocomplete({
                        source: scope.attractionListAutoComplete
                    });

                    //Place search for adding to visit list
                    $('#placeSeachForAdding').autocomplete({
                        source: scope.attractionListAutoComplete
                    });

                //Place search for adding to visit list
                    $('#googleMapplaceSeachForAdding').autocomplete({
                    source: scope.attractionListAutoComplete
                });

                    //Source Auto Complete Data
                    $('#autoAddAttractionForBreak').autocomplete({
                        source: scope.attractionListAutoComplete
                    });
                
            }
            //2 = Completed
            if (success === 2) {

            }
            //0 = Error
            if (success === 0) {
               
            }
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error.prototype.logError("TourSchedule", "autoComplteResponse", TourSchedule.prototype.errorParameters, e);
        }
    }

    //autocomplet for the break information
    public autoComplteBreakInfo(scope: any, data: any) {
        try {
            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.address = data.address;
            TourSchedule.prototype.parameters.latitude = data.latitude;
            TourSchedule.prototype.parameters.longitude = data.longitude;
            TourSchedule.prototype.parameters.distance = data.distance;
            TourSchedule.prototype.parameters.countryId = scope.countryId;
            
            BaseAjaxCall.prototype.ajaxWithCallbackValue("TourSchedule", "autoComplteBreakInfo","GET",
                Constants.localUrl + 'UserControls/AutoComplteBreakInfo',
                TourSchedule.prototype.parameters,
                scope,
                this.autoComplteBreakInfoResponse
            );
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error.prototype.logError("TourSchedule", "autoComplte", TourSchedule.prototype.errorParameters, e);
        }
    }
    public autoComplteBreakInfoResponse(data: any, success: number, scope: any) {
        try {
            //1 = success
            if (success === 1) {
                
                let attractionListBreakAutoComplete:any = [];
                $.each(data,
                    function (attractionKey, attractionValue) {
                        let item:any = [];
                        //item.value = attractionValue["vicinity"];
                        //item.data = attractionValue["name"] + ' ' + attractionValue["vicinity"];
                        item.data = attractionValue["name"];
                        item.value = attractionValue["name"] + ' ' + attractionValue["vicinity"];
                        item.name = attractionValue["vicinity"];
                        attractionListBreakAutoComplete.push(item);
                    });
                //Source Auto Complete Data
                $('#autoAddAttractionForBreak').autocomplete({
                    source: attractionListBreakAutoComplete
                });

            }
            //2 = Completed
            if (success === 2) {

            }
            //0 = Error
            if (success === 0) {
               
            }
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error.prototype.logError("TourSchedule", "autoComplteBreakInfoResponse", TourSchedule.prototype.errorParameters, e);
        }
    }

    //Trip requirested attractions
    public userRequestedAttraction(scope: any, autoCompleteInfo: IAutoCompleteSubmit) {
        try {

            BaseAjaxCall.prototype.ajaxWithCallbackValue("TourSchedule", "userRequestedAttraction","GET",
                Constants.localUrl + 'UserControls/UserRequestedAttraction',
                autoCompleteInfo,
                scope,
                this.userRequestedAttractionResponse
            );
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error.prototype.logError("TourSchedule", "userRequestedAttraction", TourSchedule.prototype.errorParameters, e);
        }
    }
    public userRequestedAttractionResponse(data: any, success: number, scope: any) {
        try {
            //1 = success
            if (success === 1) {
                scope.updateTrouInfo();
            }
            //2 = Completed
            if (success === 2) {

            }
            //0 = Error
            if (success === 0) {
               
            }
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error.prototype.logError("TourSchedule", "userRequestedAttractionResponse", TourSchedule.prototype.errorParameters, e);
        }
    }

    //Get user tipr required order
    public getOrderOfRequest(scope: any, countryId:number) {
        try {
            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.countryId = countryId;

            BaseAjaxCall.prototype.ajaxWithCallbackValue("TourSchedule", "getOrderOfRequest","GET",
                Constants.localUrl + 'UserControls/GetOrderOfRequest',
                TourSchedule.prototype.parameters,
                scope,
                this.getOrderOfRequestResponse
            );
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error.prototype.logError("TourSchedule", "getOrderOfRequest", TourSchedule.prototype.errorParameters, e);
        }
    }
    public getOrderOfRequestResponse(data: any, success: number, scope: any) {
        try {
            //1 = success
            if (success === 1) {
                scope.getOrderOfRequest(data);
            }
            //2 = Completed
            if (success === 2) {

            }
            //0 = Error
            if (success === 0) {
               
            }
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error.prototype.logError("TourSchedule", "getOrderOfRequestResponse", TourSchedule.prototype.errorParameters, e);
        }
    }
    //insert trip required order
    public insertUserRequested(scope: any,data:any) {
        try {
            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.attractionRequestOrder = data;
            
            BaseAjaxCall.prototype.ajaxWithCallbackValueContantType("TourSchedule", "insertUserRequested","POST",
                Constants.localUrl + 'UserControls/InsertUserRequested',
                TourSchedule.prototype.parameters,
                scope,
                this.insertUserRequestedResponse
            );
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error.prototype.logError("TourSchedule", "insertUserRequested", TourSchedule.prototype.errorParameters, e);
        }
    }
    public insertUserRequestedResponse(data: any, success: number, scope: any) {
        try {
            //1 = success
            if (success === 1) {
                scope.publicGetOrderOfAttractionVisit();
            }
            //2 = Completed
            if (success === 2) {

            }
            //0 = Error
            if (success === 0) {
               
            }
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error.prototype.logError("TourSchedule", "insertUserRequestedResponse", TourSchedule.prototype.errorParameters, e);
        }
    }

    //Checking the missing distance calcuation part is dont or not
    public checkTheCalculationPartIsDone(scope: any) {
        try {
            if (scope.IsDistanceCalcuationMissing === false) {
                BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourSchedule", "checkTheCalculationPartIsDone","GET",
                    Constants.localUrl + 'UserControls/CheckTheCalculationPartIsDone',
                    scope,
                    this.checkTheCalculationPartIsDoneResponse
                );
            }
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error.prototype.logError("TourSchedule", "checkTheCalculationPartIsDone", TourSchedule.prototype.errorParameters, e);
        }
    }
    public checkTheCalculationPartIsDoneResponse(data: any, success: number, scope: any) {
        try {
            //1 = success
            if (success === 1) {
                if (data.length === 0) {
                    if (GlobalVaraibles.isFullyLoaded === false) {
                        scope.init();
                        GlobalVaraibles.isFullyLoaded = true;
                    }
                } else {
                    GlobalVaraibles.isFullyLoaded = false;
                }
            }
            //2 = Completed
            if (success === 2) {
                
            }
            //0 = Error
            if (success === 0) {
               
            }
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error.prototype.logError("TourSchedule", "checkTheCalculationPartIsDoneResponse", TourSchedule.prototype.errorParameters, e);
        }
    }
    //Adding attraction information
    public addInterestedAttractionList(scope: any, data: any) {
        try {
            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.attractionId = data;

            BaseAjaxCall.prototype.ajaxWithCallbackValue("TourSchedule", "addInterestedAttractionList","GET",
                Constants.localUrl + 'UserControls/AddInterestedAttractionList',
                TourSchedule.prototype.parameters,
                scope,
                this.addInterestedAttractionListResponse
            );

        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error.prototype.logError("TourSchedule", "addInterestedAttractionList", TourSchedule.prototype.errorParameters, e);
        }
    }

    public addInterestedAttractionListResponse(data: any, success: number, scope: any) {
        try {
            //1 = success
            if (success === 1) {
                scope.attractionInformationBinding();
            }
            //2 = Completed
            if (success === 2) {
                
            }
            //0 = Error
            if (success === 0) {
               
            }
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error.prototype.logError("TourSchedule", "addInterestedAttractionListResponse", TourSchedule.prototype.errorParameters, e);
        }
    }
    //deleting not interested attraction information
    public deleteNotInterestedAttractionList(scope: any, data: any) {
        try {
            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.attractionId = data;

            BaseAjaxCall.prototype.ajaxWithCallbackValue("TourSchedule", "deleteNotInterestedAttractionList","GET",
                Constants.localUrl + 'UserControls/DeleteNotInterestedAttractionList',
                TourSchedule.prototype.parameters,
                scope,
                this.deleteNotInterestedAttractionListResponse
            );

        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error.prototype.logError("TourSchedule", "deleteNotInterestedAttractionList", TourSchedule.prototype.errorParameters, e);
        }
    }

    public deleteNotInterestedAttractionListResponse(data: any, success: number, scope: any) {
        try {
            //1 = success
            if (success === 1) {
                scope.attractionInformationBinding();
            }
            //2 = Completed
            if (success === 2) {

            }
            //0 = Error
            if (success === 0) {
               
            }
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error.prototype.logError("TourSchedule", "deleteNotInterestedAttractionListResponse", TourSchedule.prototype.errorParameters, e);
        }
    }

    //Getting attraction travel steps information
    public getAttractionTravelStepsNearAttractionInfo(scope: any, data: any) {
        try {
            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.attractionTravelStepsId = data.attractionTravelStepsId;
            TourSchedule.prototype.parameters.countryId = data.countryId;

            let callBackValues: any = {};
            callBackValues.scope = scope;
            callBackValues.attractionTravelStepsId = data.attractionTravelStepsId;
            callBackValues.orderId = data.orderId;
           
            BaseAjaxCall.prototype.ajaxWithCallbackValue("TourSchedule", "getAttractionTravelStepsNearAttractionInfo","GET",
                Constants.localUrl + 'UserControls/GetAttractionTravelStepsNearAttractionInfo',
                TourSchedule.prototype.parameters,
                callBackValues,
                this.getAttractionTravelStepsNearAttractionInfoResponse
            );

        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error.prototype.logError("TourSchedule", "getAttractionTravelStepsNearAttractionInfo", TourSchedule.prototype.errorParameters, e);
        }
    }

    public getAttractionTravelStepsNearAttractionInfoResponse(data: any, success: number, callBackData: any) {
        try {
            //1 = success
            if (success === 1) {
                GlobalVaraibles.queCounterGetAttractionTravelStepsNearAttractionInfo--;
                //QueGetAttractionTravelStepsNearAttractionInfo(callBackData.scope);
                callBackData.scope.attractionTravelStepsNearAttractionInfoBinding(callBackData.orderId, callBackData.attractionTravelStepsId, data);
            }
            //2 = Completed
            if (success === 2) {

            }
            //0 = Error
            if (success === 0) {
                
                GlobalVaraibles.queCounterGetAttractionTravelStepsNearAttractionInfo--;

                //QueGetAttractionTravelStepsNearAttractionInfo(callBackData.scope);
                
            }
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error.prototype.logError("TourSchedule", "getAttractionTravelStepsNearAttractionInfoResponse", TourSchedule.prototype.errorParameters, e);
        }
    }
    //Get next nearest attractions
    public getAttractionsNextAttractions(scope: any, data: any) {
        try {
            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.attractionsId = data.attractionsId;
            TourSchedule.prototype.parameters.countryId = data.countryId;

            let callBackValues: any = {};
            callBackValues.scope = scope;
            callBackValues.attractionsId = data.attractionsId;

            BaseAjaxCall.prototype.ajaxWithCallbackValue("TourSchedule", "getAttractionsNextAttractions","GET",
                Constants.localUrl + 'UserControls/GetAttractionsNextAttractions',
                TourSchedule.prototype.parameters,
                callBackValues,
                this.getAttractionsNextAttractionsResponse
            );

        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error.prototype.logError("TourSchedule", "getAttractionsNextAttractions", TourSchedule.prototype.errorParameters, e);
        }
    }

    public getAttractionsNextAttractionsResponse(data: any, success: number, callBackData: any) {
        try {
            //1 = success
            if (success === 1) {
                GlobalVaraibles.queCounterGetAttractionsNextAttractions--;
                //QueGetAttractionsNextAttractions(callBackData.scope);
                callBackData.scope.getAttractionsNextAttractionsBinding(callBackData.attractionsId, data);
            }
            //2 = Completed
            if (success === 2) {

            }
            //0 = Error
            if (success === 0) {
                GlobalVaraibles.queCounterGetAttractionsNextAttractions--;
                //QueGetAttractionsNextAttractions(callBackData.scope);
               
            }
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error.prototype.logError("TourSchedule", "getAttractionsNextAttractionsResponse", TourSchedule.prototype.errorParameters, e);
        }
    }
    //Get attractions next category
    public getAttractionXCategory(scope: any, data: any) {
        try {
            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.attractionsId = data.attractionsId;
            TourSchedule.prototype.parameters.countryId = data.countryId;

            let callBackValues: any = {};
            callBackValues.scope = scope;
            callBackValues.attractionsId = data.attractionsId;

            BaseAjaxCall.prototype.ajaxWithCallbackValueContantType("TourSchedule", "getAttractionXCategory","POST",
                Constants.localUrl + 'UserControls/GetAttractionsNextAttractions',
                TourSchedule.prototype.parameters,
                callBackValues,
                this.getAttractionXCategoryResponse
            );

        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error.prototype.logError("TourSchedule", "getAttractionXCategory", TourSchedule.prototype.errorParameters, e);
        }
    }

    public getAttractionXCategoryResponse(data: any, success: number, callBackData: any) {
        try {
            //1 = success
            if (success === 1) {
                callBackData.scope.gettingAttractionXCategoryBinding(data);
                GlobalVaraibles.queCounterGetAttractionXCategory--;
                //QueGetAttractionXCategory(callBackData.scope);
            }
            //2 = Completed
            if (success === 2) {

            }
            //0 = Error
            if (success === 0) {
                GlobalVaraibles.queCounterGetAttractionXCategory--;
                //QueGetAttractionXCategory(callBackData.scope);
               
            }
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error.prototype.logError("TourSchedule", "getAttractionXCategoryResponse", TourSchedule.prototype.errorParameters, e);
        }
    }

    public getBreakInformation(scope:any) {

        try {

            BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourSchedule", "getBreakInformation", "GET",
                Constants.localUrl + 'Schedule/GetBreakInformation',
                scope,
                this.getBreakInformationResponse
            );

        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error.prototype.logError("TourSchedule", "getBreakInformation", TourSchedule.prototype.errorParameters, e);
        }
    }

    public getBreakInformationResponse(data: any, success: number, scope: any) {
        try {
            //1 = success
            if (success === 1) {
                scope.getBreakInformationBind(data);
            }
            //2 = Completed
            if (success === 2) {

            }
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error.prototype.logError("TourSchedule", "getBreakInformationResponse", TourSchedule.prototype.errorParameters, e);
        }
    }

    public getExtraCategoryList(scope:any) {

        try {

            BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourSchedule", "getExtraCategoryList", "GET",
                Constants.localUrl + 'Schedule/GetExtraCategoryList',
                scope,
                this.getExtraCategoryListResponse
            );

        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error.prototype.logError("TourSchedule", "getExtraCategoryList", TourSchedule.prototype.errorParameters, e);
        }

        
    }

    public getExtraCategoryListResponse(data: any, success: number, scope: any) {
        try {
            //1 = success
            if (success === 1) {
                scope.getExtraCategoryListBind(data);
            }
            //2 = Completed
            if (success === 2) {

            }
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error.prototype.logError("TourSchedule", "getExtraCategoryListResponse", TourSchedule.prototype.errorParameters, e);
        }
    }

    public getMasterCategory(scope: any) {

        try {

            BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourSchedule", "getMasterCategory", "GET",
                Constants.localUrl + 'Schedule/GetMasterCategory',
                scope,
                this.getMasterCategoryResponse
            );

        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error.prototype.logError("TourSchedule", "getMasterCategory", TourSchedule.prototype.errorParameters, e);
        }
    }

    public getMasterCategoryResponse(data: any, success: number, scope: any) {
        try {
            //1 = success
            if (success === 1) {
                scope.getMasterCategoryResponseBind(data);
            }
            //2 = Completed
            if (success === 2) {

            }
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error.prototype.logError("TourSchedule", "getMasterCategoryResponse", TourSchedule.prototype.errorParameters, e);
        }
    }

    public getCategoryList(scope:any) {

        try {

            BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourSchedule", "getCategoryList", "GET",
                Constants.localUrl + 'Schedule/GetCategoryList',
                scope,
                this.getCategoryListResponse
            );

        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            Error.prototype.logError("TourSchedule", "getCategoryList", TourSchedule.prototype.errorParameters, e);
        }
        
    }

    public getCategoryListResponse(data: any, success: number, scope: any) {
        try {
            //1 = success
            if (success === 1) {
                scope.getCategoryListBind(data);
            }
            //2 = Completed
            if (success === 2) {

            }
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error.prototype.logError("TourSchedule", "getCategoryListResponse", TourSchedule.prototype.errorParameters, e);
        }
    }


    public publicFilterAttractions(scope:any,data:any) {

        
        try {

            BaseAjaxCall.prototype.ajaxWithCallbackValueContantType("TourSchedule", "publicFilterAttractions", "POST",
                Constants.localUrl + 'Schedule/Public_FilterAttractions',
                data,
                scope,
                this.publicFilterAttractionsResponse
            );

        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = data;
            Error.prototype.logError("TourSchedule", "publicFilterAttractions", TourSchedule.prototype.errorParameters, e);
        }
    }

    public publicFilterAttractionsResponse(data: any, success: number, scope: any) {
        try {
            //1 = success
            if (success === 1) {
                scope.publicFilterAttractionsBind(data);
            }
            //2 = Completed
            if (success === 2) {

            }
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error.prototype.logError("TourSchedule", "getCategoryListResponse", TourSchedule.prototype.errorParameters, e);
        }
    }

    public publicGetOrderOfAttractionVisit(scope: any,data:any) {
        try {

            BaseAjaxCall.prototype.ajaxWithCallbackValueContantType("TourSchedule", "publicGetOrderOfAttractionVisit", "POST",
                Constants.localUrl + 'Schedule/Public_GetOrderOfAttractionVisit',
                data,
                scope,
                this.publicGetOrderOfAttractionVisitResponse
            );

        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = data;
            Error.prototype.logError("TourSchedule", "publicGetOrderOfAttractionVisit", TourSchedule.prototype.errorParameters, e);
        }
    }

    public publicGetOrderOfAttractionVisitResponse(data: any, success: number, scope: any) {
        try {
            //1 = success
            if (success === 1) {
                scope.attractionInformationRendaring(data);
            }
            //2 = Completed
            if (success === 2) {

            }
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error.prototype.logError("TourSchedule", "publicGetOrderOfAttractionVisitResponse", TourSchedule.prototype.errorParameters, e);
        }
    }

    public watherAPI(scope: any, param: any) {
        try {

            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.app_id = Constants.prototype.app_id;
            TourSchedule.prototype.parameters.app_code = Constants.prototype.app_code;
            TourSchedule.prototype.parameters.latitude = param.latitude;
            TourSchedule.prototype.parameters.longitude = param.longitude;

            let callBackScope: any = {};
            callBackScope.scope = scope;
            callBackScope.RecordCount = param.RecordCount;

            BaseAjaxCall.prototype.ajaxWithCallbackValueContantType("TourSchedule", "watherAPI", "GET",
                 'https://weather.api.here.com/weather/1.0/report.json',
                TourSchedule.prototype.parameters,
                callBackScope,
                this.watherAPIResponse
            );
        
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.param = JSON.stringify(param);
            Error.prototype.logError("TourSchedule", "watherAPI", TourSchedule.prototype.errorParameters, e);
        }
    }

    public watherAPIResponse(data: any, success: number, scope: any) {
        try {
            //1 = success
            if (success === 1) {
                scope.scope.weatherInfoUpdate(data, scope.RecordCount);
            }
            //2 = Completed
            if (success === 2) {

            }
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error.prototype.logError("TourSchedule", "watherAPIResponse", TourSchedule.prototype.errorParameters, e);
        }
    }

    //Gettigng the attraction information
    public tourInformation(data:any) {
        try {
            BaseAjaxCall.prototype.ajaxWithCallbackValueContantTypeDataTypeHtml("TourSchedule",
            "tourInformation",
            "POST",
            Constants.localUrl + 'UserControls/TourInformation',
            data,
            data.divId,
            this.tourInformationResponse
        );
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            Error.prototype.logError("TourSchedule", "tourInformation", TourSchedule.prototype.errorParameters, e);
        }

    }

    public tourInformationResponse(data: any, success: number, divId: any) {
        try {
            //1 = success
            if (success === 1) {
                $("#" + divId).empty();
                $("#" + divId).append(data);
            }
            //2 = Completed
            if (success === 2) {

            }
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error.prototype.logError("TourSchedule", "tourInformationResponse", TourSchedule.prototype.errorParameters, e);
        }
    }

    public getCityList(scope: any,countryId:number) {
        try {
            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.countryId = countryId;

            $(".blockPage").show();
            BaseAjaxCall.prototype.ajaxWithCallbackValue("TourSchedule",
                "getCityList",
                "GET",
                Constants.localUrl + 'Schedule/GetCityOnCountryId',
                TourSchedule.prototype.parameters,
                scope,
                this.getCityListResponse
            );
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.countryId = countryId;
            Error.prototype.logError("TourSchedule", "getCityList", TourSchedule.prototype.errorParameters, e);
        }
        
    }
    public getCityListResponse(data: any, success: number, scope: any) {
        try {
            //1 = success
            if (success === 1) {

                scope.getCityListBind(data);
                
            }
            //2 = Completed
            if (success === 2) {
                $(".blockPage").hide();
            }
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error.prototype.logError("TourSchedule", "tourInformationResponse", TourSchedule.prototype.errorParameters, e);
        }
    }

    public attractionsPhotoInfo(scope: any, data: any) {

        try {

            TourSchedule.prototype.parameters = {};
            TourSchedule.prototype.parameters.attractionId = data.attractionId;
            TourSchedule.prototype.parameters.countryId = data.countryId;

            let thisScope: any = {};
            thisScope.scope = scope;
            thisScope.attractionId = data.attractionId;
            thisScope.attractionName = data.attractionName;

            BaseAjaxCall.prototype.ajaxWithCallbackValue("TourSchedule",
                "attractionsPhotoInfo",
                "GET",
                Constants.localUrl + 'Schedule/AttractionsPhotoInfo',
                TourSchedule.prototype.parameters,
                thisScope,
                this.attractionsPhotoInfoResponse
            );
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);;
            Error.prototype.logError("TourSchedule", "attractionsPhotoInfo", TourSchedule.prototype.errorParameters, e);
        }
    }

    public attractionsPhotoInfoResponse(data: any, success: number, thisScope: any) {
        try {
            //1 = success
            if (success === 1) {

                thisScope.scope.photoInfo(thisScope.attractionId, data, thisScope.attractionName);

            }
            //2 = Completed
            if (success === 2) {
                $(".blockPage").hide();
            }
        } catch (e) {
            TourSchedule.prototype.errorParameters = {};
            TourSchedule.prototype.errorParameters.data = JSON.stringify(data);
            TourSchedule.prototype.errorParameters.success = success;
            Error.prototype.logError("TourSchedule", "tourInformationResponse", TourSchedule.prototype.errorParameters, e);
        }
    }
}