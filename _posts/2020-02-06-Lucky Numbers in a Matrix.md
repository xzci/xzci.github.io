---
title: Leetcode
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E> Lucky Numbers in a Matrix

```c++
class Solution {
public:
    vector<int> luckyNumbers (vector<vector<int>>& matrix) {
        vector<int> temp_min;
        vector<int> temp_max;
        vector<int> ans;
        
        for(int i = 0; i != matrix.size(); i++) {
            int check_min = matrix[i][0];
           for(int j = 0; j != matrix[0].size(); j++) {
              if(check_min > matrix[i][j])
                  check_min = matrix[i][j];
           }
            temp_min.push_back(check_min);
        }
        for(int i = 0; i != matrix[0].size(); i++) {
            int check_max = matrix[0][i];
           for(int j = 0; j != matrix.size(); j++) {
              if(check_max < matrix[j][i])
                  check_max = matrix[j][i];
           }
            temp_max.push_back(check_max);
        }
       
        for(int i = 0; i != temp_min.size(); i++) {
            if(find(temp_max.begin(), temp_max.end(), temp_min[i]) != temp_max.end())
                ans.push_back(temp_min[i]);
        }
        
        return ans;
    }
};

// 解法2
class Solution {
public:
    vector<int> luckyNumbers (vector<vector<int>>& matrix) {
        
        vector<int> ans;
        
        int liRow = -1;
        int liCol = -1;
        
        for( int i = 0; i < matrix.size(); ++i ) {
            int col = 0;
            for( int j = 1; j < matrix[i].size(); ++j ) {
                if ( matrix[i][j] < matrix[i][col])
                    col = j;
            }
            
            if ( liRow == -1 || matrix[liRow][liCol] < matrix[i][col]) {
                liRow = i;
                liCol = col;
            }
        }
        
        for( int i = 0; i < matrix.size(); ++i ) {
            if ( matrix[i][liCol] > matrix[liRow][liCol])
                return ans;
        }
        ans.push_back(matrix[liRow][liCol]);
        return  ans;
        
        
    }
};
```

