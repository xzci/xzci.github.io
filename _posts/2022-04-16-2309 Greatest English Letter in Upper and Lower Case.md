---
title: Greatest English Letter in Upper and Lower Case
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2309> Greatest English Letter in Upper and Lower Case

```c++
class Solution {
public:
    string greatestLetter(string s) {
        int check_u[26] = {0};
        int check_l[26] = {0};

        for(auto c : s) {
            if(isupper(c)) {
                check_u[c - 'A']++;
            }
            else {
                check_l[c - 'a']++;
            }
        }
        string ans = "";
        for(int i = 25; i >= 0; i--) {
            if (check_u[i] && check_l[i]) {
                ans.push_back('A' + i);
                return ans;
            }
        }
        return ans;
    }
};
```
