
    $('.load-background').each(function(){
        $(this).css('background-image','url('+$(this).find('img').attr('src')+')');
    });


    //Fixed menu
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();

        if( scroll > $('#main-header').outerHeight() + 100){
            $('#top-bar').addClass('fixed-bar');
        }else{
            $('#top-bar').removeClass('fixed-bar');
        }

        if( scroll > $('#main-header').outerHeight()+200 ){
            $('#top-bar').addClass('visible-fixed-bar');
        }else{
            $('#top-bar').removeClass('visible-fixed-bar');
        }
    });
