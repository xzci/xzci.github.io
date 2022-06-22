---
title: Kth Distinct String in an Array
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2053> Kth Distinct String in an Array

```c++
class Solution {
public:
    string kthDistinct(vector<string>& arr, int k) {
        unordered_map <string,int> table;
        for(auto s : arr)
            table[s]++;
        for(auto s : arr)
            if(table[s] == 1 && --k == 0)
                return s;
        return "";

    }
};
```
