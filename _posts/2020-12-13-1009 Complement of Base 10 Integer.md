---
title: Complement of Base 10 Integer
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1009> Complement of Base 10 Integer

```c++
class Solution {
public:
    int bitwiseComplement(int N) {
        if(N == 0)
		    return 1;
        long long int n1, n2;
        n1 = log2(N) + 1;
        n2 = pow(2, n1) - 1;
        return N ^ n2;
    }
};
class Solution {
public:
    int bitwiseComplement(int N) {
        if(N == 0) 
            return 1;
        return ~((0xffffffff << (32 - __builtin_clz(N))) | N);
    }
};

```

