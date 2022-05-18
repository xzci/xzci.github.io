---
title: Calculate Money in Leetcode Bank
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1716> Calculate Money in Leetcode Bank


```c++
class Solution {
public:
    int totalMoney(int n) {
        int total{0};
        int week{1}, accrue{1};
        
        for(int i{1}; i <= n; i++){
            if(i - 1 == 7 * week){
                ++week;
                accrue = week;
            }
            
            total += accrue;
            accrue++;
        } 
        return total;       
    }
};
```

