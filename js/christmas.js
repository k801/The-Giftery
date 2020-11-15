$(window).scroll(function(){



$offser_container=$('.container').offset().top;

console.log($offser_container);



})

$('.right-row,.slider-content button').click(function(){


    $('.right_slide').css({'transform':'translate(105%)','transition':'all 2s '});

// $('.right_slide').css({'right':'0px'});


})

$('.fa-heart').click(function(){


    $('.right_slide').css({'transform':'translate(-100%)','transition':'all 1s '});

// $('.right_slide').css({'right':'0px'});


})









// $('').css({'transform':'transalte(-105%)','transition':'all 1s'})
