---
title: Count of Matches in Tournament
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1688> Count of Matches in Tournament

```c++
class Solution {
public:
    int numberOfMatches(int n) {
        int matches = 0;
        
        int crm = -1;
        while(crm != 0){
            crm = n / 2;
            matches += crm;
            n = (n + 1) / 2;
        }
        
        return matches;
    }
};
```

