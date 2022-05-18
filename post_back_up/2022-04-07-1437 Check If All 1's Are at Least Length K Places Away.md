---
title: Check If All 1's Are at Least Length K Places Away
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1437> Check If All 1's Are at Least Length K Places Away


```c++
class Solution {
public:
    bool kLengthApart(vector<int>& nums, int k) {
        int pre = -100000;
        
        for(int i = 0; i < nums.size(); i++) { 
            if(nums[i] == 1 ) {                
                if(i - pre - 1 < k) return false;
                pre = i;                
            }            
        }
        
        return true;
    }
};
```

