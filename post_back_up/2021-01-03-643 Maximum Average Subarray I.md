---
title: Maximum Average Subarray I
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 643> Maximum Average Subarray I

```c++
class Solution {
public:
    double findMaxAverage(vector<int>& nums, int k) {
        int cumulative[nums.size()];
        cumulative[0] = nums[0];
        for(int i = 1; i < nums.size(); i++)
            cumulative[i] = nums[i] + cumulative[i - 1]; 
        
        double max = cumulative[k - 1]; 
        for(int i = 1; i <= nums.size() - k; i++){
            if(cumulative[i + k - 1] - cumulative[i - 1] > max)
                max = cumulative[i + k - 1] - cumulative[i - 1];
        }
        double avg = max / k;
        return avg;
    }
};
```

