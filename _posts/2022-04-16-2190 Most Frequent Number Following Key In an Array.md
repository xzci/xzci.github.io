---
title: Most Frequent Number Following Key In an Array
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2190> Most Frequent Number Following Key In an Array

```c++
class Solution {
public:
    int mostFrequent(vector<int>& nums, int key) {
        unordered_map<int, int> h;
        for (int i = 0; i < nums.size() - 1; i++) {
            if (nums[i] == key) {
                h[nums[i + 1]]++;
            }
        }
        int ret = 0, maxOccurence = 0;
        for (const auto& [k, v]: h) {
            if (v > maxOccurence) {
                maxOccurence = v;
                ret = k;
            }
        }
        return ret;
    }
};
```
