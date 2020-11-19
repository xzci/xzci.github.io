---
title: Number of Good Pairs
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1512> Number of Good Pairs

```c++
class Solution {
public:
    int numIdenticalPairs(vector<int>& nums) {
        int temp[101] = {0};
        for(auto i : nums) {
            temp[i]++;
        }
        
        int ans = 0;
        for(int i = 0; i != 101; i++) {
            int times = 1;
            if(temp[i] > 1) {
                times =  temp[i] * (temp[i] - 1) / 2;
            ans += times;
            }
        }
        
        return ans;
    }
};
```

