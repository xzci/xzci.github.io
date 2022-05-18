---
title: 1-bit and 2-bit Characters
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 717> 1-bit and 2-bit Characters

```c++
class Solution {
public:
    bool isOneBitCharacter(vector<int>& bits) {
        int i = 0;
        while (i < bits.size() - 1) {
            i += bits[i] + 1;
        }
        return i == bits.size() - 1;
    }
};
```

