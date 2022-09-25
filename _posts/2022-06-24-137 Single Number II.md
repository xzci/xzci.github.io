---
title: Single Number II
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-M 137> Single Number II

```c++
// Method 1
class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int one = 0;
        int two = 0;
        int three = 0;

        for(int i = 0; i != nums.size(); i++) {
            two |= (one & nums[i]);
            one ^= nums[i];
            three = ~(one & two);
            one &= three;
            two &= three;
        }
        return one;
    }
};

// Method 2
class Solution {
public:
    int singleNumber(vector<int>& nums) {
        const int size = sizeof(int) * 8;
        int count[size] = {0};
        for(int i = 0; i != nums.size(); i++)
            for(int j = 0; j != size; j++) {
                count[j] += (nums[i] >> j) & 1;
                count[j] %= 3;
            }

        int ans = 0;
        for(int i = 0; i != size; i++)
            ans += (count[i] << i);
        return ans;
    }
};
```
