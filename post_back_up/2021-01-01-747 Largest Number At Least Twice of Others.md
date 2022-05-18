---
title: Largest Number At Least Twice of Others
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 747> Largest Number At Least Twice of Others

```c++
// Method 1
class Solution {
public:
    int dominantIndex(vector<int>& nums) {
        int mx = *max_element(nums.begin(), nums.end());
        int index = -1;
        
        for(int i = 0; i < nums.size(); i++) {
            if(nums[i] == mx) {
                index = i;
                continue;
            }
            if(nums[i] * 2 > mx) return -1;
        } 
        return index;
    }
};

// Method 2
class Solution {
public:
    int dominantIndex(vector<int>& nums) {
        int len = nums.size();
        if (1 == len) 
            return 0;
        
        int ret, max1, max2;
        if (nums[0] > nums[1]) {
            ret = 0;
            max1 = nums[0];
            max2 = nums[1];
        } else {
            ret = 1;
            max1 = nums[1];
            max2 = nums[0];
        }

        for (int i = 2; i < len; i++) {
            if (nums[i] > max1) {
                ret = i;
                max2 = max1;
                max1 = nums[i];
            } else if (nums[i] > max2) {
                max2 = nums[i];
            }
        }
        
        return max1 >= 2 * max2 ? ret : -1;
    }
};
```

