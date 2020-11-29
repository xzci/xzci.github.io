---
title: Final Prices With a Special Discount in a Shop
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1475> Final Prices With a Special Discount in a Shop

```c++
class Solution {
public:
    vector<int> finalPrices(vector<int>& prices) {
        vector<int> ans;
        for(int i = 0; i != prices.size() - 1; i++) {
            int temp = prices[i] - prices[i + 1];
            if(temp >= 0)
                ans.push_back(temp);
            else {
                int temp_j;
                for(int j = i + 1; j != prices.size(); j++) {
                    temp_j = prices[i] - prices[j];
                    if(temp_j >= 0) {
                        break;
                    }
                }
                if(temp_j >= 0)
                    ans.push_back(temp_j);
                else
                    ans.push_back(prices[i]);
            }
                
        }
        ans.push_back(prices.back());
        return ans;
    }
};
```

