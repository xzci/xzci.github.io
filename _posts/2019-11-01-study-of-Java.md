---
title: study of Java
categories:
 - 中文笔记
tags:
- Java 
---

# 综述
    * Java 9 有坑 (+) 11-18
    * Java 学习
    * Java 学习

备注 每日一更 +代表更新完成。-为待续
<!--more-->

java 9 对环境变量做了改动，原来的**：.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;** 中的**dt.jar** 和**tools.jar** 被取消了。所以现在只需要一个__[ . ]__
嗯。就是这样。
        
* JAVA_HOME
    JDK installation path, example: C:\Program Files\Java\jdk-9


* CLASSPATH 
    . (just a dot)


* PATH 
    It may already exists on your system under the name Path, so edit its value by adding at the end: %JAVA_HOME%\bin; If it not exists already, create a new one with the value %JAVA_HOME%\bin; 
        


