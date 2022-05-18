---
title: Check If Two String Arrays are Equivalent
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1662> Check If Two String Arrays are Equivalent

```c++
class Solution {
public:
    bool arrayStringsAreEqual(vector<string>& word1, vector<string>& word2) {
        string a = "",b = "";
        for(auto x : word1)
            a += x;
        for(auto x : word2)
            b += x;
        return a == b;
        
    }
};

```

