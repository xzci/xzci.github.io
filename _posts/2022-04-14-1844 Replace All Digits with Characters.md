---
title: Replace All Digits with Characters
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1844> Replace All Digits with Characters


```c++
class Solution {
public:
    string replaceDigits(string s) {
        for(int i = 1; i < s.length(); i += 2) {
            s[i] = char(s[i - 1] + (s[i] - '0'));
        }   
        return s;
    }
};
```

