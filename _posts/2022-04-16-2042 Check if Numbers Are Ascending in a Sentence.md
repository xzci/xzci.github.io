---
title: Check if Numbers Are Ascending in a Sentence
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2042> Check if Numbers Are Ascending in a Sentence

```c++
class Solution {
public:
    bool areNumbersAscending(string s) {
        int prev = INT_MIN;
        int temp = 0;
        for(int i = 0; i < s.size(); i++) {
            if(s[i] <= '9' && s[i] >= '0') {

                if(i + 1 < s.size() && (s[i+1] <= '9' && s[i+1] >= '0')) {
                    if(i + 2 < s.size() && (s[i+2] <= '9' && s[i+2] >= '0')) {
                        temp = (s[i] - '0') * 100 + (s[i+1] - '0') * 10 + (s[i+2] - '0');
                        i = i + 2;
                    } else {
                        temp = (s[i] - '0') * 10 + (s[i+1] - '0');
                        i = i + 1;
                    }
                }
                else{
                    temp =  s[i] - '0';
                }
                if(temp <= prev)
                    return false;
                prev = temp;
            }

        }
        return true;
    }
};
```
