---
title: Count Square Sum Triples
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 1925> Count Square Sum Triples

```c++
// Method 1
class Solution {
public:
    int countTriples(int n) {
       int count = 0;
       for(int i = 1; i <= n; i++) {
            for(int j = 1;j <= n; j++) {
                int sum = i*i + j*j;
                int t = sqrt(sum);

                if(t * t == sum && t <= n)
                    count++;
            }
        }
        return count;
    }
};

// Method 2
class Solution {
public:
    int countTriples(int n) {

        vector<int> squares(n * n + 1, 0);
        for (int i = 1; i <= n; ++i)
            squares[i * i] = 1;

        int res = 0;
        for (int i = 1; i <= n; ++i)
            for (int j = i; i * i + j * j <= n * n; ++j)
                res += squares[i * i + j * j] * 2;
        return res;

    }
};

class Solution {
public:
    int countTriples(int n) {

        vector<int> squares(n * n + 1, 0);
        for (int i = 1; i <= n; ++i)
            squares[i * i] = 1;

        int res = 0;
        for (int i = 1; i <= n; ++i)
            for (int j = i; i * i + j * j <= n * n; ++j)
                res += squares[i * i + j * j] * 2;
        return res;

    }
};
```
