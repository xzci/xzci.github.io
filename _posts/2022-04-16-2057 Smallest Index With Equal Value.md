---
title: Smallest Index With Equal Value
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2057> Smallest Index With Equal Value

```c++
class Solution {
public:
    int smallestEqual(vector<int>& nums) {
        for(int i = 0; i< nums.size(); i++){
            if(i % 10 == nums[i])
                return i;
        }
        return -1;
    }
};
```
