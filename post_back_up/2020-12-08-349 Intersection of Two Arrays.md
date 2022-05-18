---
title: Intersection of Two Arrays
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 349> Intersection of Two Arrays

```c++
// Method 1
class Solution {
public:
    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
        map<int, int> check;
        for(auto i : nums1) {
            check[i]++;
        }
        set<int> output;
        for(auto i : nums2) {
           if(check.find(i) != check.end())
              output.insert(i);
        }
        vector<int> ans(output.begin(),output.end());
        return ans;
    }
};

// Method 2
class Solution {
public:
    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
        unordered_set<int> first(nums1.begin(), nums1.end());
        unordered_set<int> res;
        
        
        for (int num : nums2) {
            if (first.find(num) != first.end()) {
                res.insert(num);
            }
        }
        
        vector<int> sol(res.begin(), res.end());
        
        return sol;
    }
};
```

