---
title: Rectangle Overlap
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 836> Rectangle Overlap

```c++
class Solution {
public:
    bool isRectangleOverlap(vector<int>& rec1, vector<int>& rec2) {
        int max_start = max(rec1[0], rec2[0]);
        int min_end = min(rec1[2], rec2[2]);
        if (min_end - max_start <= 0) 
            return false;
	
        int min_start = min(rec1[3], rec2[3]);
        int max_end = max(rec1[1],rec2[1]);
        return min_start - max_end >0;
    }
};
```

