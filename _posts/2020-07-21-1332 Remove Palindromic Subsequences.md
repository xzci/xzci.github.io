---
title: Maximum Number of Balloons
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1332> Remove Palindromic Subsequences

```c++
class Solution {
public:
    int removePalindromeSub(string s) {
        if(s.empty()){
            return 0;
        }
        if(isPalindrome(s)){
            return 1;
        }
        return 2;
    }
    bool isPalindrome(string s){
        for(int i=0; i != s.size(); i++){
            if(s[i] != s[s.size() - 1 - i]){
                return false;
            }
        }
        return true;
    }
};
```

