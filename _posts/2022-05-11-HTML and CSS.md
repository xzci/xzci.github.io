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

## Warming

```
.example .pp = E F 是后代选择器。

.example.pp2 则是在一个元素上，这个元素包括这两个类才会有效果。

do not repeat id in the same page
```

## The basic of HTML

- Elements surrounded in angle brackets
- Usually have a start & end tag
- Some tags closse themselves(Remnant of XHTML)

**index.html** is your **home page**.

Must use `<!DOCTYPE html> `and this means this page is using html 5.

```html
<!-- the content showed on the search engine -->
<meta name="" content="" />
<!-- Do not index page -->
<meta name="robots" content="NOINDEX, NOFOLLOW" />
```

w3school can provide:

- blocks level this element contain whole line and give an cross line
- inline element

Quick input **div#idname + tab** =` <div id="idname"></div>`

**#idname + tab** = `<div id="idname"></div> ` other need to be specificy

HTML5 Semantic Tags:

![](/Image/Semantic_Tags.png)

The difference between an ID and a class is that an ID is only used to identify one single element in our HTML. IDs are only used when one element on the page should have a particular style applied to it. However, a class can be used to identify more than one HTML element.

## CSS selectors

- Descendant Selector (space)
- Child Selector (>)
- Adjacent Sibling Selector (+)
- General Sibling Selector (~)

```html
<div class="container">
  <p>Apple</p>
  <div>
    <p>An apple a day keeps doctor away!</p>
  </div>
  <p>Banana</p>
  <p>Cherry</p>
</div>
```

### Space Symbol

```css
div.container p {
  font-size: 20px;
}
```

It is called the Descendant selector. It will target all <p> tags within container div. All <p> elements that are children of #container at any depth.

### ‘>’ Symbol

This is called the child selector. CSS rules will be applied to elements which are direct children of the particular element.

It will target all the `<p>` tags which are immediate children of container `<div>`, but **the children of children will not be selected**

### ‘+’ Symbol

This is Adjacent Sibling Selector. It selects all elements that are the adjacent siblings of a specified element.

Sibling elements must have the same parent element, and “adjacent” means **“immediately following”**.

### ‘~’ Symbol

It is General Sibling Selector and similar to Adjacent Sibling Selector. It selects **all** next elements that are siblings of a specified element.

The following example selects all next `<p>` elements that are siblings of `<div>` elements.

## Shortcut

**command + enter** add a new ling whatever your mouse are

**shift + option + down** copy the line

**option + arrows** cross the words

**holding option + arrows** move the line

**holidng option + D** select the same words(you can change them all)

mac: **command + option + U** show the source code of the website.

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

jquery:
https://releases.jquery.com/

LIGHTBOX:
https://lokeshdhakar.com/projects/lightbox2/

generate the icon in the website title:
http://tools.dynamicdrive.com/favicon/

## display

```
- margin
-- border (outside)
--- padding (inside)
---- element
```

the one in the furthdown will overwirte the furthup in css

make inline as block :

```css
display: block;
```

make block as inline :

```css
display: inline;
```

make block as inline and use margin and width:

```css
display: inline-block;
```

## Position

**Static** Not effected by tblr(Top, bottom, left, right) properties/values

**Relative** tblr values cause element to be moved from its normal position

**Absolute** Positioned relative to its parent element that is positioned "relative"

**Fixed** Positioned relative to the viewport

**Sticky** Positioned based on scroll position

## Responsive Design

### Practices To Use

- Set the viewport / scale
- Use fluid widths as oppose to fixed
- Media queries - Different css styling for different screeen sizes
- Rem units over px
- Mobile first method

## Em & Rem

Rem is only based on root

```css
/* change the base root font size */
html {
  font-size: 10px;
}
```

em is based on the element which in front of it

## Alognment Properties

- justify-content: Align along the main axis (horizontal)
- align-item: Align item along the cross axis(Vertical)
- align-content: Align when extra space in cross axis

## Types of Web Hosting

- Shared Hosting
- VPS Hosting
- Dedicated Server
- Reseller Hosting
- Cloud Hosting
- Static Hosting

### Shared Hosting

- One account of many on a server (same environment)
- Cheapest(aside from free static hosting)
- Used for small websites
- Most include email, FTP, PHP, databases, software
- $3 ~ $15 per month

Example: Inmotion Hosting, Hostgator, Bluehost

### VPS Hosting（Virtual Private Server)

- Your own virtualized server
- Can create & multiple shared accounts
- More access & privileges
- Everything shared hosting offers
- $20 ~ $100 per month

Example: Inmotion Hosting, Hostgator, Bluehost

### Dedicated Server

- Your own actual server
- You rent out a physcial machine
- Full access & privileges
- Header to manager but very powerful
- $100 ~ $400 per month

Example: Inmotion Hosting, Hostgator, Bluehost

### Reseller Hosting

- Can create & multiple shared accounts
- Can sell shared accounts to your own customers
- Very similar to a VPS
- Usually comes with reseller software
- $15 ~ $100q per month

Example: Inmotion Hosting, Hostgator

### Cloud Hosting

- Used for web apps
- Multiple servers work together
- Very scalable and great for large apps
- Not for beginners / harder to manager
- pay as you go

Example: Digital Ocean, Linode, Vultr

### Static Hosting

- Does not come with bells and whistles of managed hosting
- Upload static site via Git
- Great for static websites
- Free, but pay for extra features

Example: Netlify, Github Pages
