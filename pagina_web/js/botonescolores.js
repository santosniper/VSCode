$(document).ready(function () {


    document.getElementById("video1").addEventListener("click", destacar1, false);
    document.getElementById("foto1").addEventListener("click", destacar2, false);
    document.getElementById("gif1").addEventListener("click", destacar3, false);

    document.getElementById("video2").addEventListener("click", destacar11, false);
    document.getElementById("foto2").addEventListener("click", destacar22, false);
    document.getElementById("gif2").addEventListener("click", destacar33, false);

});

function destacar1() {
    $(".claseF1").removeClass("c1");
    $(".claseG1").removeClass("c1");
    $(".claseV1").addClass("c1");


}
function destacar2() {
    $(".claseV1").removeClass("c1");
    $(".claseG1").removeClass("c1");
    $(".claseF1").addClass("c1");


}
function destacar3() {
    $(".claseV1").removeClass("c1");
    $(".claseF1").removeClass("c1");
    $(".claseG1").addClass("c1");


}

function destacar11() {
    $(".claseF2").removeClass("c1");
    $(".claseG2").removeClass("c1");
    $(".claseV2").addClass("c1");


}
function destacar22() {
    $(".claseV2").removeClass("c1");
    $(".claseG2").removeClass("c1");
    $(".claseF2").addClass("c1");


}
function destacar33() {
    $(".claseV2").removeClass("c1");
    $(".claseF2").removeClass("c1");
    $(".claseG2").addClass("c1");


}