init();
var webpack;
var btnloginCheck;
function init() {
    
    $(document).ready(function() {
        new EntryPoint.Main().MainMenu.init();

        
    });
    
}

$(document).ready(function() {

    
    window.onload = function() {
        webpack = new EntryPoint.Main();

        btnloginCheck = $("#btnLogin");
        
        
        
        
        
        

    };

    $("#btnLogin").click(function () {
        
        webpack.Validations.loginValidation();
    });
    $("#btnRegisterRegister").click(function() {
        webpack.Validations.registerValidation();
    });
    $("#btnForgetPassword").click(function() {
        webpack.Validations.forgetValidation();
    });
});


function googleMapsMethodInfo(sourceLatitude, sourceLongitude) {
    
    var angularScope = angular.element(document.getElementById('main')).scope();
    angularScope.$apply(function () {
        
        angularScope.googleMaps = new GMaps({
            div: '#googleMaps',
            lat: sourceLatitude,
            lng: sourceLongitude
        });
    });
}



function UserCheckUserNameExisted() {
    new EntryPoint.Main().User.checkUserNameExisted($("#txtRegisterLogin").val());
}






function loginControl() {
    
    new EntryPoint.Main().User.loginControl();
}



