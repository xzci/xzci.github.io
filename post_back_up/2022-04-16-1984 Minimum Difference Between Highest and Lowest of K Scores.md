---
title: Minimum Difference Between Highest and Lowest of K Scores
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1984> Minimum Difference Between Highest and Lowest of K Scores


```c++
class Solution {
public:
    int minimumDifference(vector<int>& nums, int k) {
        if(nums.size() < 2 || k==1) 
            return 0;
        sort(nums.begin(), nums.end());
        int res = INT_MAX;
        for(int i = k - 1;i < nums.size(); i++)
            res = min(res, nums[i]-nums[i-k+1]);
        return res;
    }
};
```

