---
title: Build Array from Permutation
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 1920> Build Array from Permutation

```c++
class Solution {
public:
    vector<int> buildArray(vector<int>& nums) {
        vector<int> ans(nums.size(),0);
        for(int i = 0; i != nums.size(); i++) {
            ans[i] = nums[nums[i]];
        }
        return ans;
    }
};
```
