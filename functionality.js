$(document).ready(function(){
    //click event for showing the value in the textarea
    $(".btn").click(function(){
        var attr = $(this).attr("value");
        $(".text").append(attr);
    });

    $("h1").dblclick(function () {
        alert("hello");

    })
});