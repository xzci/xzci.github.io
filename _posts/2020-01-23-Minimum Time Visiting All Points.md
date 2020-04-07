---
title: Leetcode
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E> Minimum Time Visiting All Points

```c++
class Solution {
public:

        int minTimeToVisitAllPoints(vector<vector<int>>& points) {
            int ans = 0;
            for (int i = 1; i < points.size(); i++) {
                int x = points[i][0] - points[i - 1][0];
                int y = points[i][1] - points[i - 1][1];
                
                if(x < 0) x *= -1;
                if(y < 0) y *= -1;
                
                if(x == y) 
                    ans += x;
                else
                    ans += max(x,y);
            }
            return ans;
        }
};
```

