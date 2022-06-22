---
title: Find Closest Number to Zero
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2239> Find Closest Number to Zero

```c++
// Method 1
class Solution {
public:
    int findClosestNumber(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        if(nums[0] > 0)
            return nums[0];
        if (nums[nums.size() - 1] < 0)
            return nums[nums.size() - 1];
        bool check = false;
        for(int i  = 0; i != nums.size(); i++) {
            if(nums[i] == 0)
                return 0;
            if(nums[i] < 0) {
                check = true;
            }
            if(nums[i] > 0 && check == true) {
                if(nums[i] + nums[i - 1] > 0)
                    return nums[i - 1];
                else
                    return nums[i];
            }
        }
        return 0;
    }
};

// Method 2
class Solution {
public:
    int findClosestNumber(vector<int>& nums) {
        int res = abs(nums[0]);
        int resIdx = 0;
        for(int i = 1; i < nums.size(); i++){
            if(abs(nums[i]) < res) {
                res = abs(nums[i]);
                resIdx = i;
            } else if(abs(nums[i]) == res){
                if(nums[i]>nums[resIdx]) resIdx = i;
            }
        }
        return nums[resIdx];
    }
};
```
