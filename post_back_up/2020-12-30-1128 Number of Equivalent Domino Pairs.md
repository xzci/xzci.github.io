---
title: Number of Equivalent Domino Pairs
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1128> Number of Equivalent Domino Pairs

```c++
// Method 1
class Solution {
public:
    int numEquivDominoPairs(vector<vector<int>>& dominoes) {
        for (auto &p: dominoes) {
            if (p[0]<=p[1]) {continue;}
            swap(p[0], p[1]);
        }   
        map<vector<int>, int> A;
        for (auto &p: dominoes) {++A[p];}
        int res=0;
        for (auto &p: A) {
            res += p.second*(p.second -1)/2;
        }
        return res;
    }
};

// Method 2
class Solution {
public:
    int numEquivDominoPairs(vector<vector<int>>& dominoes) {
        
        int output = 0;
        unordered_map<int, int> table;
        
        for (int i=0; i<dominoes.size(); i++) {
            int key;
            if (dominoes[i][0] < dominoes[i][1]) {
                key = dominoes[i][0]*10 + dominoes[i][1];
            }
            else {
                key = dominoes[i][1]*10 + dominoes[i][0];
            }
            table[key]++;
        }
        
        for (auto& item : table) {
            if (item.second > 1) {
                output += item.second * (item.second-1) / 2;
            }
        }
        return output;
    }
};
```

