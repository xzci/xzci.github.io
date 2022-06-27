---
title: Count Asterisks
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2315> Count Asterisks

```c++
// Method 1
class Solution {
public:
    int countAsterisks(string s) {
        if(s.size() == 0)
            return 0;
        int cnt = 0;
        int bar = 0;
        for(int i = 0; i != s.size(); i++) {
            if(s[i]=='|')
                 bar++;
            if(bar % 2 == 0 && s[i]=='*')
                cnt++;
        }
        return cnt;
    }
};

// Method 2
class Solution {
public:
    int countAsterisks(string s) {
        int ans = 0;

        for(int i = 0; i < s.size(); i++) {
            if(s[i] == '|') {
                while(s[++i] != '|');
            } else if(s[i] == '*')
                ans++;
        }

        return ans;
    }
};
```
