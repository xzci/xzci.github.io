---
title: Minimum Cost of Buying Candies With Discount
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2144> Minimum Cost of Buying Candies With Discount

```c++
class Solution {
public:
    int minimumCost(vector<int>& cost) {
        sort(cost.begin(), cost.end(), greater<int>());
        int ans = 0;
        int k = 0;
        for(auto i : cost) {
            k++;
            if(k == 3)
                k = 0;
            else
                ans += i;
        }
        return ans;
    }
};
```
