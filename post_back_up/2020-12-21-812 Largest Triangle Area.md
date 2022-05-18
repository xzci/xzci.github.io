---
title: Largest Triangle Area
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 812> Largest Triangle Area

```c++
class Solution {
public:

    double largestTriangleArea(vector<vector<int>>& points) {
       double res = 0;
        for (int i=0;i < points.size()-2;i++){
            for (int j=i+1;j< points.size()-1;j++){
                for (int k=j+1;k<points.size();k++){
                     res = max(res, 0.5 * abs(points[i][0] * points[j][1] + points[j][0] * points[k][1] + points[k][0] * points[i][1] - points[j][0] * points[i][1] - points[k][0] * points[j][1] - points[i][0] * points[k][1]));
                }
            }
        }
        return res;
    }
};
```

