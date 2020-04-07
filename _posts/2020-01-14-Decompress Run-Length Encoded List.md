---
title: Decompress Run-Length Encoded List
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E> Decompress Run-Length Encoded List

```c++
class Solution {
public:
    vector<int> decompressRLElist(vector<int>& nums) {
        vector<int> ans;
        for(int i = 0; i < nums.size(); i+=2) {
            for(int j = nums[i]; j != 0; j--) {
                ans.push_back(nums[i + 1]);
            }
        }
    return ans;    
    }
};
```

