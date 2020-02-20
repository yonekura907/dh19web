// jQueryのコード ------------------- //
$(function () {

  var myFlag = false;

  var $btnEl = $('.btn');

  $btnEl.on('click', function () {

    console.log('クリックしたよ');
    if (myFlag == true) {
      myFlag = false;
    } else {
      myFlag = true;
    }
    console.log(myFlag);


    if (!myFlag) {
      $('.photo').find('img').attr('src', 'img/works01.jpg');
    } else {
      $('.photo').find('img').attr('src', 'img/works02.jpg');
    }

  });

});
