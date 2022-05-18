---
title: Find Pivot Index
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 724> Find Pivot Index

```c++
class Solution {
public:
    int pivotIndex(vector<int>& nums) {
        int sum = 0, cur = 0;
        sum = accumulate(nums.begin(), nums.end(), 0);
        for(int i = 0; i < nums.size(); i++)
            if(cur * 2 == sum - nums[i]) 
                return i;
            else 
                cur += nums[i];
        return -1;
    }
};
```

