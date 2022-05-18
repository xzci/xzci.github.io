---
title: Check if All the Integers in a Range Are Covered
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1893> Check if All the Integers in a Range Are Covered


```c++
class Solution {
public:
    bool isCovered(vector<vector<int>>& ranges, int left, int right) {
        for(int i = left; i <= right; i++) {
            bool flag = false;
            for(int j = 0; j < ranges.size(); j++) {
                if(ranges[j][0]<=i&&ranges[j][1]>=i) {
                    flag = true;
                    break;
                }
            }
            
            if(flag)
                continue;
            else
                return false;
        }
        
        return true;
    }
};
```

