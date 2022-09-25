---
title: Check Whether Two Strings are Almost Equivalent
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2068> Check Whether Two Strings are Almost Equivalent

```c++
class Solution {
public:
    bool checkAlmostEquivalent(string word1, string word2) {
        int check_1[26] = {0};
        int check_2[26] = {0};
        for(auto c : word1) {
            check_1[c - 'a']++;
        }
        for(auto c : word2) {
            check_2[c - 'a']++;
        }
        for(int i = 0; i != 26; i++) {
            if(abs(check_1[i] - check_2[i]) > 3)
                return false;
        }
        return true;
    }
};
```
