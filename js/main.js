$(function (){
    $( "#slider-area" ).slider({
        range: true,
        min: 33,
        max: 119,
        values: [ 33, 119 ],
        slide: function( event, ui ) {

            $( ".area__end" ).text(ui.values[ 1 ] );
            $( ".area__start" ).text( ui.values[ 0 ]  );

        }
    });
    $( "#slider-price" ).slider({
        range: true,
        min: 100000,
        max: 590944,
        values: [ 100000, 590944 ],
        slide: function( event, ui ) {

            $( ".price__end" ).text(ui.values[ 1 ] );
            $( ".price__start" ).text( ui.values[ 0 ]  );
        }
    });

    $( "#slider-level" ).slider({
        range: true,
        min: 1,
        max: 8,
        values: [ 1, 8 ],
        slide: function( event, ui ) {

            $( ".price__end" ).text(ui.values[ 1 ] );
            $( ".price__start" ).text( ui.values[ 0 ]  );
        }
    });
    $( "#slider-byn" ).slider({
        range: true,
        min: 13000,
        max: 40000,
        values: [ 13000, 40000 ],
        slide: function( event, ui ) {

            $( ".price__end" ).text(ui.values[ 1 ] );
            $( ".price__start" ).text( ui.values[ 0 ]  );
        }
    });


    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: true,
        centerMode: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },

        ]
    });

    $('.gallery-list').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    $('.landing .apartments__banner').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        fade: true
    });
    $('.apartment__btn').on('click',function (){
        $('.apartment__btn').removeClass('apartment-selected');
        $(this).addClass('apartment-selected');
    })
    $('.floor').on('click',function (){
        $('.floor').removeClass(' floor--selected');
        $(this).addClass(' floor--selected');
    })
    $('.room').on('click',function (){
        $('.room').removeClass('room__active');
        $(this).addClass('room__active');
    });
    $('.mobile__menu--open').on('click',function (){
        $('nav').addClass('opened');
        $('.mobile__menu--close').show();
        $(this).hide()
    });
    $('.mobile__menu--close').on('click',function (){
        $('nav').removeClass('opened');
        $('.mobile__menu--open').show();
        $(this).hide()
    })
    $('.btn-play').on('click',function (){
        $(this).hide();
        $('.info__right img').hide();
        $('#video').show();
        $('#video').get(0).play()
    })



    $('.apartment__select').on('click',function (){
        $(this).toggleClass('close')
        $(this).siblings('div').toggleClass('close');
    })
    $('.clear').on('click',function (){
        resetSlider($('#slider-price'));
        resetSlider($('#slider-area'));
        $('.apartment__btn').removeClass('apartment-selected');
        $('.floor').removeClass(' floor--selected');
        $('.room').removeClass('room__active');
        $('.apartment__btn.default').addClass('apartment-selected');
        $('.floor.default').addClass('floor--selected');
        $('.room.default').addClass('room__active');

    })
    function resetSlider(sl) {
            var options = sl.slider( 'option' );
        sl.slider( 'values', [ options.min, options.max ] );
      sl.siblings('p').find('.start').text( options.min);
      sl.siblings('p').find('.end').text( options.max);

    }
    $('.ClickButtonsBig-button').on('click',function (){
        $('.ClickButtonsBig-button').removeClass('active');
        $(this).addClass('active')
    });
    $('.btn-orange, .btn-yellow').on('click',function (){
        $('.CallMe_back_modal').css('display','flex')
    })
    $('.tab__item').on('click',function (){
        $('.tab__item').removeClass('tab__item-selected');
        $(this).addClass('tab__item-selected');
        $('.gallery-list').hide();
        let tab = $(this).index() + 1;
        $('#tab-'+ tab).show();
        $('.gallery-list').slick('unslick');
        $('#tab-'+ tab).slick();


    })
    $('.palns__room-list div').on('click',function (){
        $('.palns__room-list div').removeClass('selected');
        $(this).addClass('selected');
    })

    $('.apartment__list--parking .apartment__btn').on('click', function (){
        $('.apartment__img--parking img').hide();
        $('.apartment__img--parking img').eq($(this).index() ).show()
    })
})
