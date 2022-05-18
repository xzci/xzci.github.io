---
title: Determine if String Halves Are Alike
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1704> Determine if String Halves Are Alike

```c++
class Solution {
public:
    bool halvesAreAlike(string s) {
        int n = s.size();
        string s1 = s.substr(0,n/2);
        string s2 = s.substr(n/2,n/2);
        unordered_set<char> vs = {'a','e','i','o','u','A','E','I','O','U'};
        int c = 0;
        for(auto a : s1){
            if(vs.find(a) != vs.end())
                c++;
        }
        for(auto a:s2){
            if(vs.find(a) != vs.end())
                c--;
        }
        return c == 0;
    }
};
```

