---
title: Decode XORed Array
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1720> Decode XORed Array


```c++
class Solution {
public:
    vector<int> decode(vector<int>& encoded, int first) {
        vector<int> v;
        v.push_back(first);  
        for(auto i : encoded){
            int s = v.back() ^ i;  
            v.push_back(s);  
        }
        return v;
    }
};
```

