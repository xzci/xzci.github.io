---
title: Combinations
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-M 77> Combinations

```c++
class Solution {
public:
    vector<vector<int>> combine(int n, int k) {
        vector<int> path;
        vector<vector<int>> result;
        dfs(n, k, 1, 0, path, result);
        return result;
    }
private:
    void dfs(int n, int k, int start, int curr,
            vector<int>& path, vector<vector<int>>& result) {
        if(curr == k)
            result.push_back(path);
        for(int i = start; i <= n; i++) {
            path.push_back(i);
            dfs(n, k, i + 1, curr + 1, path, result);
            path.pop_back();
        }
    }
};
```
