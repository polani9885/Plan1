function MainCategorySelected() {
    var angularScope = angular.element(document.getElementById('controllerMasterGoogleType')).scope();
    angularScope.$apply(function () {
        angularScope.MainCategorySelected($("#ddlmainCategorySelected").val());
    });
}