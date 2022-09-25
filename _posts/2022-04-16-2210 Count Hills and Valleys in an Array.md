---
title: Count Hills and Valleys in an Array
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2210> Count Hills and Valleys in an Array

```c++
class Solution {
public:
    int countHillValley(vector<int>& nums) {
        nums.erase(unique(nums.begin(), nums.end()), nums.end());

        int ret = 0;
        for (int i = 1; i < nums.size() - 1; i++) {
            if ((nums[i] > nums[i - 1]) == (nums[i] > nums[i + 1])) {
                ++ret;
            }
        }
        return ret;
    }
};
```
