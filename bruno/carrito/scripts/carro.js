$(function () {

    var cuadro = document.querySelectorAll(".item");
    for (var i = 0; i < cuadro.length; i++) {
        cuadro[i].addEventListener("dblclick", clikealo, false);
    }

    function clikealo() {
        if ($("#" + this.id).children(".stock").text() != "Stock 0") {
            var num = $("#" + this.id).children(".stock").text();
            num = num.split(" ");
            num = parseInt(num[1]);
            num = num - 1;
            $("#" + this.id).children(".stock").text("Stock " + num);




            if (num == 0) {
                $("#" + this.id).children(".stock").addClass("agotado");
            }

            var z = parseInt($("#citem").val());;
            z++;
            $("#citem").attr("value", z);

            var cost = $("#" + this.id).children(".price").text();
            cost = cost.split(" ");
            cost = parseInt(cost[0]);
            var contPric = parseInt($("#cprice").val());
            $("#cprice").attr("value", contPric + cost + " €");

            $("#" + this.id)
                .clone()
                .prependTo("#cart_items")
                .attr("id", "c" + this.id)
                .attr("class", "icart")
                .children(".stock")
                .hide();



            $("#c" + this.id)
                .children()
                .andSelf()
                .css("cursor", "default");

            var $delete = $('<a  class="delete"></a>');

            $("#c" + this.id).prepend($delete);
            var a = "#c" + this.id;

            $delete.on("click", function clik() {
                /*
                separo la "C" de el id del objeto en el carrito
                lo convierto en la id del objeto que seleccinamos
                con esta id creo la variable num y le sumo uno al numero del hijo
                finalmente eliminamos el objeto
                */

                var o = a.split("c");
                o = o[1];
                var id = "#" + o;

                var num = $(id).children(".stock").text();
                num = num.split(" ");
                num = parseInt(num[1]);
                num = num + 1;
                $(id).children(".stock").text("Stock " + num);

                $(a).remove();

                $(id).children(".stock").removeClass("agotado");


                //restamos uno al total de los objetos adquiridos


                var z = parseInt($("#citem").val());;
                z--;
                $("#citem").attr("value", z);

                //restamos el precio del objeto eliminado al total

                var cost = $(id).children(".price").text();
                cost = cost.split(" ");
                cost = parseInt(cost[0]);
                var contPric = parseInt($("#cprice").val());
                $("#cprice").attr("value", contPric - cost + " €");








            });



        }

    }
});