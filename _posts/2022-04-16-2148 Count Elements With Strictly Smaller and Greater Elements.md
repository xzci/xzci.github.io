---
title: Count Elements With Strictly Smaller and Greater Elements
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2148> Count Elements With Strictly Smaller and Greater Elements

```c++
class Solution {
public:
    int countElements(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int check = 0;
        for(auto i : nums) {
            if(i == nums[0])
                check++;
            else if(i == nums[nums.size() - 1])
                check++;
        }
        return nums.size() - check;
    }
};
```
