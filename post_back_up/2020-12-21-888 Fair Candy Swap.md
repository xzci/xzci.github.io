---
title: Fair Candy Swap
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 888> Fair Candy Swap

```c++
class Solution {
public:
    vector<int> fairCandySwap(const vector<int>& a, vector<int>& b) {
        int diff=(accumulate(a.begin(),a.end(),0)-accumulate(b.begin(),b.end(),0))/2;
        sort(b.begin(),b.end());
        for(auto i : a)
            if(binary_search(b.begin(),b.end(),i-diff)) return {i,i-diff};
        return {0,0};
    }
};
```

