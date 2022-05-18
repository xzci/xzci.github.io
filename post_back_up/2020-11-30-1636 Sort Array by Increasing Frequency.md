---
title: Sort Array by Increasing Frequency
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1636> Sort Array by Increasing Frequency

```c++
class Solution {
public:
    vector<int> frequencySort(vector<int>& nums) {
        unordered_map <int, int> ma;
        for (int i = 0 ; i < nums.size(); i++) {
            ma[nums[i]]++;
        }
        vector <pair <int, int> > pa;
        for (auto it : ma) { 
            pa.push_back({it.second, it.first});
        }
        sort(pa.begin(), pa.end(), [](auto a, auto b) {
            if (a.first == b.first) {
                return a.second > b.second;
            }
            return a.first < b.first;
        });
        vector <int> ans;
        for (int i = 0; i < pa.size(); i++) {
            for (int j = 0; j < pa[i].first; j++)
                ans.push_back(pa[i].second);
        }
        return ans;
    }
};
```

