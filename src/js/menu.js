$("#main-menu a").click(function () {
    $("#main-menu a").removeClass("active");
    $(this).addClass("active");
    $(".content-wrapper").addClass("d-none");
    switch ($(this).attr("data-menu")) {
        case "INPUT_FORM":
            $("#input_form").removeClass("d-none");
            break;
        case "CUSTOMER_LOG":
            $("#customer_log").removeClass("d-none");
            break;
        case "REPORTS_FORM":
            $("#reports_form").removeClass("d-none");
            break;
        case "LOGIN_FORM": //We'll remove these manu items later
            $("#login_form").removeClass("d-none");
            break;
        case "SIGNUP_FORM": //We'll remove these manu items later
            $("#signup_form").removeClass("d-none");
            break;
        default:
            break;
    }
});

