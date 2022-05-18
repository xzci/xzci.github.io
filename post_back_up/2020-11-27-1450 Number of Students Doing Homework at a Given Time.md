---
title: Number of Students Doing Homework at a Given Time
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1450> Number of Students Doing Homework at a Given Time

```c++
class Solution {
public:
    int busyStudent(vector<int>& startTime, vector<int>& endTime, int queryTime) {
        int ans = 0;
        for(int i = 0; i != startTime.size(); i++) {
            if(startTime[i] <= queryTime)
                if(endTime[i] >= queryTime)
                    ans++;
                    
        }
        return ans;
    }
};
```

