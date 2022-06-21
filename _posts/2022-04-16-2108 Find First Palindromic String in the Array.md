---
title: Find First Palindromic String in the Array
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2108> Find First Palindromic String in the Array

```c++
class Solution {
public:
    string firstPalindrome(vector<string>& words) {
        for(auto word : words){
            int p1 = 0;
            int p2 = word.size() - 1;
            string a = word;
            while(p1 < p2){
                if(a[p1] !=a [p2]) {
                    break;
                }
                p1++;
                p2--;
            }
            if((p1 == p2) || ((p1 - p2)==1))
                return a;
        }
        return "";
    }
};
```
