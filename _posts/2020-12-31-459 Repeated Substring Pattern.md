---
title: Repeated Substring Pattern
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 459> Repeated Substring Pattern

```c++
// Method 1
class Solution {
public:
    bool repeatedSubstringPattern(string s) {
        return (s + s).substr(1, 2 * s.size() - 2).find(s) != string::npos;
    }
};

// Method 2
class Solution {
public:
    bool repeatedSubstringPattern(string s) {
        string temp;
        for(int i = 0; i < s.size() / 2; i++) {
            temp += s[i];
            if(s.size() % temp.size() == 0) {
                string res;
                int t = s.size() / temp.size();
                while(t--)
                    res += temp;
                if(res == s)
                   return 1;
            }
        }
        return 0;
    }
};
```

