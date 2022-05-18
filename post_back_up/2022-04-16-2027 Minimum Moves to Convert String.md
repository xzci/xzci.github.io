---
title: Minimum Moves to Convert String
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 2027> Minimum Moves to Convert String


```c++
class Solution {
public:
    int minimumMoves(string s) {
        int res = 0;
        for(int i = 0; i < s.size(); i++){
            if(s[i] == 'X'){
                res++;
                i += 2;
            }
        }
        return res;
    }
};
```

