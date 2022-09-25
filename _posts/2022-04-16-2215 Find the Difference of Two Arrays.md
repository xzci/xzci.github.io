---
title: Find the Difference of Two Arrays
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2215> Find the Difference of Two Arrays

```c++
// Method 1
class Solution {
public:
    vector<vector<int>> findDifference(vector<int>& nums1, vector<int>& nums2) {
        vector<vector<int>> ans(2);
        set<int> s1(nums1.begin(), nums1.end());
        set<int> s2(nums2.begin(), nums2.end());

		for(auto i : s2)
            if(!s1.count(i))
                ans[1].push_back(i);

        for(auto i : s1)
            if(!s2.count(i))
                ans[0].push_back(i);

        return ans;

    }
};

// Method 1
class Solution {
public:
    vector<vector<int>> findDifference(vector<int>& nums1, vector<int>& nums2) {
        set<int> ans1, ans2;

        bool a[2001] = {false}, b[2001] = {false};
        for(int i : nums1){
            a[i+1000] = true;
        }

        for(int j : nums2){
            b[j+1000] = true;
            if(a[j+1000] == false)
                ans2.insert(j);
        }

        for(int i : nums1){
            if(b[i+1000] == false)
                ans1.insert(i);
        }

        vector<int> r1, r2;
        for(auto i : ans1)
            r1.push_back(i);

        for(auto i : ans2)
            r2.push_back(i);

        vector<vector<int>> vec;
        vec.push_back(r1);
        vec.push_back(r2);

        return vec;
    }
};
```
