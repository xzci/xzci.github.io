---
title: Best Time to Buy and Sell Stock III
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-H 123> Best Time to Buy and Sell Stock III

```c++
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        if(prices.size() < 2)
            return 0;

        const int n = prices.size();

        vector<int> f(n, 0);
        vector<int> g(n, 0);

        for(int i = 1, val = prices[0]; i < n; i++) {
            val = min(val, prices[i]);
            f[i] = max(f[i - 1], prices[i] - val);
        }
        for(int i = n - 2, peak = prices[n - 1]; i >= 0; i--) {
            peak = max(peak, prices[i]);
            g[i] = max(g[i], peak - prices[i]);
        }

        int max_profit = 0;

        for(int i = 0; i < n; i++) {
            max_profit = max(max_profit, f[i] + g[i]);
        }
        return max_profit;
    }
};
```
