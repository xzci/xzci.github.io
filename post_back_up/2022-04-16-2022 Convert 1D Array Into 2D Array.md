---
title: Convert 1D Array Into 2D Array
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 2022> Convert 1D Array Into 2D Array


```c++
class Solution {
public:
    vector<vector<int>> construct2DArray(vector<int>& original, int m, int n) {
        if(original.size() != m * n) return {};
		vector<vector<int>> ans(m, vector<int>(n));
		for(int i = 0, j = 0, k = 0; i<original.size(); i++, j++){
			if(j == n){
				k++;
				j = 0;
			}
			ans[k][j] = original[i];
		}
		return ans;
    }
};
```

