
import {Constants} from "../Common/Constants";
import {TourInfo} from "../Modules/TourInfo";
import {Error} from "../Modules/Error";
import {Validations} from "../Modules/Validations";


export class ControlerPlannedTour implements angular.IController {

    public scope: IControlerPlannedTour;
    public errorParameters: any = {};

    constructor($scope: IControlerPlannedTour) {
        try {
            this.scope = $scope;
            
            this.scope.tourScheduleUrl = Constants.localUrl + "Schedule/index?userTripId=";
        } catch (e) {
            ControlerPlannedTour.prototype.errorParameters = {};
            Error.prototype.logError("ControlerPlannedTour",
                "constructor",
                ControlerPlannedTour.prototype.errorParameters,
                e);
        }
    }

    $onInit = () => {
        try {
            TourInfo.prototype.userGetTourInformation(this);
            TourInfo.prototype.getCountry(this);

            $(document).ready(function() {
                $("#popCreateNewTour").dialog({
                    autoOpen: false,
                    height: 400,
                    width: 350,
                    modal: true,
                    buttons: {
                        "Add": Validations.prototype.tripNameInfo,
                        Cancel: function() {
                            $("#popCreateNewTour").dialog("close");
                        }
                    },
                });
            });
        } catch (e) {
            ControlerPlannedTour.prototype.errorParameters = {};
            Error.prototype.logError("ControlerPlannedTour",
                "$onInit",
                ControlerPlannedTour.prototype.errorParameters,
                e);
        }
    }

   

    public plannedTours(data: any) {

        try {
            this.scope.$apply(() => {


                let plannedTour: Array<IPlannedTour> = [];
                this.scope.plannedTour = [];

                $.each(data,
                    function(key: any, value: any) {

                        let temp: IPlannedTour = <IPlannedTour>{};
                        temp.tripName = value.TripName;
                        temp.createdDate = value.CreatedDate;
                        temp.countryId = value.CountryId;
                        temp.userTripId = value.UserTripId;

                        plannedTour.push(temp);
                    });
                this.scope.plannedTour = plannedTour;

            });
        } catch (e) {
            ControlerPlannedTour.prototype.errorParameters = {};
            ControlerPlannedTour.prototype.errorParameters.data = data;
            Error.prototype.logError("ControlerPlannedTour",
                "plannedTours",
                ControlerPlannedTour.prototype.errorParameters,
                e);
        }

    }

    public bindingCountryInfo(data: any) {
        try {
            this.scope.$apply(() => {
                let countryList: Array<ICountryList> = [];
                this.scope.countryList = [];
                $.each(data,
                    function(attractionKey, attractionValue) {
                        let item: ICountryList = <ICountryList>{};
                        item.countryId = attractionValue["CountryId"];
                        item.countryName = attractionValue["CountryName"];
                        countryList.push(item);
                    });
                this.scope.countryList = countryList;
            });
        } catch (e) {
            ControlerPlannedTour.prototype.errorParameters = {};
            ControlerPlannedTour.prototype.errorParameters.data = data;
            Error.prototype.logError("ControlerPlannedTour",
                "bindingCountryInfo",
                ControlerPlannedTour.prototype.errorParameters,
                e);
        }
    }

    editTripName(tourInfo: IPlannedTour) {
        try {
            this.scope.userSelectedTripInfo = tourInfo;
            $("#popCreateNewTour")
                .dialog("open");
            $("#txtTripName").val(tourInfo.tripName);
            $("#ddlCountry").val(tourInfo.countryId);
        } catch (e) {
            ControlerPlannedTour.prototype.errorParameters = {};
            ControlerPlannedTour.prototype.errorParameters.data = tourInfo;
            Error.prototype.logError("ControlerPlannedTour",
                "editTripName",
                ControlerPlannedTour.prototype.errorParameters,
                e);
        }

    }


    createNewTour() {
        try {
            this.scope.userSelectedTripInfo = [];

            $("#popCreateNewTour")
                .dialog("open");
        } catch (e) {
            ControlerPlannedTour.prototype.errorParameters = {};
            Error.prototype.logError("ControlerPlannedTour",
                "createNewTour",
                ControlerPlannedTour.prototype.errorParameters,
                e);
        }
    }

    navigateToSchedule(userTripId: number) {
        
        try {
            window.open(this.scope.tourScheduleUrl + userTripId.toString(), '_self');

        } catch (e) {
            ControlerPlannedTour.prototype.errorParameters = {};
            Error.prototype.logError("ControlerPlannedTour",
                "navigateToSchedule",
                ControlerPlannedTour.prototype.errorParameters,
                e);
        }
    }

    tripInfo() {
        
    }

}
    


