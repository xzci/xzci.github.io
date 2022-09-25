---
title: Maximum Nesting Depth of the Parentheses
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1614> Maximum Nesting Depth of the Parentheses

```c++
class Solution {
public:
    int maxDepth(string s) {
        int ans = 0;
        int check = 0;
        for(auto i : s) {
            if(i == '(') {
                check++;
            }
                
            if(i == ')') {
                check--;
            }
            if(check > ans) {
                ans = check;
            }
        }
        return ans;
    }
};
```

