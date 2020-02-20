//HTMLを読み込み終わったら
$(function () {

  //nav
  var navEl = $('header').find('nav');
  //navの高さ
  var navContainerTop = $('.nav-container').offset().top;
  // console.log(navContainerTop);


  //ウインドウの高さ
  var windowHeight = $(window).height();
  console.log('windowの高さ' + windowHeight);


  //loadingを消すアニメーション
  //jsのタイマー
  setTimeout(function () {
    $('#loading').addClass('fade-out');
  }, 1000);


  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 5000
    },
    effect: 'fade',

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

  })









  //スクロールイベント
  $(window).on('scroll', function () {
    //スクロールの高さを取得
    var scrollValue = $(this).scrollTop();
    // console.log(scrollValue);

    //もしスクロール値がnavContainer以上になったら
    if (scrollValue >= navContainerTop) {
      navEl.addClass('nav-fixed');
    } else {
      navEl.removeClass('nav-fixed');
    }


    //グラフィックの高さ
    // var graphicTop = $('.graphic').offset().top;
    // console.log('graphicTop' + graphicTop);

    // if (scrollValue >= graphicTop - windowHeight + 150) {
    //   $('.graphic').addClass('in');
    // }

    //スクロールフェードイン
    $('.scroll-fade').each(function () {
      //scroll-fadeの高さ
      var scrollFadeTop = $(this).offset().top;
      if (scrollValue >= scrollFadeTop - windowHeight + 150) {
        $(this).addClass('in');
      }
    });


  });
});
