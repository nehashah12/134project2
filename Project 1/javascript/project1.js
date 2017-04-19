function myFunction() {
document.getElementById("time").innerHTML = Date();
}

$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});
