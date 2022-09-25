---
title: Intersection of Multiple Arrays
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2248> Intersection of Multiple Arrays

```c++
// Method 1
class Solution {
public:
    vector<int> intersection(vector<vector<int>>& nums) {
        int check[1001] = {0};
        for(auto num : nums) {
            for(auto i : num) {
                check[i]++;
            }
        }
        vector<int> ans;
        for(int i = 0; i != 1001; i++) {
            if(check[i] == nums.size())
                ans.push_back(i);
        }
        return ans;
    }
};

// Method 2
class Solution {
public:
    vector<int> intersection(vector<vector<int>>& nums) {
        vector<int> res;
        int n = nums.size();
        map<int, int> mp;
        for (auto& l : nums) {
            for (auto& i : l)
                mp[i]++;
        }
        for (auto& iter:mp) {
            if (iter.second == n)
                res.push_back(iter.first);
        }
        return res;
    }
};
```
