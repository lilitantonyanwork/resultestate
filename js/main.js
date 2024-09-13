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

    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);

    function init() {
        // Создание карты.
        // https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/map-docpage/
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчнию: «широта, долгота».
            center:[52.09223207204043,23.688205499999917],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 18,
            nightModeEnabled: true,
            iconImageHref: 'img/marker.png',

            theme: 'dark',
            // Элементы управления
            // https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/controls/standard-docpage/
            controls: [

                'zoomControl', // Ползунок масштаба
                'rulerControl', // Линейка
                //'routeButtonControl', // Панель маршрутизации
                //'trafficControl', // Пробки
                //'typeSelector', // Переключатель слоев карты
                'fullscreenControl', // Полноэкранный режим

                // Поисковая строка
                /*new ymaps.control.SearchControl({
                    options: {
                        // вид - поисковая строка
                        size: 'large',
                        // Включим возможность искать не только топонимы, но и организации.
                        provider: 'yandex#search'
                    }
                })*/

            ]
        });


        // Добавление метки
        // https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Placemark-docpage/
        var myPlacemark = new ymaps.Placemark([52.09223207204043,23.688205499999917], {
            // Хинт показывается при наведении мышкой на иконку метки.
            hintContent: 'Всплывающая подсказка на Yandex карте <a href="https://problesk.com" target="_blank" >Ссылка </a>',
            // Балун откроется при клике по метке.
            balloonContent: 'Содержимое балуна, появляющееся при клике на него <a href="https://problesk.com" target="_blank" >Ссылка </a>'
        });

        // После того как метка была создана, добавляем её на карту.
        myMap.geoObjects.add(myPlacemark);
        setMapLayer();

    }
    ymaps.ready(init);

    function setMapLayer(){
        const DARK_MAP = 'custom#dark';
        ymaps.layer.storage.add(DARK_MAP, function DarkLayer() {
            // Ссылка на темные тайлы Яндекс.Карт
            // От стандартной отличается наличием &theme=dark
            return new ymaps.Layer(
                'https://core-renderer-tiles.maps.yandex.net/tiles?l=map&theme=dark&%c&%l&scale={{ scale }}',
            );
        });

        /* Связываем слой с типом карты */
        ymaps.mapType.storage.add(DARK_MAP, new ymaps.MapType('Dark Map', [DARK_MAP]));
    }
    function init() {

        var myMap = new ymaps.Map("map", {
            center: [52.09223207204043,23.688205499999917],
            zoom: 14,
            nightModeEnabled: true,
            theme: 'dark',
            iconImageHref: 'img/marker.png',
        });
        myMap.controls.remove('searchControl'); // удаляем поиск
        myMap.controls.remove('trafficControl'); // удаляем контроль трафика
        myMap.controls.remove('typeSelector'); // удаляем тип
        myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
        myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
        myMap.controls.remove('rulerControl'); // удаляем контрол правил
        myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

        // Все виды меток
        // https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/option.presetStorage-docpage/

        // Метка без содержимого с точкой в центре
        var placemark1 = new ymaps.Placemark([52.09223207204043,23.688205499999917], {

        }, {
            'preset': 'islands#nightDotIcon',
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/marker.png',
            // Размеры метки.
            iconImageSize: [44, 53],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-11,-53]
        });

        myMap.geoObjects.add(placemark1);


    }

})
