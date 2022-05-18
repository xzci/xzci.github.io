---
title: Special Array With X Elements Greater Than or Equal X
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1608> Special Array With X Elements Greater Than or Equal X

```c++
class Solution {
public:
    int specialArray(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int size = nums.size();
        if (1 <= size && size <= nums[0]) 
            return size;
        for (int i = 1; i < size; i++) {
            int left = size - i;
            if (nums[i - 1] < left && left <= nums[i]) 
                return left;
        }
        return -1;
    }
};
```

