$(function () {

    var arts = document.querySelectorAll(".item");
    var precio = document.getElementById("cprice");
    var objt = document.getElementById("citem");


    for (var i = 0; i < arts.length; i++) {
        arts[i].addEventListener("dblclick", dobleclikeado, false);
    }

    function dobleclikeado() {


        switch (this.id) {
            case "i1":

                if ($("#i1").children(".stock").text() != "Stock 0") {
                    var num = $("#i1").children(".stock").text();
                    num = num.split(" ");
                    num = parseInt(num[1]);
                    num = num - 1;
                    $("#i1").children(".stock").text("Stock " + num);
                    if ($("#i1").children(".stock").text() == "Stock 0") {
                        $("#i1").children(".stock").addClass("agotado");

                    }
                    var pre = $("#i1").children(".price").text();
                    pre = pre.split(" ");
                    pre = parseInt(pre[0]);
                    precio.value = parseInt(precio.value) + parseInt(pre) + " €";
                    objt.value = parseInt(objt.value) + 1;

                    break;

                }


                break;
            case "i2":

                if ($("#i2").children(".stock").text() != "Stock 0") {
                    var num = $("#i2").children(".stock").text();
                    num = num.split(" ");
                    num = parseInt(num[1]);
                    num = num - 1;
                    $("#i2").children(".stock").text("Stock " + num);
                    if ($("#i2").children(".stock").text() == "Stock 0") {
                        $("#i2").children(".stock").addClass("agotado");

                    }
                    var pre = $("#i2").children(".price").text();
                    pre = pre.split(" ");
                    pre = parseInt(pre[0]);
                    precio.value = parseInt(precio.value) + parseInt(pre) + " €";
                    objt.value = parseInt(objt.value) + 1;
                    break;

                }
                break;
            case "i3":
                if ($("#i3").children(".stock").text() != "Stock 0") {
                    var num = $("#i3").children(".stock").text();
                    num = num.split(" ");
                    num = parseInt(num[1]);
                    num = num - 1;
                    $("#i3").children(".stock").text("Stock " + num);
                    if ($("#i3").children(".stock").text() == "Stock 0") {
                        $("#i3").children(".stock").addClass("agotado");

                    }
                    var pre = $("#i3").children(".price").text();
                    pre = pre.split(" ");
                    pre = parseInt(pre[0]);
                    precio.value = parseInt(precio.value) + parseInt(pre) + " €";
                    objt.value = parseInt(objt.value) + 1;
                    break;

                }
                break;
            case "i4":

                if ($("#i4").children(".stock").text() != "Stock 0") {
                    var num = $("#i4").children(".stock").text();
                    num = num.split(" ");
                    num = parseInt(num[1]);
                    num = num - 1;
                    $("#i4").children(".stock").text("Stock " + num);
                    if ($("#i4").children(".stock").text() == "Stock 0") {
                        $("#i4").children(".stock").addClass("agotado");

                    }
                    var pre = $("#i4").children(".price").text();
                    pre = pre.split(" ");
                    pre = parseInt(pre[0]);
                    precio.value = parseInt(precio.value) + parseInt(pre) + " €";
                    objt.value = parseInt(objt.value) + 1;
                    break;

                }
                break;
            case "i5":

                if ($("#i5").children(".stock").text() != "Stock 0") {
                    var num = $("#i5").children(".stock").text();
                    num = num.split(" ");
                    num = parseInt(num[1]);
                    num = num - 1;
                    $("#i5").children(".stock").text("Stock " + num);
                    if ($("#i5").children(".stock").text() == "Stock 0") {
                        $("#i5").children(".stock").addClass("agotado");

                    }
                    var pre = $("#i5").children(".price").text();
                    pre = pre.split(" ");
                    pre = parseInt(pre[0]);
                    precio.value = parseInt(precio.value) + parseInt(pre) + " €";
                    objt.value = parseInt(objt.value) + 1;
                    break;

                }
                break;
        }

        $("#" + this.id)
            .clone()
            .appendTo("#cart_items")
            .attr("id", "#c" + this.id)
            .attr("class", "icart")
            .children(".stock")
            .hide();



        $(".icart")
            .children()
            .andSelf()
            .css("cursor", "default");

        var $delete = $('<a href="" class="delete"></a>');
        $(".icart").prepend($delete);







    }



});

