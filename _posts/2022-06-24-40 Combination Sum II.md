---
title: Combination Sum II
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-M 40> Combination Sum II

```c++
// Method 1
class Solution {
public:
    void recur(int ind, int tar, vector<int>& c, vector<vector<int>>& ans, vector<int>& ds){
        if(tar == 0){
            ans.push_back(ds);
            return;
        }
        for(int i = ind; i < c.size(); i++){
            if(i > ind && c[i] == c[i - 1])
                continue;
            if(c[i] > tar)
                break;

            ds.push_back(c[i]);
            recur(i + 1, tar - c[i], c, ans, ds);
            ds.pop_back();
        }
    }

    vector<vector<int>> combinationSum2(vector<int>& c, int target) {
        sort(c.begin(), c.end());
        int n = c.size();
        vector<vector<int>> ans;
        vector<int> ds;
        recur(0, target, c, ans, ds);
        return ans;
    }
};

// Method 2
class Solution {
public:
    vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {
        vector<int> combination;
        vector<vector<int>> result;
        sort(candidates.begin(), candidates.end());
        DFS(candidates, target, combination, 0, 0, result);
        return result;
    }

    void DFS(vector<int>& candidates, int target, vector<int>& combination, int start_idx, int sum, vector<vector<int>>& result) {

        if (sum == target) {
            result.push_back(combination);
        }

        for (int i = start_idx; i < candidates.size(); i++) {
            if (i != start_idx && candidates[i] ==
            candidates[i - 1])
                continue;

            sum += candidates[i];

            if (sum > target)
                break;

            combination.push_back(candidates[i]);
            DFS(candidates, target, combination, i + 1, sum, result);

            combination.pop_back();
            sum -= candidates[i];
        }
    }
};
```
