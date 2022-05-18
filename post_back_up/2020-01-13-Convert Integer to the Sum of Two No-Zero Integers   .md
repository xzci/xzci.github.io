---
title: Convert Integer to the Sum of Two No-Zero Integers   
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E> Convert Integer to the Sum of Two No-Zero Integers   

```c++
class Solution {
public:
    bool checkzero(int n) {
        int x;
        while (n != 0) {
            x = n % 10;
            if (x == 0)
                return false;
            n = n / 10;
        }
        return true;
    }
    vector<int> getNoZeroIntegers(int n) {
        vector<int> a;
        for (int i = 1; i != n; i++) {
            if (checkzero(n - i) && checkzero(i)) {
                a.push_back(i);
                a.push_back(n - i);
                return a;
            }
            
        }   
       
    }
};
```

