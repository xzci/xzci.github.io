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
        
### 初始化

* java 保证了保证所有的成员变量都会被初始化

相应的，如基本类型的 int， double 都有相应的固定的初始化值

如自己创建的变量（类） 则会按照类的构造函数进行初始化。

具体可以参加如下代码：
研究 如果仅仅在main 中 `new Cupboard(); `时， 产生的结果，不难得到：
初始化的顺序为 __static > 成员变量 > 构造函数__。

```java
import javax.management.MBeanNotificationInfo;

class Bowl {
    Bowl(int marker) {
        System.out.println("Bowl(" + marker + ")");
    }

    void f1(int marker) {
        System.out.println("f1(" + marker + ")");
    }
}

class Table {
    static Bowl bowl1 = new Bowl(1);

    Table() {
        System.out.println("Table()");
        bowl2.f1(1);
    }

    void f2(int marker) {
        System.out.println("f2(" + marker + ")");
    }

    static Bowl bowl2 = new Bowl(2);
}

class Cupboard {
    Bowl bowl3 = new Bowl(3);
    static Bowl bowl4 = new Bowl(4);

    Cupboard() {
        System.out.println("Cupboard()");
        bowl4.f1(2);
    }

    void f3(int marker) {
        System.out.println("f3(" + marker + ")");
    }

    static Bowl bowl5 = new Bowl(5);
}

public class Main {

    public static void main(String[] args) {
        System.out.println("Creating new Cupboard in main");
        new Cupboard();
        System.out.println("Creating new Cupboard in main");
        new Cupboard();
        table.f2(1);
        cupboard.f3(1);
    }

    static Table table = new Table();
    static Cupboard cupboard = new Cupboard();
}
```

out put

``` 
Bowl(1)
Bowl(2)
Table()
f1(1)
// 特别的应该注意-----------
Bowl(4)
Bowl(5)
Bowl(3)
Cupboard()
f1(2)
// -----------------------
Creating new Cupboard in main
Bowl(3)
Cupboard()
f1(2)
Creating new Cupboard in main
Bowl(3)
Cupboard()
f1(2)
f2(1)
f3(1)
```





