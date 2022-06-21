---
title: Remove Digit From Number to Maximize Result
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2259> Remove Digit From Number to Maximize Result

```c++
// Method 1
class Solution {
public:
    string removeDigit(string number, char digit) {
         vector<string> v;
            for(int i = 0; i < number.size(); i++) {
                string s = number;
                if(number[i] == digit) {
                    s.erase(i,1);
                    v.push_back(s);
                }
            }
        return *max_element(v.begin(), v.end());
    }
};

class Solution {
public:
    string removeDigit(string number, char digit) {
        string str = "0";
        for(int i = 0;i<=number.size();i++) {
            if(number[i] == digit){
                string temp = number.substr(0,i) + number.substr(i+1);
                if(str < temp) {
                    str = temp;
                }
            }
        }
        return str;
    }
};
```
