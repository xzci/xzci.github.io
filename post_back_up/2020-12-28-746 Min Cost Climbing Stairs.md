---
title: Min Cost Climbing Stairs
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 746> Min Cost Climbing Stairs

```c++
// Method 1
class Solution {
public:
    int minCostClimbingStairs(vector<int>& cost) {
        vector<int> memo(cost.size());
        for (int i = 0; i < cost.size(); ++i) {
            if (i == 0 || i == 1)
                memo[i] = cost[i];
            else
                memo[i] = min(memo[i - 1], memo[i - 2]) + cost[i];
        }
        return min(memo.back(), memo[memo.size() - 2]);
    }
};

// Method 2
class Solution {
public:
    int minCostClimbingStairs(vector<int>& cost) {
        int cost1 = 0;
        int cost2 = 0;
        for(int i = cost.size() - 1; i>=0; i--) {
            int cost3 = cost[i] + min(cost1, cost2);
            cost2 = cost1;
            cost1 = cost3;
        }
        return min(cost1,cost2);
    }
    int min(int a, int b) {
        return a < b? a : b;
    }
};
```

