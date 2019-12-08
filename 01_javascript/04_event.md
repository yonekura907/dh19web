


# イベント

----

&nbsp;
&nbsp;



## イベントとは

プログラミングでユーザーの挙動などによって、何か要素を変化させる場合、イベントという処理の流れが必要になる。

### イベントの種類

* マウスでクリックする
* マウスでダブルクリックする
* マウスが動く
* スマホで画面をタップする
* スマホで画面上を動く
* スマホで画面上から指が離れる
* キーボードのキーが押される
* ウインドウが閉じられる
* フォームに値が入力される
* データを読み込み始める
* データを読み込み終わる


&nbsp;
&nbsp;



## イベントと addEventListener

`addEventListener` を要素に付与することで、イベントを待つ状態になる。

```
// イベントの登録
要素.addEventListener(イベントの種類, 呼び出される関数);

```


&nbsp;
&nbsp;


## イベントの流れ

```
// #btnを取得
var btn = document.querySelector('#btn');

// イベントの定義　#btnをクリックしたら、
// 関数changeStyleが呼ばれる
btn.addEventListener('click', changeStyle);

// 関数の定義
function changeStyle(){
  document.querySelector('#ttl').style.color = '#FF0000';
}
```

&nbsp;
&nbsp;

## 無名関数を使ったイベントの流れ

関数定義を省略して、名前を付けずに関数を直接呼び出す。

```
// #btnを取得
var btn = document.querySelector('#btn');

// イベントの定義　#btnをクリックしたら、
btn.addEventListener('click', function(){
  document.querySelector('#ttl').style.color = '#FF0000';
});

```

&nbsp;
&nbsp;


---