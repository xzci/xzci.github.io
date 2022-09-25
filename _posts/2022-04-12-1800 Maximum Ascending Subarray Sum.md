---
title: Maximum Ascending Subarray Sum
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1800> Maximum Ascending Subarray Sum


```c++
class Solution {
public:
    int maxAscendingSum(vector<int>& nums) {
        int csum = nums[0];
        int ans = nums[0];
        
        for(int i = 1 ; i < nums.size() ; ++i ){
            if(nums[i] > nums[i-1] ){
                csum += nums[i] ;
            } else csum = nums[i] ;
            ans = max(ans,csum) ;
        }
        return ans ;
    }
};
```

