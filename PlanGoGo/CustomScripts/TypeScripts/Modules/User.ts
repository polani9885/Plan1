


import {BaseAjaxCall} from "../Common/BaseAjaxCall";
import {Constants} from "../Common/Constants";
import {Error} from "./Error";


export class User {

    public parameters: any = {};

    public errorParameters: any={};

    public userLoggedIn() {
        try {
            $("#linkLogin").hide();
            $("#linkLogOut").show();
            $("#linkPlannedTour").show();
        } catch (e) {
            User.prototype.errorParameters = {};
            Error.prototype.logError("User", "userLoggedIn", User.prototype.errorParameters, e);
        }
    }

    public userLoggOut() {
        try {
            $("#linkLogin").show();
            $("#linkLogOut").hide();
            $("#linkPlannedTour").hide();
        } catch (e) {
            User.prototype.errorParameters = {};
            Error.prototype.logError("User", "userLoggOut", User.prototype.errorParameters, e);
        }
    }

    public isUserLoggedIn() {
        try {
            $(".blockPage").show();

            BaseAjaxCall.prototype.ajaxWithOutParameter("User","isUserLoggedIn","GET",
                Constants.localUrl + 'UserControls/IsUserLoggedIn',
                this.isUserLoggedInResponse
            );
        } catch (e) {
            User.prototype.errorParameters = {};
            Error.prototype.logError("User", "isUserLoggedIn", User.prototype.errorParameters, e);
        }
    }

