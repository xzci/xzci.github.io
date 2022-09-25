---
title: Unique Binary Search Trees
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-M 96> Unique Binary Search Trees

```c++
class Solution {
public:
    int numTrees(int n) {
        vector<int> check(n + 1, 0);

        check[0] = 1;
        check[1] = 1;
        for(int i = 2; i <= n; i++)
            for(int k = 1; k <= i; k++)
                check[i] += check[k - 1] * check[i - k];
        return check[n];
    }
};
```
