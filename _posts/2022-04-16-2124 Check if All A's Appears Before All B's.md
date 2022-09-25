---
title: Check if All A's Appears Before All B's
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2124> Check if All A's Appears Before All B's

```c++
class Solution {
public:
    bool checkString(string s) {
        int i = 0;
        for(; i != s.size(); i++) {
            if(s[i] == 'b')
                break;
        }
        if(find(s.begin() + i, s.end(), 'a') != s.end())
            return false;
        return true;
    }
};
```
