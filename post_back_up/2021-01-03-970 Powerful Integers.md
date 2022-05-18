---
title: Powerful Integers
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 970> Powerful Integers

```c++
class Solution {
public:
    vector<int> powerfulIntegers(int x, int y, int bound) {
        set<int> res;
        deque<pair<int, int>> powers = {{0,0}};
        while (!powers.empty()) {
            auto [i, j] = powers.front();
            int v = pow(x, i) + pow(y, j);
            if (v <= bound) {
                if (x > 1) powers.push_back({i+1, j});
                if (y > 1) powers.push_back({i, j+1});
                res.insert(v);
            }
            powers.pop_front();
        }
        return vector<int>(res.begin(), res.end());
    }
};
```

