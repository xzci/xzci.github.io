---
title: Build your Blog
categories:
 - Tech note
tags:
---

Here is a new pot to teach you how to build you own blog.


# Link your Blog to your Github

Use this command to create your own __ssh key__ ,

```
ssh-keygen -t rsa -C "your_email@exampl.com"
```
and then open the file  **~/.ssh/id_rsa.pub**  if you do not change the default save location. if you change it, open the file which named __id_rsa.pub__

* Open your github profile
* Click sittings
* Click SSH and GPG keys
* Paste the content into SSH Keys (make sure you do not miss even a single letter)

# Install environment

## Install node.js 

First I downed an old and stable version, but when I tried to install HEXO, I got bunch of warnings and errors. So I decide to install the newest one.

I copied the command here, in case I forget them again in the future.


```
// Update node
sudo npm cache clean -f //清除nodejs的cache：
sudo npm install -g n //使用npm安装n模块
npm view node versions // node所有版本
sudo n latest // 升级到最新版本
sudo n stable // 升级到稳定版本
sudo n xx.xx // 升级到具体版本号
```
```
// Update npm
sudo npm install npm@latest -g //升级到最新版
sudo npm install npm@xx -g //升级到指定版本
npm version // 查看版本详情
npm view npm version // npm最新版本
npm view npm versions // npm所有版本
npm list //  插件清单
```

Again, because of great wall of Internet in China,  if you were in there, you need some tools to make yourself have fully access to the Internet. Or use the registry below which built by employees from taobao who used node for their work very much.

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

## Install hexo

Make sure you are in the main direction, I mean in the root path, any way, you know the path which likes `/example_username`
If you do not do these steps I mention below in the root path, you will get a lot of warnings and errors.
And make sure you put `"sudo"` in each command you want to use.

install hexo,  `-g` means you want to install hexo in the global environment.

```
sudo npm install -g hexo
```

## Initialize Blog

Create you own address to store the local files of Blog. Here, as an example, __myblog__ means your blog's address.

Use the cd command to get in the position.

```
cd myblog
```

and initialize hexo files here.

```
hexo init
```

## Create local server
Now you get a fully functional Blog, which served by your own local servers. You can be use `localhost:4000` to access it.

You can use these to command to open it.
```
hexo g
hexo s
```

## Create your Blog

use this command to create you Blog, Do not worry, you just need type you filename as the title of new blogs. Hexo will do all the small things to help you to get more focus on the writing things.

```
hexo new filename
```

# Upload your Blog
You can use 

```
hexo g
hexo d
```
when you finish your blog, you can use `hexo d` to upload it, and you do not need to worry about any other things. If you want to use the layout of your blog, you can always open you local serve, to check them. The way you looked, will be the same as others who open your Blog on the Internet.  

