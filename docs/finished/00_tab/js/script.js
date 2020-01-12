// jQueryのコード ------------------- //
$(function () {
  console.log('読み込んだよ');

  let photoFlag = false;
  console.log(photoFlag);

  var btnEl = $('.btn');
  let photoEl = $('.photo').find('img');

  btnEl.on('click', function () {

    console.log('クリックしたよ');
    if (photoFlag == true) {
      photoEl.attr('src', 'img/works01.jpg');
      photoFlag = false;
    } else {
      photoEl.attr('src', 'img/works02.jpg');
      photoFlag = true;
    }
    console.log(photoFlag);

  });

});
