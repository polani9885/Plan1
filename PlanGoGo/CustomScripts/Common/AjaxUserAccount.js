function CheckUserNameExisted(username) {
    debugger;
    if (username!=null && username != "") {
        $.ajax({
            type: "GET",
            url: '/UserControls/UserExistChecking',
            dataType: "json",
            data: { userName: username },
            beforeSend: function () {
                $(".blockPage").show();
            },
            success: function (data) {

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