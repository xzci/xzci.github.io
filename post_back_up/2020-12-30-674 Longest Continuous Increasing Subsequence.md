---
title: Longest Continuous Increasing Subsequence
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 674> Longest Continuous Increasing Subsequence

```c++
class Solution {
public:
    int findLengthOfLCIS(vector<int>& nums) {
        int n = nums.size(), result = 1, current = 1;
        if(n == 0) 
            return 0;
        for(int i = 1; i < n; i++){
            if(nums[i] > nums[i-1]) 
                current++;
            else 
                current = 1;
            result = max(result, current);
        }
        return result; 
    }
};
```

