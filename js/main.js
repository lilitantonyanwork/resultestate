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
        focusOnSelect: true
    });

    $('.gallery-list').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
})