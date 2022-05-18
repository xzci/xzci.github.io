---
title: Sign of the Product of an Array
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1822> Sign of the Product of an Array


```c++
class Solution {
public:
    int arraySign(vector<int>& nums) {
        int numMinus = 0;

        for (int i=0; i < nums.size(); i++) {
            if (nums[i] == 0)
                return 0;
            else if (nums[i] < 0)
                numMinus++;
        }

        if (numMinus%2 == 0)
            return 1;
        else
            return -1;
    }
};
```

