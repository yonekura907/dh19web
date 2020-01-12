// jQueryのコード ------------------- //
$(function () {

  $('header li').find('a').on('click', function () {

    // 1 クリックしたaタグのhref属性の値
    var targetName = $(this).attr('href');
    console.log(targetName);

    //2 idで指定した名前の上からのY座標
    var targetPosY = $(targetName).offset().top;
    console.log(targetPosY);

    //3アニメーション
    $('html,body').animate({
      scrollTop: targetPosY - 70
    }, 500);

    return false;
  });


  //クリックイベント on を使って .pagetopクリックしたよ
  $('.pagetop').find('a').on('click', function () {
    console.log('クリックしたよ');

    //上部にアニメーション
    // $('html,body').animate({
    //   scrollTop: 0
    // }, 500);

    $('html,body').animate({
      scrollTop: 0
    }, {
      'duration': 500
    }, {
      'easing': 'easeInQuart'
    });
    //リンクが効かなくなる
    return false;
  });


});
