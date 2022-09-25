---
title: Divide a String Into Groups of Size k
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2138> Divide a String Into Groups of Size k

```c++
class Solution {
public:
    vector<string> divideString(string s, int k, char fill) {

        while(s.size() % k != 0)
            s += fill;

        vector<string> v;
        string sub;

        for(int i = 0; i < s.size(); i = i + k) {
            sub = "";
            sub = s.substr(i,k);
            v.push_back(sub);
        }
        return v;
    }
};
```
