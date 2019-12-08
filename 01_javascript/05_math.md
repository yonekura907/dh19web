# 計算

&nbsp;
&nbsp;


## 四則計算


 * `+` 足し算
 * `-` 引き算
 * `*` 掛け算
 * `/` 割り算
 * `%` 余りを求める

&nbsp;

```
var numA = 10;
var numB = 20;
var addNum = numA + numB;
console.log(addNum);

```

&nbsp;


| 記述法 | 意味 |
|-----------|------------|
| a++ | 変数 a の値に 1 を足して再度変数 a に代入 |
| a-- | 変数 a の値から 1 を引いて再度変数 a に代入 |
| a += 2; | 変数 a の値に 2 を足して再度変数 a に代入 |
| a -= 2; | 変数 a の値から 2 を引いて再度変数 a に代入 |

&nbsp;
&nbsp;

## Math.random()

`Math.random()` 0から1の間でランダムな数値データを作る式。

```
// 0〜10の間でランダムな数値を返す場合
var randNum = Math.random() * 10;

```

&nbsp;
&nbsp;

## Math.floor()

引数として与えた数以下の最大の整数を返す

```
console.log(Math.floor(5.95));
// expected output: 5
```
