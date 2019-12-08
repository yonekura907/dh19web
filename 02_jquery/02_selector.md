
# jQuery セレクタ



----

&nbsp;
&nbsp;


## タグ/id/classの取得

JavaScript側からHTMLタグを取得する。jQueryではCSS風の記述で取得することができる。

#### index.html

```
<h1>ドリンクメニュー</h1>
<h2 id="title">本日のコーヒー</h2>
<p class="type">ホット</p>
```
#### script.js

```
$('h1'); //h1タグを取得
$('#title'); //h2タグを取得
$('.type'); //pタグを取得
```
> '$' はjQueryの略


&nbsp;
&nbsp;


## 親要素の名前から子要素の取得


#### index.html

```
<div class="container">
	<h2 id="title">本日のコーヒー</h2>
</div>
```
#### script.js

```
$('.container #title');  //.containerの中の#title
```
> 半角スペースで子要素にアクセスする


&nbsp;

### find
 
#### script.js

```
$('.container).find('#title');  //.containerの中の#title
```
> .find()で子要素から探す


&nbsp;
&nbsp;


## CSSの適用

.css();の命令でCSSのプロパティが適応できる

#### index.html

```
<h1>ドリンクメニュー</h1>
<h2 id="title">本日のコーヒー</h2>
<p class="type">ホット</p>
```
#### script.js

```
$('h1').css('color','#FF0000'); //文字色の変更
$('#title').css('background-color','#EFEFEF'); //背景色の変更
$('.type').css({
			'fonnt-size':'15px',
			'color':'#00FF00',
			'background-color','#EFEFEF'
			}); 
```

&nbsp;
&nbsp;

### liの適用

#### index.html

```
<ul id="menu">
	<li>ブレンドコーヒー</li>
	<li>カプチーノ</li>
	<li>カフェラテ</li>
	<li>キャラメル マキアート</li>
</ul>
```
#### script.js

```
//（0から数えて）2番目
$('#menu').find('li:eq(2)').css("color", "#00FF00");
```


&nbsp;
&nbsp;

---
