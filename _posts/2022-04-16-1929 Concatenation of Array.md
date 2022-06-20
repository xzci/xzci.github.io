---
title: Concatenation of Array
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 1929> Concatenation of Array

```c++
// Method 1
class Solution {
public:
    vector<int> getConcatenation(vector<int>& nums) {
        int n = nums.size();
        vector<int> ans(n * 2, 0);
        for(int i = 0; i != n; i++) {
            ans[i] = nums[i];
            ans[i + n] = nums[i];
        }
        return ans;
    }
};

// Method 2
class Solution {
public:
    vector<int> getConcatenation(vector<int>& nums) {
        vector<int> ans = nums;
        for(int i = 0; i < nums.size(); i++){
            ans.push_back(nums[i]);
        }
        return ans;
    }
};
```
