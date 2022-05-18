---
title: Isomorphic Strings
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 205> Isomorphic Strings

```c++
class Solution {
public:
    bool isIsomorphic(string s, string t) {
        vector<int> v1(256),v2(256);
        for(int i = 0; i < s.size(); i++){
            if(v1[s[i]] != v2[t[i]]) 
                return false;
            v1[s[i]] = i + 1;
            v2[t[i]] = i + 1;
        }
        return true;
    }
};
```

