# 配列
変数のグループ保存。番号で管理

### 配列宣言

```
var 変数の名前 = [];
```

&nbsp;

### 配列の宣言と値の保存

```
// 配列の作成
var myArr = [];
// 配列myArrにデータを保存
myArr[0] = 10;
myArr[1] = 20;
myArr[2] = 30;
myArr[3] = 15;
myArr[4] = 5;

console.log(myArr[1]);
// コンソールの結果は20
```


&nbsp;
&nbsp;

### 宣言を省略した記述方法

```
var myArr = [10,20,30,15,5];
```


&nbsp;
&nbsp;


**length**

配列の数を調べる

```
myArr.length
```


&nbsp;
&nbsp;

# DOMから配列に保存する


#### index.html

```
<ul id="fruit">
	<li>アップル</li>
	<li>オレンジ</li>
	<li>グレープ</li>
	<li>イチゴ</li>
</ul>

```


#### script.js

```
 let fruitLi = document.querySelectorAll('#fruit li');
 let fruitArr = [].slice.call(fruitLi);

```
`document.querySelectorAll`で取得すると`NodeList`扱いになるので、`slice.call()`で配列に展開する



&nbsp;
&nbsp;


## 配列とランダム

```
// 1.配列でおみくじを作ってください
var omikuji = ["大吉","吉","凶","大凶"];


var btn = document.querySelector('#btn');

btn.addEventListener('click', function(){
    // 乱数
    var randNum = Math.floor(Math.random()*3);
    console.log(randNum);

	document.write(omikuji[randNum]);
});

```
&nbsp;
