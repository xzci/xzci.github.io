---
title: Moving Stones Until Consecutive
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1033> Moving Stones Until Consecutive

```c++
class Solution {
public:
    vector<int> numMovesStones(int a, int b, int c) {
        int sum_ = a + b + c;
        int min_ = min(a, min(b, c));
        int max_ = max(a, max(b, c));
        int mid_ = sum_ - min_ - max_;
        
        if (max_ - min_ == 2)
            return {0, 0};
        
        int min_move = min(mid_ - min_, max_ - mid_) <= 2 ? 1 : 2;
        int max_move = max_ - min_ - 2;
        return {min_move, max_move};
    }
};
```

