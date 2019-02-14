$(document).ready(function(){
    $('.animated').hover(function(){
        $(this).find('p').animate({fontSize: $(this).height()*0.10+"px"})
    }, function(){
        $(this).find('p').animate({fontSize: "0px"})
    })

    $(window).scroll(function(){
        if($(window).scrollTop() > innerHeight/4 && innerWidth > 960){
            $('#onas-h4').animate({marginLeft:"50px", opacity:1},1500);
            $('#onas-p').animate({marginLeft:"50px",opacity:1},1500);
        }else{
            $('#onas-h4').animate({marginLeft:"30px", opacity:1},1500);
            $('#onas-p').animate({marginLeft:"30px",opacity:1},1500);
        }
    });

    setInterval(function(){
        console.log($('#onas-p').css('margin-left'));
    },1000);
})
