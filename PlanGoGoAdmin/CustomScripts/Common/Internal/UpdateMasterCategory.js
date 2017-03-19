function CategorySubmitClick() {    
    var controler = angular.element('#controllerManageCategory').scope();
    $("#CategoryId").val(controler.CategorySelectedValue.CategoryId);    
}