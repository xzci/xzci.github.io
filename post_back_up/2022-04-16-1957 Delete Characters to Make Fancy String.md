---
title: Delete Characters to Make Fancy String
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1957> Delete Characters to Make Fancy String


```c++
// Method 1
class Solution {
public:
    string makeFancyString(string s) {
        string res = "";
        for (int i = 0; i < s.size(); ++i) {
            if (i < 2 || s[i] != s[i-1] || s[i] != s[i-2]) {
                res += s[i];
            }
        }
        return res;
    }
};

// Method 2
class Solution {
public:
    string makeFancyString(string s) {
        string res;
        char tmp = s[0];
        int k = 0;
        for (auto c : s) {
            if (c == tmp)
                k++;
            else {
                k = 1;
                tmp = c;
            }
            if (k < 3)
                res += tmp;
        }
        return res;
    }
};
```

