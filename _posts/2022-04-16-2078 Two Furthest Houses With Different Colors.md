---
title: Two Furthest Houses With Different Colors
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2078> Two Furthest Houses With Different Colors

```c++
class Solution {
public:
    int maxDistance(vector<int>& colors) {
        int result = 0;
        int size = colors.size();
        for(int x = 0; x < size; x++){
            for(int y = x + 1; y < size; y++){
                if(colors[x] != colors[y])
                    result = max(result, abs(x - y));
            }
        }

        return result;
    }
};
```
