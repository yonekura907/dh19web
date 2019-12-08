# 属性 attribute

&nbsp;
&nbsp;


## 属性とは


```
<img src="main.jpg" alt="メイン画像">

```
* `src`属性
* `alt`属性

> `src`属性の値が`main.jpg`、`alt `属性の値が`メイン画像`



&nbsp;
&nbsp;


## HTMLタグのクラス変更

### addClass

HTMLタグにクラスを付与する

```
addClass('クラス名');
```

&nbsp;

### removeClass

HTMLタグからクラスを削除する

```
removeClass('クラス名');
```


&nbsp;

### toggleClass

HTMLタグからクラスを付与と削除を交互に行う

```
toggleClass('クラス名');
```




&nbsp;
&nbsp;


## attr

HTMLタグの属性をjQueryで操作する

```
attr('属性名');
```
attrの中に属性名を入れると属性の値が取得できる

```
attr('属性名','値');
```
attrの中に属性名と値を入れると属性の値を変更できる


&nbsp;

index.html

```
<div class="main">
	<img src="main.jpg" alt="メイン画像">
</div>
```

script.js

```
$('.main').find('img').attr('src','sub.jpg');

```

&nbsp;
