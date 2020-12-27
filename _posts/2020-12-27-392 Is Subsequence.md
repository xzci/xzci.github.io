---
title: Is Subsequence
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 392> Is Subsequence

```c++
class Solution {
public:
    bool isSubsequence(string s, string t) {
        if(s == t)
            return true;
        int c = 0;
        for(int i = 0; i < t.size(); i++) 
            if(s[c] == t[i])
                c++;
        if(c == s.size())
            return true;
        else        
            return false;
    
    }
};
```

