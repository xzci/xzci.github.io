---
title: Second Largest Digit in a String
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1796> Second Largest Digit in a String


```c++
class Solution {
public:
    int secondHighest(string s) {
        int maxm = -1;
        int preMax = -1;
        for(auto ch: s){  
            if(isdigit(ch)){
                ch = ch - '0';
                if(ch > maxm){
                    preMax = maxm;
                    maxm  = ch;  
                }
                else if(ch != maxm && ch > preMax) 
                    preMax=ch;
                
            }
        }
        return preMax;
    }
};
```

