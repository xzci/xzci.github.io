---
title: Check If String Is a Prefix of Array
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 1961> Check If String Is a Prefix of Array

```c++
class Solution {
public:
    bool isPrefixString(string s, vector<string>& words) {
        int i = 0;

        for(auto word : words) {
            bool check = true;
            for (auto c : word) {
               if(check == true) {
                   if(c != s[i])
                       check = false;
                }
                i++;
            }
            if(check == false)
                return false;
            if(i == s.size())
                return true;
        }
        return false;
    }
};
```
