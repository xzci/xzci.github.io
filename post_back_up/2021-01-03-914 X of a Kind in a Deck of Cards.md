---
title: X of a Kind in a Deck of Cards
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 914> X of a Kind in a Deck of Cards

```c++
class Solution {
public:
    bool hasGroupsSizeX(vector<int>& deck) {
        unordered_map<int, int> mp;
        for(auto d : deck)
            mp[d]++;
        int x;
        x = mp.begin()->second;
        for(auto it : mp)
            x = gcd(x, it.second);
        if(x > 1) 
            return true;
        return false;
    }
};
```

