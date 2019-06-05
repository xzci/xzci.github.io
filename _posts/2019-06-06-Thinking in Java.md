---
title: Thinking in Java
categories:
 - Answer
tags:
- Java 
---

Here is the answer of <Thinking in Java> which is made by myself.

# Chapter 3

## Test 2 & 3

创新一个包含一个float的类，并用这个类来展现别名机制。

```Java
public class Main {

    public static void main(String[] args) {
        Test test1 = new Test();
        Test test2 = new Test();
        System.out.println("Init data:");
        System.out.println("test1.i = " + test1.i);
        System.out.println("test2.i = " + test2.i);

        System.out.println("use class.value = class.value:");
        test1.i = test2.i = 100;

        System.out.println("test1.i = " + test1.i);
        System.out.println("test2.i = " + test2.i);

        System.out.println("use class = class:");
        test1 = test2;
        test1.i = 45;

        System.out.println("test1.i = " + test1.i);
        System.out.println("test2.i = " + test2.i);

    }
}

class Test {
    float i = 12.0f;
}
```
## Test 4

编写一个计算速度的程序，它所使用的距离和时间都是常量。

```Java
public class Main {

    public static void main(String[] args) {
        double Speed = 12.1;
        double time = 60;
        System.out.println(Speed * time);
    }
}
```

# Test 5
创建一个名为Dog的类，它包含两个String域，name和says。 在main()方法种，创建两个Dog对象，一个名为Spot（它的叫声为“Ruff！”）另一个名为scruffy（它的叫声为“Wurf！”）然后显示它们的名字和叫声。

```Java
public class Main {

    public static void main(String[] args) {
        Dog spot = new Dog("spot", "Ruff!");
        Dog scuffy = new Dog("scuffy","Wurf!");

        System.out.println("Name is " + spot.name + ", says: " + spot.says);
        System.out.println("Name is " + scuffy.name + ", says: " + scuffy.says);
    }
}

class Dog {
    public
    String name;
    public
    String says;

    Dog(String name, String says)
    {
        this.name = name;
        this.says = says;
    }
}
```

# Test 6
创建一个新的Dog的索引，并对其赋值为spot对象，测试用==和equals（）来比较所有引用的效果

```Java
public class Main {

    public static void main(String[] args) {
        Dog spot = new Dog("spot", "Ruff!");
        Dog spot1 = new Dog();
        spot1.says = spot.says;
        spot1.name = spot.name;

        System.out.println("use == :  ");
        System.out.println(spot == spot1);
        System.out.println("use equal");
        System.out.println(spot.equals(spot1));
    }
}
```