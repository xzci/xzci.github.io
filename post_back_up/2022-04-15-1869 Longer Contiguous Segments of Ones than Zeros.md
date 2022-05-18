---
title: Longer Contiguous Segments of Ones than Zeros
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1869> Longer Contiguous Segments of Ones than Zeros


```c++
class Solution {
public:
    bool checkZeroOnes(string s) {
        int zmax = 0,omax = 0; 
        int zcnt = 0,ocnt = 0; 
        for(char i : s){  
            if(i == '1'){  
               omax = max(omax, ++ocnt);
               zcnt = 0;
            } 
            else{  
              zmax = max(zmax, ++zcnt); 
               ocnt = 0;
            }
        }   
        return omax > zmax;
    }
};
```

