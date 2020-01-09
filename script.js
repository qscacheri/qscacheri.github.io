$(document).ready(function(){
    $("#name").hide().delay(500).fadeIn(1000);
    if (window.scrollY > window.innerHeight)
    {
        console.log("passed");
        $("#back").show();
    }
    else {
        $("#back").hide();
    }
});

$(window).scroll(function () {
    // console.log(window.scrollY);
    if (window.scrollY > window.innerHeight)
    {
        console.log("passed");
        $("#back").show();
    }
    else {
        $("#back").hide();
    }
});
