---
title: Count Number of Pairs With Absolute Difference K
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 2006> Count Number of Pairs With Absolute Difference K


```c++
class Solution {
public:
    int countKDifference(vector<int>& nums, int k) {
        int ans = 0;
        int count[101] = {0};
        for(int i = 0; i < nums.size(); i++){
            count[nums[i]]++;
        }
        for(int i = 1; i < 101-k; i++){
            ans += count[i]*count[i+k];
        }
        return ans;
    }
};
```

