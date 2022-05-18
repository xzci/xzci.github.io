---
title: Maximum Difference Between Increasing Elements
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 2016> Maximum Difference Between Increasing Elements


```c++
class Solution {
public:
    int maximumDifference(vector<int>& nums) {
        int result = 0, prefix = INT_MAX;
        for (auto x : nums) {
            result = max(result, x - prefix);
            prefix = min(prefix, x);
        }
        return result ? result : -1;
    }
};
```