    public isUserLoggedInResponse(data: any, success: number) {
        try {
            //1 = success
            if (success === 1) {
                if (data.Success) {
                    User.prototype.userLoggedIn();
                } else {
                    User.prototype.userLoggOut();
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
            User.prototype.errorParameters = {};
            User.prototype.errorParameters.data = JSON.stringify(data);
            User.prototype.errorParameters.success = success;
            Error.prototype.logError("User", "isUserLoggedInResponse", User.prototype.errorParameters, e);
        }
    }

    public userLogOut() {
        try {
            BaseAjaxCall.prototype.ajaxWithOutParameter("User", "userLogOut","GET",
                Constants.localUrl + 'UserControls/UserLogOut',
                this.userLogOutResponse
            );
        } catch (e) {
            User.prototype.errorParameters = {};
            Error.prototype.logError("User", "userLogOut", User.prototype.errorParameters, e);
        }
    }

    public userLogOutResponse(data: any, success: number) {
        try {
            //1 = success
            if (success === 1) {
                if (data.Success) {
                    User.prototype.isUserLoggedIn();
                }
            }
            //2 = Completed
            if (success === 2) {
                $(".blockPage").hide();
            }
            //0 = Error
            if (success === 0) {
                
            }
        } catch (e) {
            User.prototype.errorParameters = {};
            User.prototype.errorParameters.data = JSON.stringify(data);
            User.prototype.errorParameters.success = success;
            Error.prototype.logError("User", "userLogOutResponse", User.prototype.errorParameters, e);
        }
    }

    public checkUserNameExisted(username: string) {
        try {
            if (username !== null && username !== "") {

                this.parameters = {};
                this.parameters.userName = username;

                //before ajax method calling
                $(".blockPage").show();

                BaseAjaxCall.prototype.ajax("User", "checkUserNameExisted","GET",
                    Constants.localUrl + 'UserControls/UserExistChecking',
                    this.parameters,
                    this.checkUserNameExistedResponse
                );
            }
        } catch (e) {
            User.prototype.errorParameters = {};
            User.prototype.errorParameters.username = username;
            Error.prototype.logError("User", "checkUserNameExisted", User.prototype.errorParameters, e);
        }
    }

    public checkUserNameExistedResponse(data: any, success: number) {
        try {
            //1 = success
            if (success === 1) {
                $("#imgCheckUserNameExisted").show();
                $("#imgCheckUserNameExisted").removeAttr("src");
                if (data.Success) {
                    $("#imgCheckUserNameExisted").attr("src", "/Images/User/UI/Correct.png");
                } else {
                    $("#imgCheckUserNameExisted").attr("src", "/Images/User/UI/Wrong.png");
                }
            }
            //2 = Completed
            if (success === 2) {
                $(".blockPage").hide();
            }
            //0 = Error
            if (success === 0) {
                //Errror should be log properlay

                $(".blockPage").hide();
            }
        } catch (e) {
            User.prototype.errorParameters = {};
            User.prototype.errorParameters.data = JSON.stringify(data);
            User.prototype.errorParameters.success = success;
            Error.prototype.logError("User", "checkUserNameExistedResponse", User.prototype.errorParameters, e);
        }
    }

    public registerUser() {
        try {
            $("#loginController")
                .dialog("close");
            $("#forgetController")
                .dialog("close");
            $("#registerController")
                .dialog("open");
        } catch (e) {
            User.prototype.errorParameters = {};
            Error.prototype.logError("User", "registerUser", User.prototype.errorParameters, e);
        }
    }

    public forgetPassword() {
        try {
            $("#loginController")
                .dialog("close");
            $("#registerController")
                .dialog("close");
            $("#forgetController")
                .dialog("open");
        } catch (e) {
            User.prototype.errorParameters = {};
            Error.prototype.logError("User", "forgetPassword", User.prototype.errorParameters, e);
        }
    }

    public loginControl() {
        try {
            $("#loginController")
                .dialog("open");
            $("#registerController")
                .dialog("close");
            $("#forgetController")
                .dialog("close");
        } catch (e) {
            User.prototype.errorParameters = {};
            Error.prototype.logError("User", "loginControl", User.prototype.errorParameters, e);
        }
    }

    public loginCheck(username: string, password: string) {
        try {
            this.parameters = {};
            this.parameters.userName = username;
            this.parameters.password = password;

            //before ajax method calling
            $(".blockPage").show();

            BaseAjaxCall.prototype.ajax("User", "loginCheck","GET",
                Constants.localUrl + 'UserControls/User_GetUserInformation',
                this.parameters,
                this.loginCheckResponse
            );
        } catch (e) {
            User.prototype.errorParameters = {};
            User.prototype.errorParameters.username = username;
            User.prototype.errorParameters.password = password;
            Error.prototype.logError("User", "loginCheck", User.prototype.errorParameters, e);
        }
    }

    public loginCheckResponse(data: any, success: number) {
        try {
            //1 = success
            if (success === 1) {
                if (data !== null) {
                    $("#lblLoginUsernameCheckError").hide();
                    $("#loginController").dialog("close");
                    User.prototype.isUserLoggedIn();
                } else {
                    $("#lblLoginUsernameCheckError").show();
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
            User.prototype.errorParameters = {};
            User.prototype.errorParameters.data = JSON.stringify(data);
            User.prototype.errorParameters.success = success;
            Error.prototype.logError("User", "loginCheckResponse", User.prototype.errorParameters, e);
        }
    }

    public userInsertingUserInfo(parameters: IUserInfo = <IUserInfo>{}) {
        try {
            $(".blockPage").show();

            BaseAjaxCall.prototype.ajax("User", "userInsertingUserInfo","POST",
                Constants.localUrl + 'UserControls/User_InsertingUserInfo',
                parameters,
                this.userInsertingUserInfoResponse
            );
        } catch (e) {
            User.prototype.errorParameters = {};
            User.prototype.errorParameters.parameters = parameters;
            Error.prototype.logError("User", "userInsertingUserInfo", User.prototype.errorParameters, e);
        }
    }

    public userInsertingUserInfoResponse(data: any, success: number) {
        try {
            //1 = success
            if (success === 1) {
                if (data.Success) {
                    User.prototype.isUserLoggedIn();
                    $("#lblUserRegisterError").hide();
                    $("#registerController").dialog("close");
                } else {
                    $("#lblUserRegisterError").show();
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
            User.prototype.errorParameters = {};
            User.prototype.errorParameters.data = JSON.stringify(data);
            User.prototype.errorParameters.success = success;
            Error.prototype.logError("User", "userInsertingUserInfoResponse", User.prototype.errorParameters, e);
        }
    }
}