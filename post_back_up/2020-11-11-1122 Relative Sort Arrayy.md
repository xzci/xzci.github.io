---
title: Relative Sort Array
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1122> Relative Sort Array

```c++
class Solution {
public:
    vector<int> relativeSortArray(vector<int>& arr1, vector<int>& arr2) {
        map<int, int> check;
        for(auto i : arr2) {
            check[i] = 0;
        }
        for(auto i : arr1) {
            check[i]++;
        }
       
            
        vector<int> ans;
        for(auto i : arr2)
            for(int j = 0; j < check[i]; j++)
                ans.push_back(i);
        for(auto i : check){
            if(find(ans.begin(), ans.end(), i.first) == ans.end())
                for(int j = 0; j != i.second; j++) {
                    ans.push_back(i.first);
                }
        }
        return ans;
    }
};
```

