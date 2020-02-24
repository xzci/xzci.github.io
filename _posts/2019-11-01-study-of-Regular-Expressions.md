---
title: study of Regular Expressions
categories:
 - 中文笔记
tags:
- Regular Expressions
---
# 综述
    * 原字符 
    * 实例
    * 练习题

备注 每日一更 +代表更新 -代表还在占坑中（没有内容暂待更新）
更新内容：
* 新的元字符更新


# 编程依赖
使用C#作为正则表达式的学习工具，正则表达式在各种语言中都支持（自带或者相关的库）
在这里使用C#作为学习的工具。
C#中使用正则表达式可以有几种方式：
```c#
// 本次主要采用这样的实现方式（便于书写）
string[] s = { "catTheOtherText", "TheOtherTextcat",
               "TheOtherText", "TheOthercatText", "ThecOtheraTextt" };
string strRegular = "^cat";
foreach( var str in s)
{
    Match match = Regex.Match(str, @strRegular);
    if (match.Success)
    {
        Console.WriteLine(str + "    The Regular is  " + strRegular);
    }

}
```
这种方式比较便于理解，但是其实缺少了很多相关的设置条件，相关的设置条件，每个语言有所不同，如果有需要，需要查阅相关的手册，进行确认。如果有需要（比如设置忽略大小写，在shell里是在正则表达式之前添加参数 `-i`），则用如下的这种方式进行书写：
```c#
string[] s = { "catTheOtherText", "TheOtherTextcat",
               "TheOtherText", "TheOthercatText", "ThecOtheraTextt" };
string strRegular = "^cat";
// 这里的RegexOptions 提供了更多正则表达式的相关选项。
// 这里的IgnoreCase 是忽略大小写的含义
Regex reg = new Regex(@strRegular, RegexOptions.IgnoreCase);
foreach( var str in s)
{
    Match match = reg.Match(str);
    
    if (match.Success)
    {
        Console.WriteLine(str + "    The Regular is  " + strRegular);
    }

}
```

# 元字符
## ^
行的起始 如：`^cat` 取得行首是cat的行 

```c#
string[] s = { "catTheOtherText", "TheOtherTextcat",
               "TheOtherText", "TheOthercatText", "ThecOtheraTextt" };
string strRegular = "^cat";
// "catTheOtherText"
```
## $
行的结束 如： `cat$` 取得行尾是cat的行 
```c#
string[] s = { "catTheOtherText", "TheOtherTextcat",
                           "TheOtherText", "TheOthercatText", "ThecOtheraTextt" };
string strRegular = "cat$";
// output
// "TheOtherTextcat"
```

## []
匹配多个字符 如`[ab]` 匹配a或者b 
```c#
string[] s = { "aTheOtherText", "bTheOtherText",
               "abTheOtherText", "TheOtheraText", "b" };
string strRegular = "[ab]";
// output
// aTheOtherText    The Regular is  [ab]
// bTheOtherText    The Regular is  [ab]
// abTheOtherText    The Regular is  [ab]
// TheOtheraText    The Regular is  [ab]
// b    The Regular is  [ab]
```

### [-]
`[]`中的连字符，可以连接有顺序的序列 如：`[1-3]` 取1到3中任意__一个__数 
特别的`[0123456789abcdefgABCDEFG]`可以写作：`[0-9a-gA-G]` 或`[A-G0-9a-g]` (顺序无关)

### 展开
_（以后讲到）_ 只有`-`在`[]`中是作为有意义的字符，其他字符保留原来含义。
```c#
string[] s = { "2TheOtherText", "1TheOtherText",
               "90TheOtherText", "TheOtheraText", "9", "TheOther?Text" };
string strRegular = "[0-9?]";
// 2TheOtherText    The Regular is  [0-9?]
// 1TheOtherText    The Regular is  [0-9?]
// 90TheOtherText    The Regular is  [0-9?]
// 9    The Regular is  [0-9?]
// TheOther?Text    The Regular is  [0-9?]
```

### [^]
表示除此以外 如：`[^a]` 取得除了有a的行
也可以使用`[^0-9]` 取得除了只包含0-9的其他行
```c#
string[] s = { "123456", "Text",
               "?Text", "123456Text", "9" , "?", 
               "Text123456", "T123e45x6t" };
string strRegular = "[^0-9?]";
// Text    The Regular is  [^0-9?]
// ?Text    The Regular is  [^0-9?]
// 123456Text    The Regular is  [^0-9?]
// Text123456    The Regular is  [^0-9?]
// T123e45x6t    The Regular is  [^0-9?]
```

