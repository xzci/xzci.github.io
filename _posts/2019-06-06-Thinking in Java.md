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

```java
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

```java
public class Main {

    public static void main(String[] args) {
        double Speed = 12.1;
        double time = 60;
        System.out.println(Speed * time);
    }
}
```

## Test 5

创建一个名为Dog的类，它包含两个String域，name和says。 在main()方法种，创建两个Dog对象，一个名为Spot（它的叫声为“Ruff！”）另一个名为scruffy（它的叫声为“Wurf！”）然后显示它们的名字和叫声。

```java
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

## Test 6

创建一个新的Dog的索引，并对其赋值为spot对象，测试用==和equals（）来比较所有引用的效果

```java
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

## Test 7

编写一个程序模拟扔硬币的结果

```java
import java.util.*;

public class Main {

    public static void main(String[] args) {

        Random rand = new Random();
        int i;
        int index = 0;
        while (index != 10) {
            i = rand.nextInt(2);

            switch (i) {
                case 1:
                    System.out.println("head");
                    break;
                case 0:
                    System.out.println("tail");
                    break;
                default:
                    System.out.println("wrong random");
                    break;
            }
            index++;
        }

    }
}
```

## Test 8

使用 十六进制和八进制来操作long值。

```java
public class Main {

    public static void main(String[] args) {

       long l = 0xFFFFF;
       long l1 = 011111;

       System.out.println(Long.toBinaryString(l) + " " + l);
       System.out.println(Long.toBinaryString(l1) + " " + l1);

    }
}
```

## Test 9

分别显示float和double使用指数计数法表示的最大值和最小值

```java
public class Main {

    public static void main(String[] args) {

       System.out.println("Max value of float :" + Float.MAX_VALUE);
       System.out.println("Min value of float :" + Float.MIN_VALUE);
       System.out.println("Max value of double :" + Double.MAX_VALUE);
       System.out.println("Min value of double :" + Double.MIN_VALUE);

    }
}
```

## Test 10

一个具有交替的1和0，最低有效位为0，另一个最低有效位为1，使用位操作的所有方式结合他们

```java
public class Main {

    public static void main(String[] args) {
        String s = "10101010101010";
        String s1 = "101010101010101";
        int i = Integer.parseInt(s, 2);
        int i1 = Integer.parseInt(s1, 2);

        System.out.println("^ : " + (i ^ i1) + "  " + Integer.toBinaryString((i ^ i1)));
        System.out.println("| : " + (i | i1) + "  " + Integer.toBinaryString((i | i1)));
        System.out.println("& : " + (i & i1) + "  " + Integer.toBinaryString((i & i1)));
        System.out.println("~ : " + (~i1) + "  " + Integer.toBinaryString(~i1));
        System.out.println("~ : " + (~i) + "  " + Integer.toBinaryString(~i));


    }
}
```

## Test 11

最高位有效数字为1的数字开始，向右移位，知道所有二进制位都被移出为止

```java
public class Main {

    public static void main(String[] args) {

       String s = "111110111";

       int i = Integer.parseInt(s, 2);

       while(i != 0)
       {
           i >>= 1;
           System.out.println(i + " - " + Integer.toBinaryString(i));
       }
    }
}
```

## Test 12

所有位为1的数开始，先左移，然后右移，直到所有都被移出为止

```java
public class Main {

    public static void main(String[] args) {

       String s = "111111111";

       int i = Integer.parseInt(s, 2);

       i <<= 3;
       System.out.println(i + " - " + Integer.toBinaryString(i));
        
       while(i != 0)
       {
           i >>= 1;
           System.out.println(i + " - " + Integer.toBinaryString(i));
       }
    }
}
```

## Test 13

以二进制形式显示char类型的值

```java
public class Main {

    public static void main(String[] args) {

        char a[] = {'a', 'b', 'c', 'd'};

        for (int i : a) {
            System.out.println((char)i + " - " + i + " - " + Integer.toBinaryString(i));
        }

    }
}
```

# Chapter 4

## Test 1

打印1到100的值
```java
public class Main {

    public static void main(String[] args) {

        for(int i = 1; i <= 100; i++)
        {
            System.out.print(i + " ");
            if((i % 10) == 0)
            {
                System.out.println();
            }
        }

    }
}
```

## Test 2 & 3

生成25个随机数，判断与下一个数的关系（大于，小于，等于）

This question should be worth to think about it.
Java do not let you use some code like this below
```java
int r;
for(...)
print(r);
```
That will cause an error, __r__ might not be initialized. if you are familiar with C or C++, you maybe thought this code should be ok, but java does not allow it.
Java ask you to __initialize and define__ any value before you use it. 
```java
import java.util.Random;

public class Main {

    public static void main(String[] args) {

        Random rand = new Random();
        int r, temp = 0;
        r = rand.nextInt(100);
        System.out.println("The begin number is " + r);
        temp = r;
        for (int i = 0; i < 25; i++) {
            if (i == 0) {
                ;
            } else {
                r = rand.nextInt(100);
                if (r > temp)
                    System.out.println("No." + i + ", this time number is " + temp +
                            ", and next time the number is " + r +
                            ", and the status is Smaller");
                else if (r == temp)
                    System.out.println("No." + i + ", this time number is " + temp +
                            ", and next time the number is " + r +
                            ", and the status is equal");
                else
                    System.out.println("No." + i + ", this time number is " + temp +
                            ", and next time the number is " + r +
                            ", and the status is larger");
                temp = r;

            }

        }
        System.out.println("No.25, the final number is " + r);
    }
}
```
## Test 4

只用2层for和%找出素数

```java
```

## Test 5
略

## Test 6

## Test 7

使用break 和return 打到99

```java
// break
```

```java
// return
```