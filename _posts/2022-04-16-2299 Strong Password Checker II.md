---
title: Strong Password Checker II
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2299> Strong Password Checker II

```c++
class Solution {
public:
    bool strongPasswordCheckerII(string password) {
        int  lowercase=0;
        int uppercase =0;
        int digit=0;
        int character=0;

        if(password.size()<8)
            return false;

        for(int i = 0; i < password.size(); i++) {
            if(i > 0) {
                if(password[i-1]==password[i])
                    return false;
            }

            if(isupper(password[i]))
                uppercase++;
            else if(islower(password[i]))
                lowercase++;
            else if(isdigit(password[i]))
                digit++;
            else
                character++;
        }

        if(lowercase >= 1 && uppercase >=1 && digit >=1 && character >=1)
            return true;

        return false;
    }
};
```
