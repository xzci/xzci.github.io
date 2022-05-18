---
title: Minimum Changes To Make Alternating Binary String
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1758> Minimum Changes To Make Alternating Binary String


```c++
//method 1
class Solution {
public:
    int minOperations(string s) {
        int count = 0, ans = 0;
        for (int i = 0; i < s.size(); i++) {
            if(i % 2 == 0) {
                if(s[i] == '1')
                    ans++;
                 else 
                    count++;
            }
            else {
                if(s[i] == '0')
                    ans++;
                 else 
                    count++;
            }
        }
        return count < ans ? count : ans;
    }
};
//method 2
class Solution {
public:
    int minOperations(string s) {
        int ch1 = 0,ch2 = 0;
        for(int i = 0; i < s.size(); i++)
            if((i % 2 && s[i] == '0') || i % 2 == 0 && s[i] == '1')
                ch1++;        
        for(int i = 0; i < s.size(); i++)
            if((i % 2 && s[i] == '1') || i % 2 == 0 && s[i] == '0')
                ch2++;
        return min(ch1,ch2);
    }
};
```

