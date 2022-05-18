---
title: Degree of an Array
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 697> Degree of an Array

```c++
class Solution {
public:
    int findShortestSubArray(vector<int>& nums) {
        unordered_map<int,vector<int>> map;
        for(int i=0; i < nums.size(); i++) {
            if(map.count(nums[i])==0) { 
                map[nums[i]] = {0,i,i};
            }
            map[nums[i]][0] += 1;
            map[nums[i]][2] = i;
           
        } 
        int degree = 0;
        int res = 0;
        for(auto key : map){
           if(key.second[0] > degree || key.second[0] == degree && 
              key.second[2] - key.second[1] + 1 < res){
               degree = key.second[0];
               res = key.second[2] - key.second[1] + 1;
           }
       } 
        return res;
    }
};
```

