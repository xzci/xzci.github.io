---
title: Count Equal and Divisible Pairs in an Array
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2176> Count Equal and Divisible Pairs in an Array

```c++
class Solution {
public:
    int countPairs(vector<int>& nums, int k) {
        int ans = 0;
        for(int i = 0; i != nums.size(); i++) {
            for(int j = i + 1; j < nums.size(); j++) {
                if(nums[i] == nums[j]) {
                    if(!(i * j % k))
                        ans++;
                }
            }
        }
        return ans;
    }
};
```
