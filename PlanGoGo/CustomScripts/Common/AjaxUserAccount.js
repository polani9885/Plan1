function CheckUserNameExisted(username) {    
    if (username != null && username != "") {
        debugger;
        $.ajax({
            type: "GET",
            url: '/UserControls/UserExistChecking',
            dataType: "json",
            data: { userName: username },
            beforeSend: function () {
                $(".blockPage").show();
            },
            success: function (data) {
                $("#imgUserExisted").show();
                if(data.Success)
                {
                    $("#imgUserExisted").attr("src", "/Images/User/UI/Correct.png");
                }
                else {
                    $("#imgUserExisted").attr("src", "/PlanGoGo/Images/User/UI/Wrong.png");
                }
            },
            error: function (result) {
                alert('Service call failed: ' + result.status + ' Type :' + result.statusText);
            },
            complete: function () {
                $(".blockPage").hide();
            }
        });
    }
}