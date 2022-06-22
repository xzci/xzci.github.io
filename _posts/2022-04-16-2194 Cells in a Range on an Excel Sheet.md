---
title: Cells in a Range on an Excel Sheet
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2194> Cells in a Range on an Excel Sheet

```c++
class Solution {
public:
    vector<string> cellsInRange(string s) {
        vector<string> ans;
        string a;

        for(char i = s[0]; i <= s[3]; i++) {
            for(char j = s[1]; j <= s[4]; j++) {
               ans.push_back({i,j});
            }
        }
        return ans;
    }
};
```
