---
title: Maximum Number of Balls in a Box
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1742> Maximum Number of Balls in a Box


```c++
class Solution {
public:
    int countBalls(int lowLimit, int highLimit) {
        int ans = 0;
        vector<int> v(46,0);
        for(int i = lowLimit; i <= highLimit; i++){
            int s = 0, n = i;
            while(n) {
                s += n % 10;
                n /= 10;
            }    
            v[s]++;
        }

        for(int i =1;i<v.size();i++){
            ans = max(ans,v[i]);
        }
        return ans;
    }
};
```

