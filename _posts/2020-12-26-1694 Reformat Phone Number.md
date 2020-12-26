---
title: Reformat Phone Number
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1694> Reformat Phone Number

```c++
class Solution {
public:
    string reformatNumber(string number) {
        string tmp, res;
        for (char c : number) {
            if (isdigit(c)) tmp.push_back(c);
        }
        for (int i = 0; i < tmp.size();) {
            if (tmp.size() - i > 4) {
                res += tmp.substr(i, 3);
                res.push_back('-');
                i += 3;
            } else if (tmp.size() - i == 4) {
                res += tmp.substr(i, 2);
                res.push_back('-');
                i += 2;
                res += tmp.substr(i, 2);
                break;
            } else {
                res += tmp.substr(i);
                break;
            }
        }
        return res;
    }
};
```

