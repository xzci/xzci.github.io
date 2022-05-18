---
title: Create Target Array in the Given Order
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E> Create Target Array in the Given Order

```c++
class Solution {
public:
    vector<int> createTargetArray(vector<int>& nums, vector<int>& index) {
        vector<int> ans;
        for(int i = 0; i != nums.size(); i++) 
            ans.insert(ans.begin() + index[i], nums[i]);
        return ans;
    }
    
};
```

