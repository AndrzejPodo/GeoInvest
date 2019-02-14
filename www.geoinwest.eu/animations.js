$(document).ready(function(){
    $('.animated').hover(function(){
        $(this).find('p').animate({fontSize: $(this).height()*0.10+"px"})
    }, function(){
        $(this).find('p').animate({fontSize: "0px"})
    })
})
