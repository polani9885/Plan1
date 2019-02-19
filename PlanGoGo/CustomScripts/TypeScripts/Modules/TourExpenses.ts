import {Error} from "../Modules/Error";
import {BaseAjaxCall} from "../Common/BaseAjaxCall";
import {Constants} from "../Common/Constants";

export class TourExpenses {

    public errorParameters: any = {};
    public parameters: any = {};

    public userUserTripUpdate(scope: any,data:any) {
        try {
            TourExpenses.prototype.parameters = {};
            TourExpenses.prototype.parameters.noOfPersons = data.NoOfPersons;
            TourExpenses.prototype.parameters.noOfCars = data.NoOfCars;
            TourExpenses.prototype.parameters.carMileage = data.CarMileage;
            TourExpenses.prototype.parameters.fuelPrice = data.FuelPrice;
            TourExpenses.prototype.parameters.drivingBreak = data.DrivingBreak;
            

            BaseAjaxCall.prototype.ajaxWithCallbackValue("TourExpenses","userUserTripUpdate","GET",
                Constants.localUrl + 'UserControls/User_UserTrip_Update',
                TourExpenses.prototype.parameters,
                scope,
                this.userUserTripUpdateResponse
            );
        } catch (e) {
            TourExpenses.prototype.errorParameters = {};
            Error.prototype.logError("TourExpenses", "userUserTripUpdate", TourExpenses.prototype.errorParameters, e);
        }
    }
    public userUserTripUpdateResponse(data: any, success: number, scope: any) {
        try {
            //1 = success
            if (success === 1) {
                
            }
            //2 = Completed
            if (success === 2) {

            }
            //0 = Error
            if (success === 0) {
               
            }
        } catch (e) {
            TourExpenses.prototype.errorParameters = {};
            TourExpenses.prototype.errorParameters.data = JSON.stringify(data);
            TourExpenses.prototype.errorParameters.success = success;
            Error.prototype.logError("TourExpenses", "userUserTripUpdateResponse", TourExpenses.prototype.errorParameters, e);
        }
    }
}