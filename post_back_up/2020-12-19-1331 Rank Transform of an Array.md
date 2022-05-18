---
title: Rank Transform of an Array
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1331> Rank Transform of an Array

```c++
// Method 1
class Solution {
public:
    vector<int> arrayRankTransform(vector<int>& arr) {
        set<int> s(arr.begin(), arr.end());
        
        unordered_map<int, int> m;
        
        int r = 0;
        
        vector<int> ans;
        
        for (auto a : s) 
            m[a] = ++r;
        
        for (auto a : arr) {
            ans.push_back(m[a]);
        }
                            
        return ans;
    }
};

// Method 2
class Solution {
public:
    vector<int> arrayRankTransform(vector<int>& arr) {
        if(arr.empty()) 
            return vector<int>();
        int min = *std::min_element(arr.begin(),arr.end());
        int max = *std::max_element(arr.begin(),arr.end());
       
        vector<int> v(max-min+1);
       
        for(int i=0; i < arr.size(); ++i) 
            v[arr[i] - min] = 1;
        
        int cum = 1;
        
        for(int i=0; i< v.size(); ++i) {
            if(v[i] == 1) {
                v[i] = cum;
                cum++;
            }
        }
        for(int i = 0; i < arr.size(); ++i) 
            arr[i] = v[arr[i] - min];
        return arr;
    }
};
```

