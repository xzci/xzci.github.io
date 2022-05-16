---
title: Count Special Quadruplets
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1995> Count Special Quadruplets


```c++
//method 1
// class Solution {
// public:
//     int countQuadruplets(vector<int>& nums) {
//         int ans=0;
//         int n=nums.size();
//         for(int i=0;i<n;i++) {
//             for(int j=i+1;j<n;j++) {
//                 for(int k=j+1;k<n;k++) {
//                     for(int l=k+1;l<n;l++) {
//                         if(nums[i]+nums[j]+nums[k]==nums[l])
//                             ans++;
//                     }
//                 }
//             }
//         }
//         return ans;
//     }
// };

// Method 2
class Solution {
public:
    int countQuadruplets(vector<int>& nums) {
        vector<int> mp(201,0);
        int ans=0;
        int n=nums.size();
        for(int i=1; i<n; i++) {
            for(int j=0; j<i; j++)
                mp[nums[i]+nums[j]]++;
            for(int k=i+2; k<n; k++) {
                int d=nums[k]-nums[i+1];
                if(d>=0)
                    ans+=mp[d];
            }
        }
     return ans;
    }
};
```

