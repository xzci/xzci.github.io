---
title: Count Largest Group
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1399> Count Largest Group

```c++
// Method 1
class Solution {
public:
    int findDigitsSum(int x){
        int sum = 0;
        while(x != 0){
            sum += (x % 10);
            x /= 10;
        }
        return sum;
    }
    int countLargestGroup(int n) {
        unordered_map<int, int> umap;
        int maxi = 0;
        for(int i = 1; i <= n; i++){
            int sum = findDigitsSum(i);
            umap[sum]++;
            if(umap[sum] >= maxi)
             maxi = umap[sum];
        }
        int rep = 0;
        for (auto x : umap) 
            if(x.second==maxi)
                rep++;
        return rep;
    }
};


class Solution {
public:
    int countLargestGroup(int n) {
        vector<int> c(100);
        vector<int> dp(10000,0);
        int m = 0;
        for(int i = 1; i <= n; i++){
            dp[i] = i % 10 + dp[i/10];
            m = max(m, ++c[dp[i]]);
        }
        int ret = 0;
        for(int i = 1; i < c.size(); i++){
            if(c[i] == m){
                ret++;
            }
        }
        return ret;
    }
};
```

