---
title: Check if Array Is Sorted and Rotated
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1752> Check if Array Is Sorted and Rotated


```c++
class Solution {
public:
    bool check(vector<int>& nums) {
        int count = 0;
        int n = nums.size();
        
        if(nums[n-1] > nums[0])
            count++;
    
        for(int i = 0; i < n-1; i++){
            if(nums[i] > nums[i+1])
                count++;
        }
        return count<=1;
    }
};
```

