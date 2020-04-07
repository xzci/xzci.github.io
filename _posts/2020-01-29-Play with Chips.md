---
title: Leetcode
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E> Play with Chips

```c++
class Solution {
public:
    int minCostToMoveChips(vector<int>& chips) {
        int temp[2] = {0};
        for(int a : chips){
            temp[a%2]++;
        }
        return min(temp[0], temp[1]);
    }
};
```