## |
或 如 `ab|ba` 匹配ab和ba
如同编程中的`|`（或）
```c#
string[] s = { "abc", "cba",
               "bca", "ab", "a"};
string strRegular = "ab|ba";
// abc    The Regular is  ab|ba
// cba    The Regular is  ab|ba
// ab    The Regular is  ab|ba
```

### ()
使用`()`包含`|`，限制`|`的作用范围 则只针对括号中的内容进行或匹配 如`a(ab|ba)` 匹配aab 或者aba
```c#
string[] s = { "abc", "cba",
                "bca", "ab", "a", "aab"};
string strRegular = "c(ab|ba)";
// cba    The Regular is  c(ab|ba)
```
值得注意的是，以下3者等价：
```c#
string strRegular1 = "(Geoff|Jeff)(rey|ery)";
string strRegular2 = "(Geo|Je)ff(rey|ery)";
string strRegular3 = "(Geo|Je)ff(re|er)y"
```
下面这种方式与上面3者也等价（较为蠢）
```c#
string strOtherWayRegular = "Jeffrey|Geoffery|Jeffery|Geoffrey"; 
```
## 单词分界符
C#的实现不同，本例参照所选用语言的正则表达式手册。
标准中提供`\<`和`\>` 来匹配单词的首位，和末尾。
C#中则只提供`\b` 匹配单词分割，不特别区分首尾（看放置于哪个部分）。

## 模糊匹配

### ?
__一定会被匹配到。__
必须前面有一个字符, 前面字符出现__0次或1次__ 如 `abca?` 匹配abc或者abca
一个有歧义，其实可以将多个用括号包裹起来，这样的话也算一个 如 `ab(abc)?` 匹配ababc或ab
```c#
string[] s = { "abca", "abcaaa",
                "abc", "abcd", "babcd"};
string strRegular = "abca?";
// abca    The Regular is  abca?
// abcaaa    The Regular is  abca?
// abc    The Regular is  abca?
// abcd    The Regular is  abca?
// babcd    The Regular is  abca?
```
```c#
string[] s = { "ababc", "abca",
                "babcdeg", "cbagcd" };
string strRegular = "ab(abc)?";
// ababc    The Regular is  ab(abc)?
// abca    The Regular is  ab(abc)?
// babcdeg    The Regular is  ab(abc)?
```

### +
必须前面有一个字符, 前面字符出现__1次或多次__ 如 `abca?` 匹配abca或者abcaa
```c#
string[] s = { "abca", "abcaaa",
                "abc", "abcd", "babcd"};
string strRegular = "abca+";
// abca    The Regular is  abca+
// abcaaa    The Regular is  abca+
```

### *
__一定会被匹配到。__
必须前面有一个字符, 前面字符出现__0次或多次__ 如 `ba?` 匹配b或者ba或者baa
```c#
string[] s = { "abca", "abcaaa",
                "abc", "abcd", "babcd"};
string strRegular = "abca*";
// abca    The Regular is  abca*
// abcaaa    The Regular is  abca*
// abc    The Regular is  abca*
// abcd    The Regular is  abca*
// babcd    The Regular is  abca*
```

### 展开 ? *
看了上面的例子是不是对这2个有点困惑。看起来结果是一样的。其实主要在于，只有存在于明确首尾的情况时，才能使之不同。比如：
`^aa?b`和`^aa*b`
```c#
string[] s = { "ab", "aaaab",
                "aab"};
string strRegular = "^aa?b";
// ab    The Regular is  ^aa?b
// aab    The Regular is  ^aa?b
```
```c#
string[] s = { "ab", "aaaab",
                "aab"};
string strRegular = "^aa*b";
// ab    The Regular is  ^aa*b
// aaaab    The Regular is  ^aa*b
// aab    The Regular is  ^aa*b
```


# 练习
## [][^]
    'q1xText', 'Textq1',
    'q2cText', 'Textq2c'
1. `q[0-9][^x]` 会匹配哪一个呢？

2. `q[0-9][^x]$`会匹配哪一个呢？

3. `^q[0-9][^x]`会匹配哪一个呢？

# 答案
1. q2cText    The Regular is  q[0-9][^x]
   Textq2c    The Regular is  q[0-9][^x]

2. Textq2c    The Regular is  q[0-9][^x]$

3. q2cText    The Regular is  ^q[0-9][^x]
