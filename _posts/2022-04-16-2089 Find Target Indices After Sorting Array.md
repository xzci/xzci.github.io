---
title: Find Target Indices After Sorting Array
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2089> Find Target Indices After Sorting Array

```c++
// Method 1
class Solution {
public:
    vector<int> targetIndices(vector<int>& nums, int target) {
        sort(nums.begin(), nums.end());
        vector<int> ans;
        for(int i = 0; i != nums.size(); i++) {
            if(nums[i] == target) {
                ans.push_back(i);
            }
        }
        return ans;
    }
};

// Method 2
class Solution {
public:
    vector<int> targetIndices(vector<int>& nums, int target) {
        int smaller = 0;
        int target_number = 0;
        for(int i : nums) {
            if(i < target) {
                smaller++;
            } else if(i == target) {
                target_number++;
            }
        }
        vector<int> ans;
        while(t) {
            ans.push_back(smaller);
            smaller++;
            target_number--;
        }

        return ans;
    }
};
```
