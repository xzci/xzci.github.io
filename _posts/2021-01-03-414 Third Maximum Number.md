---
title: Third Maximum Number
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 414> Third Maximum Number

```c++
class Solution {
public:
    int thirdMax(vector<int>& nums) {
        if (nums.size() == 1) 
            return nums[0];
        if (nums.size() == 2) 
            return nums[0] > nums[1] ? nums[0] : nums[1];
    
        int max1 = nums[0];
        int max2 = numeric_limits<int>::min();
        int max3 = numeric_limits<int>::min();
        bool has_int_min = false;
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] == INT_MIN) 
                has_int_min = true;
            if (nums[i] > max1) {
                max3 = max2;
                max2 = max1;
                max1 = nums[i];
            } else if (nums[i] != max1) {
                if (nums[i] > max2) {
                    max3 = max2;
                    max2 = nums[i];
                } else if (nums[i] != max2) {
                    if (nums[i] > max3) {
                        max3 = nums[i];
                    }
                }
            }
        }
        if (max3 == max2) 
            return max1;
        if (max3 != INT_MIN) 
            return max3;
        else if (has_int_min) 
            return max3;
        else 
            return max1;
    }
};
```

