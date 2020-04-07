---
title: Leetcode
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E> Shift 2D Grid

```c++
// 1
class Solution {
public:
    vector<vector<int>> shiftGrid(vector<vector<int>>& grid, int k) {
       int row = grid.size();
        int col = grid[0].size();
        int n = row * col;
        vector<vector<int>> ans = grid;
        for(int i = 0; i < n; i++) {
            int j = (i + k) % n;
            int ri = i / col;
            int ci = i % col;
            int rj = j / col;
            int cj = j % col;
            ans[rj][cj] = grid[ri][ci];
        }
        return ans;
    }
};

// 2
class Solution {
public:
    vector<vector<int>> shiftGrid(vector<vector<int>>& grid, int k) {
       int row = grid.size();
        int col = grid[0].size();
        int n = row * col;
        vector<vector<int>> ans = grid;
        vector<int> tempArray;
        for(auto i : grid)
            for(auto j : i)
                tempArray.push_back(j);
        
        for(int i = 0; i != k; i++) {
            
            tempArray.insert(tempArray.begin(), tempArray[n - 1]);
            tempArray.pop_back();
        }
        
        int index = 0;
        for(int i = 0; i < row; i++) {
            for(int j = 0; j < col; j++) {
                ans[i][j] = tempArray[index];
                index++;
            }          
        }
        return ans;
    }
};
```

