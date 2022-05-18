---
title: Check If It Is a Straight Line
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E> Check If It Is a Straight Line

```c++
class Solution {
public:
    bool checkStraightLine(vector<vector<int>>& coordinates) {
        bool temp = true;
        
        int a = coordinates[1][0] - coordinates[0][0];
        int b = coordinates[1][1] - coordinates[0][1];
        
        for(int i = 2; i < coordinates.size(); i++) {
            int x = coordinates[i][0] - coordinates[0][0];
            int y = coordinates[i][1] - coordinates[0][1];
            if(a * y != x * b) 
                return false;
        }            
       return true;
    }
};
```

