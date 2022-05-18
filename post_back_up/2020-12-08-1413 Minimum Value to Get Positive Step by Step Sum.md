---
title: Minimum Value to Get Positive Step by Step Sum
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1413> Minimum Value to Get Positive Step by Step Sum

```c++

// Method 1
class Solution {
public:
    int minStartValue(vector<int>& nums) {
        int s = 0;
        int minSum = 0;
        for (int num : nums) {
            s += num;
            if (s < minSum) {
                minSum = s;
            }
        }
        return 1 - minSum;
    }
};

// Method 2
class Solution {
public:
    int minStartValue(vector<int>& nums) {
        int ret = 1;
        int tmp = ret;
        for(int i = 0; i < nums.size(); i++) {
            tmp = tmp + nums[i];
            if(tmp < 1) {
                ret += (1-tmp);
                tmp = 1;
            }
        }
        
        return ret;
    }
};
```

