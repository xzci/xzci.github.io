---
title: Final Value of Variable After Performing Operations
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 2011> Final Value of Variable After Performing Operations


```c++
// Method 1
class Solution {
public:
    int finalValueAfterOperations(vector<string>& operations) {
        int x = 0;
        
        for(auto op : operations){
            (op == "X++" || op == "++X") ? x+=1 : x-=1;
        }
        
        return x;
    }
};

// Method 2
class Solution {
public:
    int finalValueAfterOperations(vector<string>& str) {
        int x=0;
        for(int i=0;i<str.size();i++)
        {
            if(str[i][1]=='+')
                x++;
            else
                x--;
        }
        
        return x;
    }
};
```

