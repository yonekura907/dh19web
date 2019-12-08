
# DOM(Document Object Model)



----

&nbsp;
&nbsp;


## DOMとは

Document Object Modelの略。JavaScriptからHTMLにアクセスする方法。

&nbsp;
&nbsp;

## HTMLの取得

### id名で取得

```
document.getElementById('myId');
```
&nbsp;


### クラス名で取得

```
document.getElementsByClassName('myClass');
```
&nbsp;

### タグ名で取得

```
document.getElementsByTagName('p');
```
&nbsp;



### 各要素を取得（最初に該当するもの）

```
document.querySelector('#container p');
```
&nbsp;

### 各要素を取得（該当する全ての要素）

```
document.querySelectorAll('p');
```
&nbsp;
&nbsp;

## スタイル(CSS)の適応
```
// 文字色
document.getElementById('myId').style.color = '#FF6699';

// 幅
document.getElementById('myId').style.width = '100px';
```

&nbsp;
&nbsp;

## 親子要素の取得

```
elem.parentNode; //親要素
elem.firstElementChild; //最初の子要素
elem.lastElementChild;  //最後の子要素
elem.children; //子要素リスト

```

&nbsp;
&nbsp;


## 兄弟要素の取得

```
elem.previousElementSibling; //１つ前の要素
elem.nextElementSibling; //１つ後の要素
```


&nbsp;
&nbsp;


## 要素の作成と追加

```
// #containerを取得
var containerEl = document.getElementById('container');
// imgタグを生成
var imgEl = document.createElement('img');
// src属性を追加
imgEl.setAttribute('src','img/dino.png');
// divタグにimgタグを追加
containerEl.appendChild(imgEl);
```

&nbsp;
&nbsp;

## 要素を特定の箇所に追加

```
elem.insertBefore(div, elem.firstChild); //最初の子要素として追加
elem.parentNode.insertBefore(div, elem); //要素の直前に追加
elem.parentNode.insertBefore(div, elem.nextSibling); //要素の直後に追加
```

&nbsp;
&nbsp;

## 属性の操作

```
elem.getAttribute('data-item'); //属性の取得
elem.setAttribute('data-item', 'value'); //属性を設定
elem.removeAttribute('data-item'); //属性を削除

```
&nbsp;
&nbsp;

## classの操作

```
elem.classList.add('show'); //class追加
elem.classList.remove('show'); //class削除
elem.classList.toggle('show'); //classをトグル
elem.classList.contains('show') // 引数のクラスが指定されていたらtrueを返す
```

&nbsp;
&nbsp;

## 要素の削除

```
elem.parentNode.removeChild(elem); //自分を削除
elem.removeChild(child); //特定の子要素削除
elem.textContent = null; //子要素を全て削除
```


&nbsp;
&nbsp;


---
