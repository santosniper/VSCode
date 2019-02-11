$(function () {
    // 3.8.1. Selections
    var cDiv = document.querySelectorAll("div .module");
    console.log('div whith module class--> ' + cDiv.length);

    console.log($("#myList li").eq(2).text());

    console.log('label por atributo--> ' + $("input").prev("label").text());

    var hiden = document.querySelectorAll("input[type=hidden]");
    console.log('hidden elements--> ' + hiden.length);

    var imgs = document.querySelectorAll("img[alt]");
    console.log('images with alt()--> ' + imgs.length);

    console.log('odd tr elements--> ' + $('tr:odd').text());

    //3.8.2 Travesing
    var images = $("img");
    for (var y = 0; y < images.length; y++) {
        console.log('Image' + y + ' alt: ' + images[y].alt);
    }

    $("input").addClass("current");

    var element = $("#myList .current").removeClass("current");
    element.next().addClass("current");



    var espe = $("specials select");

    $(".input_submit").on("click", function (e) {
        e.preventDefault();
        $("#specials select").remove();
    });

    $("#slideshow").first().addClass("current").siblings().addClass("disabled");

    for (var x = 0; x < 5; x++) {
        $("#myList").append("<li></li>");
    }
    $("#myList li:odd").remove();

    $("div .module").last().append("<h2></h2><p></p>");
    $("select").append('<option value="Wednesday">Wednesday</option>');

    /*comentar cuando 5.7.2
    $("div .module").last().after('<div class="module"></div>');
    $("div .module").last().append(images[1]);*/

    var label = $("input").prev("label").text();
    $(".input_text").attr("placeholder", label).addClass("hint");
    $("input").prev("label").remove();
    $(".input_text").on("focus", function () {
        $(".input_text").attr("placeholder", "");
    });
    $(".input_text").on("blur", function () {
        $(".input_text").attr("placeholder", label);
    });

    // $("div .module").hide();
    $("div .module").first().before('<ul id="unord"></ul>');
    var divmodules = document.querySelectorAll("div .module");
    for (var x = 0; x < divmodules.length; x++) {
        var titl = $(divmodules[x]).children("h2").text();
        $("#unord").append("<li class='unordli" + x + "'>" + titl + "</li>");
    }
    $(".unordli0").on("click", function () {
        var str = $(".unordli0").text().toLowerCase();
        $(".module").hide().removeClass("current");
        $("#" + str).show().addClass("current");
    });
    $(".unordli1").on("click", function () {
        var str = $(".unordli1").text().toLowerCase();
        $(".module").hide().removeClass("current");
        $("#" + str).show().addClass("current");
    });
    // 4. Finally, show the first tab.?

    $("#blog ul li h3 a").on("click", function (e) {
        e.preventDefault();
        $(".excerpt:visible").slideUp();
        if ($(this).parent().next().is(":visible")) {
            $(this).parent().next().slideUp();
        } else {
            $(this).parent().next().slideDown();
        }
    });
    $("#nav li ul").hide();
    $("#nav li").hover(function () {
        $(this).children("ul").show();
    }, function () {
        $(this).children("ul").hide();
    });

    $("slideshow").hide();
    $("body").prepend($("#slideshow").hide());
    // $("slideshow").hide();

    // setInterval(function () {
    $("#slideshow").fadeIn(500);
    // $("#slideshow li").first().delay(3000).fadeOut(500);
    // $("#slideshow li").first().next().delay(3000).fadeIn(500);
    // $("#slideshow li").first().next().delay(6000).fadeOut(500);
    // $("#slideshow li").last().delay(6000).fadeIn(500);
    // $("#slideshow li").last().delay(9000).fadeOut(500);
    // }, 3000);




});


