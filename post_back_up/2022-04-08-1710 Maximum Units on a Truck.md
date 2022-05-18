---
title: Maximum Units on a Truck
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1710> Maximum Units on a Truck


```c++
class Solution {
public:
    int maximumUnits(vector<vector<int>>& boxTypes, int truckSize) {
        int n = boxTypes.size();
        int ans = 0;
        int sum = 0;
        vector<pair<int, int>> v;
        
        for (int i = 0; i < n; i++)
            v.push_back({boxTypes[i][1], boxTypes[i][0]});
        
        sort(v.begin(), v.end(), greater<>());
        
        for (int i = 0; i < n; i++) {
            auto [units, cnt] = v[i];
            if (sum + cnt > truckSize) {
                ans += (truckSize - sum) * units;
                break;
            }
            sum += cnt;
            ans += units * cnt;
        }
        
        return ans;
    }
};
```

