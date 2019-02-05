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








});