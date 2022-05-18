---
title: HTML and CSS
categories:
 - 中文笔记
tags:
- HTML
- CSS
---

# HTML and CSS

This a note of studying HTML and CSS

## the first class - HTML

- Elements surrounded in angle brackets
- Usually have a start & end tag
- Some tags closse themselves(Remnant of XHTML)

__index.html__ is your __home page__.

Must use `<!DOCTYPE html> `and this means this page is using html 5

mac: __command + option + U__ show the source code of the website.

```html
<meta name="" content="">
shows on the search engine
<meta name="robots" content="NOINDEX, NOFOLLOW">
Do not index page
```

## Shortcut
__command + enter__ add a new ling whatever your mouse are

__shift + option + down__ copy the line

__option + arrows__ cross the words

__holding option + arrows__ move the line

__holidng option +  D__ select the same words(you can change them all)


w3school can provide:
- blocks level this element contain whole line and give an cross line
- inline element 


quick input __div#idname + tab__ =` <div id="idname"></div>`

__#idname + tab__ = `<div id="idname"></div>
` other need to be specificy

do not repeat id in the same page

HTML5 Semantic Tags


![](/Image/Semantic_Tags.png)


The difference between an ID and a class is that an ID is only used to identify one single element in our HTML. IDs are only used when one element on the page should have a particular style applied to it. However, a class can be used to identify more than one HTML element.




## CSS Units

Absolute

```
cm Centimeter
mm Millimeters
in Inches
px Pixels (1px = 1/96 of 1 in)
pt Ponint (1pt = 1/72 of 1 in)
pc Picas picas (1pc = 12 pt)
```

Relative
```
%   To parent element
em  To font-size of parent element
rem To font size of root element
vw  To 1% of viewport width
vh  To 1% of viewport height
```

## Useful links

find beauty color:
https://www.color-hex.com/

font icon:
https://fontawesome.com/start

add font:
https://fonts.google.com/

photo engine:
https://unsplash.com/developers

cdnjs is a free and open-source CDN service:
https://cdnjs.com/



```
- margin
-- border (outside)
--- padding (inside)
---- element
```

the one in the furthdown will overwirte the furthup in css

## display

make inline as block :
```
display: block;
```

make block as inline :
```
display: inline;
```

make block as inline and use margin and width:
```
display: inline-block;
```

## Position

__Static__ Not effected by tblr(Top, bottom, left, right) properties/values

__Relative__ tblr values cause element to be moved from its normal position

__Absolute__ Positioned relative to its parent element that is positioned "relative"

__Fixed__ Positioned relative to the viewport

__Sticky__ Positioned based on scroll position

## Responsive Design

### Practices To Use
- Set the viewport / scale
- Use fluid widths as oppose to fixed 
- Media queries - Different css styling for different screeen sizes
- Rem units over px
- Mobile first method


## Em & Rem

Rem is only based on root

```
change the base root font size
html {
      font-size: 10px;
    }
```

em is based on the element which in front of it


## Alognment Properties

- justify-content: Align along the main axis (horizontal)
- align-item: Align item along the cross axis(Vertical)
- align-content: Align when extra space in cross axis

## Warming

```
.example .pp = E F 是后代选择器。

.example.pp2 则是在一个元素上，这个元素包括这两个类才会有效果。
```