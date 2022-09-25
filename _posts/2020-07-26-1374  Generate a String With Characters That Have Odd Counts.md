---
title: Generate a String With Characters That Have Odd Counts
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1374> Generate a String With Characters That Have Odd Counts

```c++
class Solution {
public:
    string generateTheString(int n) {
        if(n % 2){
            string a(n, 'a');
            return a;
        }
        else{   
            string a(n-1, 'a');
            return "b"+a;
        }
            
    }
};
```

