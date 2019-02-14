$(document).ready(function(){
    $('.animated').hover(function(){
        $(this).find('p').animate({fontSize: $(this).height()*0.10+"px"})
    }, function(){
        $(this).find('p').animate({fontSize: "0px"})
    })

    $('#infoButton').click(function(){
        console.log("INFO");
        $('html, body').animate({
            scrollTop: ($('#offerLine').offset().top)
        },1000);
    });

    $('#galleryButton').click(function(){
        console.log("INFO");
        $('html, body').animate({
            scrollTop: ($('#galleryLine').offset().top)
        },1000);
    });

    $('#mapButton').click(function(){
        console.log("INFO");
        $('html, body').animate({
            scrollTop: ($('#mapLine').offset().top)
        },1000);
    });

    $('#kontaktButton').click(function(){
        console.log("INFO");
        $('html, body').animate({
            scrollTop: ($('#kontaktLine').offset().top)
        },1000);
    });

    $(window).scroll(function(){
        if($(window).scrollTop() > innerHeight/4 && innerWidth > 960){
            $('#onas-h4').animate({marginLeft:"50px", opacity:1},1500);
            $('#onas-p').animate({marginLeft:"50px",opacity:1},1500);
        }else{
            $('#onas-h4').animate({marginLeft:"30px", opacity:1},1500);
            $('#onas-p').animate({marginLeft:"30px",opacity:1},1500);
        }
    });

    $('.galleryImg').click(function(){
        $('#myModal').css({'display':'block'});
        $('#img01').attr('src',this.src);
    });

    $('.close').click(function(){
        $('#myModal').css({'display':'none'});
    });
})
