---
title: Permutations II
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-M 47> Permutations II

```c++
// Method 1
class Solution {
private:
    void permute(vector<int>& nums, vector<vector<int>>&ans, int l) {
        int r = nums.size() - 1;
        unordered_set<int> s;
        if(l == r) {
            ans.push_back(nums);
            return;
        }
        else {
            for(int i = l; i <= r; i++){
                if(s.find(nums[i]) != s.end())
                    continue;
                else {
                    s.insert(nums[i]);
                    swap(nums[i], nums[l]);
                    permute(nums, ans, l + 1);
                    swap(nums[i], nums[l]);
                }
            }
        }
    }
public:
    vector<vector<int>> permuteUnique(vector<int>& nums) {
        vector<vector<int>> ans;
        int l = 0;
        permute(nums, ans, l);
        return ans;
    }
};

// Method 2
class Solution {
public:

      void solve(int n, vector<int>& v, vector<vector<int>>& ans,
                 vector<int>& nums, vector<int>& mp) {
        if(v.size() == nums.size()){
            ans.push_back(v);
            return;
        }
       for(int i = 0; i < n; i++) {
           if(mp[i] == 1)continue;

            if(i > 0 && nums[i] == nums[i - 1] && !mp[i - 1])
                continue;
            v.push_back(nums[i]);
            mp[i] = 1;
            solve(n, v, ans, nums, mp);
            mp[i] = 0;
            v.pop_back();
        }

    }

    vector<vector<int>> permuteUnique(vector<int>& nums) {
        vector<vector<int>> ans;
        vector<int> v;
        int n = nums.size();
        vector<int>mp (n, 0);
        sort(nums.begin(), nums.end());
        solve(n, v, ans, nums, mp);
        return ans;
    }
};
```
