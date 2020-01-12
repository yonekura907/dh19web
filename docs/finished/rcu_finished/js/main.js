//HTMLを読み込み終わったら
$(function () {
    // console.log('jquey読み込んだよ');

    //navの高さ
    var navContainerTop = $('.nav-container').offset().top;
    //グローバルナビゲーションを取得
    var navEl = $('header').find('nav');

    //ウインドウの高さ
    var windowHeight = $(window).height();
    // var fadeInTop = $('.fade-in').offset().top;
    // console.log(fadeInTop);

    var loading = $('#loading');
    setTimeout(function () {
        loading.addClass('inactive');
    }, 1000);


    // swiper
    //initialize swiper when document ready
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 5000,
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        }
    });


    //スクロールイベント
    $(window).on('scroll', function () {

        //スクロールのY座標
        var scrollValue = $(this).scrollTop();
        // console.log(scrollValue);

        // ナビゲーション固定 ----------------------
        //もしスクロール値がnavの高さを超えたら
        if (scrollValue >= navContainerTop) {
            navEl.addClass('nav-fixed');
        } else {
            navEl.removeClass('nav-fixed');
        }

        //スクロールのフェードイン -----------------
        // var fadeInEl = $('.fade-in');
        $('.scroll-fade').each(function () {
            //.fade-inのY座標を調べる
            var fadeInTop = $(this).offset().top;
            if (scrollValue >= fadeInTop - windowHeight + 0) {
                $(this).addClass('in');
            }
        });

    });

});
