---
title: Consecutive Characters
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1446> Consecutive Characters

```c++
class Solution {
public:
    int maxPower(string s) {
        int c = 0;
        int max = 0;
        for(int i = 0; i < s.length(); ++i){
            if(s[i + 1] == s[i])
                c++;
            else{
                if(c > max)
                    max = c;
                c = 0;
            }
        }
        return ++max;
    }
};
```

