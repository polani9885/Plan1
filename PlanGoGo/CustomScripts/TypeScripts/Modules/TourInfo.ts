import {Error} from "../Modules/Error";
import {BaseAjaxCall} from "../Common/BaseAjaxCall";
import {Constants} from "../Common/Constants";
import {IndexDbWrapper} from "../Plugins/IndexDbWrapper";
import {ControlerPlannedTour} from "../Controler/ControlerPlannedTour";


export class TourInfo {

    public errorParameters: any = {};
    public parameters: any = {};
    public controlerPlanedTour: any;

    constructor() {
        try {
            if ($("#divTourPlan")) {
                TourInfo.prototype.controlerPlanedTour = $("#divTourPlan").scope();
            }
        } catch (e) {
            TourInfo.prototype.errorParameters = {};
            Error.prototype.logError("TourInfo", "constructor", TourInfo.prototype.errorParameters, e);
        }
    }

    public userAddUpdateTourName(tourName: string, userTripId: number, countryId: number) {
        
        try {
            this.parameters = {};
            this.parameters.tourName = tourName;
            this.parameters.userTripId = userTripId;
            this.parameters.countryId = countryId;

            BaseAjaxCall.prototype.ajaxWithCallbackValue("TourInfo","userAddUpdateTourName", "GET",
                Constants.localUrl + 'UserControls/User_AddUpdateTourName',
                this.parameters,
                userTripId,
                this.userAddUpdateTourNameResponse
            );
        } catch (e) {
            TourInfo.prototype.errorParameters = {};
            TourInfo.prototype.errorParameters.tourName = tourName;
            TourInfo.prototype.errorParameters.userTripId = userTripId;
            TourInfo.prototype.errorParameters.countryId = countryId;
            Error.prototype.logError("TourInfo", "userAddUpdateTourName", TourInfo.prototype.errorParameters, e);
        }

    }

    public userAddUpdateTourNameResponse(data: any, success: number, userTripId: any) {
        try {
            
            //1 = success
            if (success === 1) {
                $("#popCreateNewTour")
                    .dialog("close");
                TourInfo.prototype.controlerPlanedTour = $("#divTourPlan").scope();
                if (userTripId > 0) {
                    
                    TourInfo.prototype.controlerPlanedTour.$apply(function() {

                        TourInfo.prototype.controlerPlanedTour.ctrl.$onInit();
                    });
                } else {
                    TourInfo.prototype.controlerPlanedTour.$apply(function() {

                        TourInfo.prototype.controlerPlanedTour.ctrl.navigateToSchedule(data.UserTripId);
                    });
                }


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
            TourInfo.prototype.errorParameters = {};
            TourInfo.prototype.errorParameters.data = JSON.stringify(data);
            TourInfo.prototype.errorParameters.success = success;
            Error.prototype.logError("TourInfo", "userAddUpdateTourNameResponse", TourInfo.prototype.errorParameters, e);
        }
    }
    //Getting the user tour information
    public userGetTourInformation(scope:any) {
        try {
            

            BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourInfo", "userGetTourInformation","GET",
                Constants.localUrl + 'UserControls/User_GetTourInformation',
                scope,
                this.userGetTourInformationResponse
            );
        } catch (e) {
            TourInfo.prototype.errorParameters = {};
            Error.prototype.logError("TourInfo", "userGetTourInformation", TourInfo.prototype.errorParameters, e);
        }
    }
    public userGetTourInformationResponse(data: any, success: number, scope: any) {
        try {
            
            //1 = success
            if (success === 1) {

                scope.plannedTours(data);
                

                //Creating local database
                IndexDbWrapper.prototype.creatingUserTripDataBase(data);
            }
            //2 = Completed
            if (success === 2) {
                $(".blockPage").hide();
            }
            //0 = Error
            if (success === 0) {
                TourInfo.prototype.userGetTourInformation(scope);

                $(".blockPage").hide();
               
            }
        } catch (e) {
            TourInfo.prototype.errorParameters = {};
            TourInfo.prototype.errorParameters.data = JSON.stringify(data);
            TourInfo.prototype.errorParameters.success = success;
            Error.prototype.logError("TourInfo", "userGetTourInformationResponse", TourInfo.prototype.errorParameters, e);
        }
    }

    public getCountry(scope: any) {
        try {


            BaseAjaxCall.prototype.ajaxWithOutParametersWithCallbackValue("TourInfo", "getCountry","GET",
                Constants.localUrl + 'UserControls/GetCountry',
                scope,
                this.getCountryResponse
            );
        } catch (e) {
            TourInfo.prototype.errorParameters = {};
            Error.prototype.logError("TourInfo", "getCountry", TourInfo.prototype.errorParameters, e);
        }
    }
    public getCountryResponse(data: any, success: number, scope: any) {
        try {
            //1 = success
            if (success === 1) {
                scope.bindingCountryInfo(data);
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
            TourInfo.prototype.errorParameters = {};
            TourInfo.prototype.errorParameters.data = JSON.stringify(data);
            TourInfo.prototype.errorParameters.success = success;
            Error.prototype.logError("TourInfo", "getCountryResponse", TourInfo.prototype.errorParameters, e);
        }
    }
}