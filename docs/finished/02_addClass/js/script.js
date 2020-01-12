// jQueryのコード ------------------- //
$(function () {
  // .accordionの中のdtをクリックしたら
  // $('.accordion').find('dt').on('click',

  $('.accordion').find('dt').on('click', function () {
    console.log('dtクリックしたよ');
    // $('.accordion').find('dd').toggleClass('show');
    $(this).next().toggleClass('show');

  });
  //ddの方にclass .showを付与
  // $('.accordion').find('dd').toggleClass('show');

});
