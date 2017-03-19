function CitySubmitClick() {
    debugger;
    var controler = angular.element('#controllerManageCity').scope();
    $("#CountryId").val(controler.CountrySelectedValue.CountryId);
    $("#StateId").val(controler.StateSelectedValue.StateId);
}