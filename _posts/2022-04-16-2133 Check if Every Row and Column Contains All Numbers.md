---
title: Check if Every Row and Column Contains All Numbers
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2133> Check if Every Row and Column Contains All Numbers

```c++
// Method 1
class Solution {
public:
    bool checkValid(vector<vector<int>>& matrix) {
        if(matrix.size() != matrix[0].size())
            return false;

        set<int> check_each;
        for(int i = 0; i != matrix.size(); i++) {
           for(int j = 0; j != matrix[0].size(); j++) {
                check_each.insert(matrix[i][j]);
           }
            if(matrix.size() != check_each.size())
                    return false;
            else
                check_each.clear();
        }

        check_each.clear();
        for(int i = 0; i != matrix.size(); i++) {
           for(int j = 0; j != matrix[0].size(); j++) {
                check_each.insert(matrix[j][i]);
           }
            if(matrix.size() != check_each.size())
                    return false;
            else
                check_each.clear();
        }
        return true;
    }
};

// Method 2
class Solution {
public:
    bool checkValid(vector<vector<int>>& m) {
        int n = m.size();
        for(int i = 0; i < n; i++) {
            vector<bool> r(n);
            for(int j = 0; j < n; j++) {
                if(r[m[i][j] - 1] == true)  return false;
                r[m[i][j] - 1] = true;
            }
        }

        for(int i = 0; i < n; i++) {
            vector<bool> c(n);
            for(int j = 0; j < n; j++) {
                if(c[m[j][i] - 1] == true)  return false;
                c[m[j][i] - 1] = true;
            }
        }

        return true;
    }
};
```
