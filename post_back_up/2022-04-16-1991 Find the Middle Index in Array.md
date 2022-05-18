---
title: Find the Middle Index in Array
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1991> Find the Middle Index in Array


```c++
class Solution {
public:
    int findMiddleIndex(vector<int>& nums) {
        auto sum = accumulate(nums.begin(), nums.end(), 0), leftSum = 0;
        for(int i=0;i<nums.size();i++){
            if(leftSum == sum - leftSum - nums[i]) return i;
            leftSum += nums[i];
        }
        return -1;  
    }
};
```

