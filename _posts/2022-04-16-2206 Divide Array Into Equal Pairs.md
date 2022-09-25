---
title: Divide Array Into Equal Pairs
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2206> Divide Array Into Equal Pairs

```c++
class Solution {
public:
    bool divideArray(vector<int>& nums) {
        unordered_map<int, int> check;
        for(auto i : nums) {
            check[i]++;
        }
        for(auto i : check) {
            if(i.second % 2)
                return false;
        }
        return true;
    }
};

```
