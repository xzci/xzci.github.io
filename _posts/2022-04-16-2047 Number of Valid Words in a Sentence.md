---
title: Number of Valid Words in a Sentence
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2047> Number of Valid Words in a Sentence

```c++
class Solution {
public:
    bool solve(string s) {
        int n = s.size();

        int hy = 0;
        for(int i = 0; i < n; i++) {

            if(isalpha(s[i]))
                continue;

            else if(isdigit(s[i]))
                return false;

            else if((s[i] == '.' || s[i] == ',' || s[i] == '!') && i != n - 1)
                return false;

            else if(s[i] == '-') {
                if(hy !=0 || i == 0 || i == n-1 ||
                   !isalpha(s[i - 1]) || !isalpha(s[i + 1]))
                    return false;
                hy++;
            }
        }
        return true;
    }
    int countValidWords(string s) {
        stringstream ss(s);
        string cur;
        int cnt = 0;
        while(ss >> cur)
            if(solve(cur))
                cnt++;

        return cnt;
    }
};
```
