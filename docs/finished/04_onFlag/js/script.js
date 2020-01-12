// jQueryのコード ------------------- //
$(function () {


  var animeFlag = false; //フラグが下がっている

  $('.btn').on('click', function () {
    console.log('クリックしたよ');

    console.log(animeFlag);



    //下がっている時にしか押せなくする
    if (animeFlag == false) {

      $('.photo').toggleClass('show');

      animeFlag = true; //フラグを上げた

      console.log(animeFlag);


    }


    //タイマーを入れて0．7秒過ぎたら
    setTimeout(function () {
      animeFlag = false;
      console.log(animeFlag);

    }, 800);




  });

});
