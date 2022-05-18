---
title: Maximum Product of Three Numbers
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 628> Maximum Product of Three Numbers

```c++
// Method 1
class Solution {
public:
    int maximumProduct(vector<int>& nums) {
        sort(nums.begin(),nums.end());
        return max((nums[0] * nums[1] * nums.back()),
                   (nums.back() * nums[nums.size() - 2] * nums[nums.size() - 3]));
    }
};

// Method 2
class Solution {
public:
    int maximumProduct(vector<int>& nums) {
        int mx1 = INT_MIN, mx2 = INT_MIN, mx3 = INT_MIN;
        int mn1 = INT_MAX, mn2 = INT_MAX;
        for (int num : nums) {
            if (num > mx1) {
                mx3 = mx2; mx2 = mx1; mx1 = num;
            } else if (num > mx2) {
                mx3 = mx2; mx2 = num;
            } else if (num > mx3) {
                mx3 = num;
            }
            
            if (num < mn1) {
                mn2 = mn1; mn1 = num;
            } else if (num < mn2) {
                mn2 = num;
            }
        }
        return max(mx1 * mx2 * mx3, mx1 * mn1 * mn2);        
    }
};
```

