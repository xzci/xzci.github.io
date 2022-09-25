---
title: Calculate Amount Paid in Taxes
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2303> Calculate Amount Paid in Taxes

```c++
class Solution {
public:
    double calculateTax(vector<vector<int>>& brackets, int income) {
        double ans = 0;
        int j = 0;
        for (auto v : brackets) {
            int upper = v[0], prcnt = v[1];
            int curr = min(income, upper - j);
            ans +=  prcnt * 0.01 * curr;
            income -= curr;
            j = upper;
        }
        return ans;
    }
};
```
