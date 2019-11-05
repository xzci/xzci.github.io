---
title: Thinking in Java
categories:
- Answers
tags:
- Java 
---

Here is some answers of __Thinking in Java__, during the time i am studying Java, I find lots of differences and improvements between C++. I try my best to finish all questions behind every chapters, because I think the best way to study a programming language is to code as much as can. And here they are, these questions can be good practices for me to train my coding ability.  __last update: 19_06_10__ 
 

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
import java.util.Random;

public class Main {

    public static void main(String[] args) {

        Chapter4 c = new Chapter4();
        c.CheckPrimeNumber0ToInput(0);
    }
}

class Chapter4 {
    //you should type a number which is larger than 0
    void CheckPrimeNumber0ToInput(int num) {
        int isPrimeNumber = 0;

        for (int j = 0; j <= num; j++) {
            if (j == 1 || j == 0)
                isPrimeNumber = 1;
            else {
                for (int i = 2; i < j; i++)
                    if ((j % i) == 0)
                        isPrimeNumber++;
            }
            if (isPrimeNumber == 0)
                System.out.println(j + " is Prime Number");
            else
                System.out.println(j + " is not Prime Number");
            isPrimeNumber = 0;
        }
    }
}
```

## Test 5
略

## Test 6

增加两个参数，判断输入是否是在他们之间

```java
public class Main {
    static int test(int testval, int target, int begin, int end)
    {
        int returnValue = 0;
        if(testval > target)
            returnValue = 1;
        else if (testval < target)
             returnValue = -1;
        else
            returnValue = 0;
        if(testval <= end && testval >= begin)
            System.out.println("test value is within the range");
        else
            System.out.println("test value is not within the range");

        return returnValue;

    }
    public static void main(String[] args) {
        System.out.println(test(5,10,2,8));
        System.out.println(test(5,0,1,3));
    }
}
```

## Test 7

使用break 和return 打到99

```java
// break
public class Main {
    static void test() {
        for (int i = 1; i <= 100; i++) {

            System.out.print(i + " ");
            if ((i % 10) == 0) {
                System.out.println();
            }
            if (i == 99)
                break;
        }
    }

    public static void main(String[] args) {
        test();
    }
}
```

```java
// return
public class Main {
    static void test() {
        for (int i = 1; i <= 100; i++) {

            System.out.print(i + " ");
            if ((i % 10) == 0) {
                System.out.println();
            }
            if (i == 99)
                return;
        }
    }

    public static void main(String[] args) {
        test();
    }
}
```

## Test 8

写一个switch 开关，放入for中测试每次的情况，测试有break和没有break的区别

```java
// with break
public class Main {
    
    public static void main(String[] args) {

        for (int i = 0; i != 3; i++) {
            switch (i) {
                case 0:
                    System.out.println("First");
                    break;
                case 1:
                    System.out.println("Second");
                    break;
                case 2:
                    System.out.println("Third");
                    break;
            }
        }
    }
}
```

```java
public class Main {

    public static void main(String[] args) {

        for (int i = 0; i != 3; i++) {
            switch (i) {
                case 0:
                    System.out.println("First");
                case 1:
                    System.out.println("Second");
                case 2:
                    System.out.println("Third");
            }
        }
    }
}
```

## Test 9

输出斐波那契数列

```java
public class Main {

    public static void main(String[] args) {
        Fibonacci f = new Fibonacci(5);
    }
}

class Fibonacci {
    Fibonacci(int index) {
        for (int i = 1; i <= index; i++) {
            System.out.println(fibonacci(i));
        }
    }

    int fibonacci(int i) {
        if (i == 1 || i == 2)
            return 1;
        else
            return fibonacci((i - 1)) + fibonacci((i - 2));
    }
}
```

## Test 10

输出4位数的吸血鬼数

In this question, I made a big mistake, I should use method to replace the codes, because they are nearly same. (method in some way can help you type less code and make it readable).

for example:

>((ones * 10 + tens) * (hundreds * 10 + thousands) == i)

I should add the new methods:

```java
static int multiply(int i, int j)
{
    return i * 10 + j;
}

static boolean check(int number, int i, int j)
{
    return number == (i * j);
}
static void print(int ones, int tens, int hundreds, int thousands)
{
    System.out.println("The Vampire number is " + i +
                        " --" + ones + tens + " * " + hundreds + thousands);
}
```
and replace my code like this:

```java
// ....
// In this way, you can make your code look well and readable.
if(check(i, multiply(ones, tens), multiply(hundreds, thousands)))
    print(ones, tens, hundreds, thousands);
