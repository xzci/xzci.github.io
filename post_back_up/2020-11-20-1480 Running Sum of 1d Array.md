---
title: Running Sum of 1d Array
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1480> Running Sum of 1d Array

```c++
class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
       
        for(int i=1;i<nums.size();i++)
            nums[i]+=nums[i-1];
        return nums;
    }
};
```

