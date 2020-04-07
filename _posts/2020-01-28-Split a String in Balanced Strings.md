---
title: Split a String in Balanced Strings
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E> Split a String in Balanced Strings

```c++
class Solution {
public:
    int balancedStringSplit(string s) {
        int index = 1;
        int ans = 0;
        char temp = s[0];
        for(int i = 1; i < s.size(); i++) {
            if(s[i] != temp) {
                index--;
            }
            else
                index++;
            if(index == 0) {
                ans++;
                temp = s[i + 1];
                index = 1;
                i++;
            }
        }
        return ans;
    }
};
```

