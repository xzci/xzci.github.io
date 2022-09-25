---
title: Combination Sum
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-M 39> Combination Sum

```c++
// Method 1
class Solution {
public:
    vector<vector<int>> ans;
    void solve(int i, vector<int>& arr, vector<int>& temp, int target) {
        if(target == 0) {
            ans.push_back(temp);
            return;
        }

        if(target < 0)
            return;

        if(i == arr.size())
            return;

        solve(i + 1, arr, temp, target);

        temp.push_back(arr[i]);
        solve(i, arr, temp, target - arr[i]);
        temp.pop_back();

    }
    vector<vector<int>> combinationSum(vector<int>& arr, int target) {
        ans.clear();
        vector<int> temp;
        solve(0, arr, temp, target);

        return ans;
    }
};

// Method 2
class Solution {
public:

    void comb(vector<int>& t ,vector<vector<int>>& ans , vector<int>& candidates , int target ,int i ){
        if(target == 0){
            ans.push_back(t) ;
            return ;
        }
        while(i < candidates.size() && target - candidates[i] >= 0){
            t.push_back(candidates[i]) ;
            comb(t , ans , candidates , target - candidates[i] , i ) ;
                i++ ;
            t.pop_back() ;
        }
    }

    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
        sort(candidates.begin() , candidates.end()) ;
        candidates.erase(unique(candidates.begin() , candidates.end()) ,candidates.end()) ;
        vector<int> t ;
        vector<vector<int>> ans ;
        comb(t , ans , candidates , target , 0 ) ;
        return ans ;
    }
};
```
