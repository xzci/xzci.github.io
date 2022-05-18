---
title: Make The String Great
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1544> Make The String Great

```c++
class Solution {
public:
    string makeGood(string s) {
        if (s.size() == 0) 
            return s;
        string stack = "";
        for (auto p: s) {
            if (abs(p - stack.back()) == 32) {
                stack.pop_back();
            }
            else {
                stack += p;
            }
        }
        return stack;
    }
};
```

