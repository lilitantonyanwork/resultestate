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
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },]
    });

    $('.gallery-list').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
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


})
let map;

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}

initMap();