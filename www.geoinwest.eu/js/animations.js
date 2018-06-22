$(window).on("load", function () {
    //--------------------------------------------------------------------scroll
    $("#arrow, #click1, #a1").click(function () {
        $("body, html").animate({
            scrollTop: ($("#one").offset().top - 25),
        }, 1000);
    });
    $("#click3, #a2").click(function () {
        $("body, html").animate({
            scrollTop: ($("#two").offset().top - 20),
        }, 1000);
    });
    $("#o_nas a, #click2, #click5").click(function () {
        $("body, html").animate({
            scrollTop: ($("#footer").offset().top - 450),
        }, 1000);
    });
    $("#podsumowanie h4").click(function () {
        $("body, html").animate({
            scrollTop: ($("#header").offset().top),
        }, 1000);
    });
    $("#click4, #a3").click(function () {
        $("body, html").animate({
            scrollTop: ($("#nasze_domy").offset().top),
        }, 1000);
    });
    //--------------------------------------------------------------------animations
    $(window).scroll(function () {
        var i = 0;
        var j = 0;
        var k = 0;

        if ($(this).scrollTop() > innerHeight / 4) {
            if (innerWidth < 800) {
                if (i < 10) {
                    $("#o_nas_txt").animate({
                        marginLeft: "+5",
                        opacity: 1,
                    }, 2000);
                    i++;
                }
            }
            else {
                if (i < 10) {
                    $("#o_nas_txt").animate({
                        marginLeft: "+100",
                        opacity: 1,
                    }, 2000);
                    i++;
                }
            }
            
        }
        if ($(this).scrollTop() > (innerHeight / 4) + innerHeight) {
            if (j < 3) {
                $("#galeria h2").animate({
                    marginLeft: "700",
                    opacity: 1,
                }, 2000);
                j++;
            }

        }
        if (innerWidth < 800) {
            if ($(this).scrollTop() > (innerHeight / 4) + (innerHeight)) {
                if (k < 10) {
                    $("#nasze_domy_txt").animate({
                        marginLeft: "+5",
                        opacity: 1,
                    }, 2000);
                    k++;
                }
            }
        }
        else{
            if ($(this).scrollTop() > (innerHeight / 4) + (2 * innerHeight)) {
                if (k < 10) {
                    $("#nasze_domy_txt").animate({
                        marginLeft: "+100",
                        opacity: 1,
                    }, 2000);
                    k++;

                }
            }
        }
       
      
    });
});