---
title: Leetcode
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E> To Lower Case

```c++
class Solution {
public:
    string toLowerCase(string str) {
        for(auto &i: str) {
            if(i >= 'A' && i <= 'Z')
                i = i + 32;
        }
        return str;
    }
};
```

