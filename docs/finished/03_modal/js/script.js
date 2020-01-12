// jQueryのコード ------------------- //
$(function () {

  //変数を作って.modalを保存
  var modalEl = $('.modal');
  var modalContainerEl = $('.modal-container');
  console.log(modalEl);

  //クリックしたら
  $('.photo').find('li').on('click', function () {
    console.log('クリックしたよ');


    //1 クリックした liの中にあるimgのsrc属性を読む
    var getImgSrc = $(this).find('img').attr('src');
    console.log(getImgSrc);

    //2 modal-containerの中のimgタグにsrc属性getImgSrcを入れる
    modalContainerEl.find('img').attr('src', getImgSrc);



    //classのshowを付与
    modalEl.addClass('show');
  });

  //closeをクリックしたら
  $('.close').on('click', function () {
    modalEl.removeClass('show');
  });

});
