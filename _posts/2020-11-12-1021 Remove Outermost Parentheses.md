---
title: Remove Outermost Parentheses
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1021> Remove Outermost Parentheses

```c++
class Solution {
public:
    string removeOuterParentheses(string S) {
        string ans = "";
        int level = 0;
        for(auto c : S) {
             if (c == '(') {
                if (level++) {
                    ans += '(';
                }
            } else {
                if (--level) {
                    ans += ')';
                }
            }
            
        }
        return ans;
    }
};
```

