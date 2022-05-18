---
title: Remove Duplicates from Sorted Array
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E> Remove Duplicates from Sorted Array

```c++
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        if(nums.size() == 0) return 0;
        int index = 1;
        int check = nums[0];
        int set = 0;
        for(int i = 1; i != nums.size(); i++) {
            if(nums[i] != check) {
                check = nums[i];
                index++; 
                set ++;
                nums[set] = nums[i];
            }
            
            
        }
        return index;
    }
};
```

