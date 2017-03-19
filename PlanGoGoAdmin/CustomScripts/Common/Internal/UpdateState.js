function StateSubmitClick()
{
    debugger;
    var controler = angular.element('#controllerManageState').scope();
    $("#CountryId").val(controler.CountrySelectedValue.CountryId);
}