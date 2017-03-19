function AttractionSubmitClick() {
    var controler = angular.element('#controllerAttractions').scope();
    $("#CategoryId").val(controler.CategorySelectedValue.CategoryId);
    $("#CountryId").val(controler.CountrySelectedValue.CountryId);
    $("#CityId").val(controler.CitySelectedValue.CityId);
    $("#StateId").val(controler.StateSelectedValue.StateId);
}