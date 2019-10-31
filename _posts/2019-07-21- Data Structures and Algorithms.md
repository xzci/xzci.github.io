---
title: Data Structures and Algorithms
categories:
 - Notes
tags:
 - Data Structures
 - Algorithms
 - C
---

整理一下《数据结构与算法分析 c语言描述 第二版》 （Data structures and algorithm analysis in c）这本书的相关知识点。

> recursion 递归

# 一些基本的问题

## 单独输出整数每个位置上的数

```C
void print(int unsigned N)
{
    if(N >= 10)
        print(N / 10);
    /* 1 */    
    printf("%d\n", N % 10);
}
```
特别的，% 的开销会比较高， /* 1 */ 处可以使用 
`printf("%d\n", N - ((N / 10) * 10));`


##  求最大子序列的和

### 分治法

```C
//待补充
```

### 最简单的大O算法

```C
int MaxSubSequence(const int A[], int N)
{
    int thisSum, maxSum = 0;
    for (int i = 0; i < N; i ++)
    {
        thisSum = 0;
        for(int j = i; j < N; j++)
        {
            thisSum += A[j];
            if(thisSum > maxSum)
                maxSum = thisSum;
        }
    }
    return maxSum;
}
```

## 二分搜索

```C
#define NOT_FOUND -1
int BinarySearch(const float A[], float x, int N)
{
    int low = 0;
    int high = N - 1;
    
    while (low <= high) {
        int mid = (low + high) / 2;
        if(A[mid] < x)
            low = mid + 1;
        else
            if(A[mid] > x)
                high = mid - 1;
            else
                return mid;
    }
    return NOT_FOUND;
}
```

## 计算最大公因数 （欧几里得算法）

```C
long Gcd(long m, long n)
{
    long rem;
    while (n > 0)
    {
        rem = m % n;
        m = n;
        n = rem;
    }
    return m;
}
```

## 求幂（优化版）

```C
int Isbool(long x)
{
    if(x % 2 == 0)
        return 1;
    else
        return 0;
}
long Pow(long x, long n)
{
    if(n == 0)
        return 1;
    if(n == 1)
        return x;
    if(Isbool(n))
        return Pow(x * x, n / 2);
    else
        return Pow(x * x, n / 2) * x;
    
}
```

# 基本数据结构

## 链表

>Http://

##



