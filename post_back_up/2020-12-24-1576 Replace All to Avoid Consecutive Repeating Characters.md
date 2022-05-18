---
title: Replace All ?'s to Avoid Consecutive Repeating Characters
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1576> Replace All ?'s to Avoid Consecutive Repeating Characters

```c++
class Solution {
public:
    string modifyString(string s) {
        char f, b = ' ';
        for(int i=0;i<s.size();i++)
        {
            if(i != 0) b = s[i-1];
            f = s[i+1];
            if(s[i] == '?') s[i] = 'a';
            while(s[i] == b || s[i] == f) s[i]++;
        }
        return s;
    }
};
```

