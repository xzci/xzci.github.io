---
title: Remove One Element to Make the Array Strictly Increasing
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 1909> Remove One Element to Make the Array Strictly Increasing

```c++
class Solution {
public:
    bool canBeIncreasing(vector<int>& nums) {


        int count = 0;
        for(int i=0;i < nums.size()-1 && count < 2; i++) {
            if(nums[i]>=nums[i+1]) {
                count++;
                if(i > 0 && nums[i+1] <= nums[i-1])
                    nums[i+1] = nums[i];
            }
        }
        return count < 2;
    }
};

```