// ....
```
and here is my old answer. pretty messy.

```java
public class Main {

    public static void main(String[] args) {
        VampireNumber v = new VampireNumber();
        v.vampireNumber();
    }
}


class VampireNumber {
    void vampireNumber() {
        int ones, tens, hundreds, thousands;
        for (int i = 1000; i < 10000; i++) {
            
            ones = i % 10;
            tens = i / 10 % 10;
            hundreds = i / 100 % 10;
            thousands = i / 1000;

            if(ones == 0 && tens == 0)
                continue;
            // 1
            if ((ones * 10 + tens) * (hundreds * 10 + thousands) == i)
            {
                System.out.println("The Vampire number is " + i +
                        " --" + ones + tens + " * " + hundreds + thousands);
            }
            // 2
            else if ((ones * 10 + tens) * (thousands * 10 + hundreds) == i)
            {
                System.out.println("The Vampire number is " + i +
                        " --" + ones + tens + " * " + thousands + hundreds);
            }
            // 3
            else if ((ones * 10 + hundreds) * (tens  * 10 + thousands) == i)
            {
                System.out.println("The Vampire number is " + i +
                        " --" + ones + hundreds + " * " + tens + thousands);
            }
            // 4
            else if ((ones * 10 + hundreds) * (thousands * 10 + tens) == i)
            {
                System.out.println("The Vampire number is " + i +
                        " --" + ones + hundreds + " * " + thousands + tens);
            }
            // 5
            else if ((ones * 10 + thousands) * (tens * 10 + hundreds) == i)
            {
                System.out.println("The Vampire number is " + i +
                        " --" + ones + thousands + " * " + tens + hundreds);
            }
            // 6
            else if ((ones * 10 + thousands) * (hundreds * 10 + tens) == i)
            {
                System.out.println("The Vampire number is " + i +
                        " --" + ones + thousands + " * " + hundreds + tens );
            }

            // 21 34
            else if ((tens * 10 + ones) * (hundreds * 10 + thousands) == i)
            {
                System.out.println("The Vampire number is " + i +
                        " --" + tens + ones + " * " + hundreds + thousands);
            }
            // 23 41
            else if ((tens * 10 + hundreds) * (thousands * 10 + ones) == i)
            {
                System.out.println("The Vampire number is " + i +
                        " --" + tens + hundreds + " * " + thousands + ones);
            }
            // 24 31
            else if ((tens * 10 + thousands) * (hundreds * 10 + ones) == i)
            {
                System.out.println("The Vampire number is " + i +
                        " --" + tens + thousands + " * " + hundreds + ones);
            }

            // 31 42
            else if ((hundreds * 10 + ones) * (thousands * 10 + tens) == i)
            {
                System.out.println("The Vampire number is " + i +
                        " --" + hundreds + ones + " * " + thousands + tens);
            }
            // 32 41
            else if ((hundreds * 10 + tens) * (thousands * 10 + ones) == i )
            {
                System.out.println("The Vampire number is " + i +
                        " --" + hundreds + tens + " * " + thousands + ones);
            }
        }
    }
}
```


# Chapter 5

## Test 1

创建类，包含一个string，验证被初始化为了null

```java
public class Main {

    public static void main(String[] args) {
        Test t = new Test();
        if(t.str == null)
            System.out.println("It's null");
        else
            System.out.println("It isn't null");
    }
}

class Test {
    String str;
}
```

## Test 2

创建类，判断差异，一个string在定义时被初始化，一个通过构造器初始化

```java
public class Main {

    public static void main(String[] args) {

        Test t = new Test("a value");
        System.out.println("t.str " + t.str);
        System.out.println("t.testStr " + t.testStr);

        Test t1 = new Test();
        System.out.println("t1.str " + t1.str);
        System.out.println("t1.testStr " + t1.testStr);

        t1.str = "131";
        t1.testStr = "13123";
        System.out.println("t1.str " + t1.str);
        System.out.println("t1.testStr " + t1.testStr);
    }
}

class Test {
    String str = "get";
    String testStr;
    Test(String testStr)
    {
        this.testStr = testStr;
    }
    Test()
    {

    }
}
```
## Test 3

创建一个默认构造器，打印一行话

```java
public class Main {

    public static void main(String[] args) {
        Test t = new Test();
    }
}

class Test {
    Test() {
        System.out.println("This is a sentence");
    }
}
```

## Test 4

为上一个问题添加一个重载的构造器，接受一个字符串参数，把自己的话和新增的话打印出来

```java
public class Main {

