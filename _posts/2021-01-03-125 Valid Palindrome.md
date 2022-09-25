---
title: Valid Palindrome
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 125> Valid Palindrome

```c++
class Solution {
public:
    bool isPalindrome(string s) {
        if(s.length() <= 1) 
            return true;
        int l = 0, r = s.length() - 1;
        while(l < r) {
            if(!isalnum(s[r])) 
                r--;
            else if(!isalnum(s[l])) 
                l++;
            else {
                if(tolower(s[l]) != tolower(s[r])) 
                    return false;
                l++; 
                r--;
            }
        }
        return true;
    }
};
```

