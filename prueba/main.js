$(function () {
    var botones = document.querySelectorAll(("a"));
    for (var i = 0; i < botones.length; i++) {
        botones[i].addEventListener("click", cambiame, false);
    }
    function cambiame() {
        if (this.id == "rep") {
            //alert("Republic");
            $("#cambiante3").attr('class', 'col-8 purple');
            $("#cambiante").height("200px");
            $("#cambiante2").height("200px");
            $("#cambiante3").height("200px");

        } else if (this.id == "king") {
            //alert("Kingdom");
            $("#cambiante3").attr('class', 'col-8 red');
            $("#cambiante3").height("175px");
            $("#cambiante").height("175px");
            $("#cambiante2").height("250px");
        }
    }

    window.addEventListener('scroll', function (ev) {

        var someDiv = document.getElementById('cambiante');
        var distanceToTop = someDiv.getBoundingClientRect().top;
        if (distanceToTop < 50) {
            $("#navbar").attr("class", "navbar navbar-expand-lg navbar-light bg-warning sticky-top");
        } else {
            $("#navbar").attr("class", "navbar navbar-expand-lg navbar-dark bg-info sticky-top");
        }
        console.log(distanceToTop);
    });


});