    public static void main(String[] args) {
        Test t = new Test();
        Test t1 = new Test("again??");
    }
}

class Test {
    Test() {
        System.out.println("This is a sentence");
    }
    Test(String str)
    {
        System.out.println("This is a sentence. " + str);
    }
}
```

## Test 5
创建一个Dog类，有一个重载的bark()方法，打印不同类型的狗吠barking，咆哮 howling

```java
public class Main {

    public static void main(String[] args) {
        Dog myDog = new Dog(1);
        Dog yourDog = new Dog("1");
    }
}

class Dog {
    Dog(int i) {
        System.out.println("Barking");
    }

    Dog(String str) {
        System.out.println("Howling");
    }
}
```

## Test 6

设置2个参数来实现重载，但是顺序不同，判断是否工作

Because java does not Implicit convert data type, so these codes will all be fine to Java.
But if you were writing C++ code, you should pay much attention on these.

```java
public class Main {

    public static void main(String[] args) {
        Dog dog1 = new Dog(1,1);
        Dog dog2 = new Dog(1,1.0);
        Dog dog3 = new Dog(1.0,1.0);
        Dog dog4 = new Dog(1.0f,1.0);
        Dog dog5 = new Dog(1.0,1.0f);
        Dog dog6 = new Dog(1,1.0f);
        Dog dog7 = new Dog(1.0f,1);
        Dog dog8 = new Dog(1.0,1);
        Dog dog9 = new Dog(1,1l);
        Dog dog10 = new Dog(1l,1);
    }
}

class Dog {
    Dog(int i,float j) {
        System.out.println("int float");
    }
    Dog(double i, double j) {
        System.out.println("double double");
    }
    Dog(int i, int j) {
        System.out.println("int int");
    }
    Dog(int i, double j) {
        System.out.println("int double");
    }
    Dog(float i, int j) {
        System.out.println("float int");
    }
    Dog(double i, int j) {
        System.out.println("double int");
    }
    Dog(int i, long j) {
        System.out.println("int long");
    }
    Dog(long i, int j) {
        System.out.println("long int");
    }
    Dog(float i, double j) {
        System.out.println("float double");
    }
    Dog(double i, float j) {
        System.out.println("double float");
    }
}
```

## Test 7

创建一个没有构造器的类，在main中创建对象，验证是否有自动加入了默认构造器

```java
public class Main {

    public static void main(String[] args) {
        Dog dog = new Dog();

        System.out.println("Work well");
    }
}

class Dog {
}
```

## Test 8

写一个有2个方法的类，调用方法2次，一次单纯调用，一次使用this

```java
public class Main {

    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.g();
    }
}

class Dog {
    void f()
    {
        System.out.println("It's a test");
    }
    void g()
    {
        f();
        this.f();
    }
}
```

## Test 9

编写2个重载构造器，一个调用另外的一个

```java
public class Main {

    public static void main(String[] args) {
        Dog dog = new Dog();
        Dog dog1 = new Dog("Java");
    }
}

class Dog {
    Dog() {
        this("C++");
        System.out.println("Good baby\n");
    }

    Dog(String str) {
        System.out.println("I like " + str.replace("Java", "C++"));
    }
}
```

## Test 10 - 12

略

## Test 13

验证段落中的语句

```java
class Cup {
    Cup(int marker) {
        System.out.println("Cup(" + marker + ")");
    }

    void f(int marker) {
        System.out.println("f(" + marker + ")");
    }
}

class Cups {
    static Cup cup1;
    static Cup cup2;

    static {
        cup1 = new Cup(1);
        cup2 = new Cup(2);
    }

    Cups() {
        System.out.println("Cups()");
    }
}

public class Main {

    public static void main(String[] args) {
        System.out.println("Inside main()");
        Cups.cup1.f(99);
    }

    static Cups cups1 = new Cups();
    //static Cups cups2 = new Cups();
}
```

## Test 14

编写一个类，拥有2个字符串域，一个在定义的时候初始化，一个在静态块中初始化，加入一个静态方法，打印他们的值，证明，他们会在使用之前完成初始化的动作
```java
class Test14 {
    static String s = "s";
    static String s1;
    static {
        s1 = "s1";
        System.out.println("s1 is initialized");
    }
    static void f() {
        System.out.println(s + " and " + s1);
    }

}

public class Main {

    public static void main(String[] args) {
        System.out.println("Inside main()");
        Test14.f();
    }

}
```

# Chapter 6

## Test 1

## Test 1

## Test 1

## Test 1

## Test 1

## Test 1

## Test 1