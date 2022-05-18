---
title: Height Checker
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1051> Height Checker

```c++
class Solution {
public:
    int heightChecker(vector<int>& heights) {
       
        vector check(heights.begin(), heights.end());
        sort(heights.begin(), heights.end());
        int count = 0;
        for(int i = 0;i < heights.size(); i++){
            if(heights[i] != check[i]){
                count++;
            }
        }
        return count;

    }
};

```

