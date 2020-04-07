---
title: Leetcode
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E> Minimum Absolute Difference

```c++
class Solution {
public:
    vector<vector<int>> minimumAbsDifference(vector<int>& arr) {
        sort(arr.begin(), arr.end());
        vector<vector<int>> ans;
        int temp = arr[1] - arr[0];
        for(int i = 1; i < arr.size(); i++) {
            int n = abs(arr[i] - arr[i - 1]);
            if(n < temp) {
                ans.clear();
                temp = n;
                ans.push_back({arr[i - 1], arr[i]});
            }
            else if(n == temp)
                ans.push_back({arr[i - 1], arr[i]});
                
        }
        return ans;
    }
};
```

