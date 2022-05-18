---
title: Truncate Sentence
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1816> Truncate Sentence


```c++
//method 1
class Solution {
public:
    string truncateSentence(string s, int k) {
        string ans = "";
        int flag = 0;
        for(char c : s){
            if(c == ' ') 
                flag++;
            if(flag == k)
                break;
            ans += c;
        }
        return ans;
    }
};

//Method 2
class Solution {
public:
    string truncateSentence(string s, int k) {
        for (int i = 0; i < s.size(); ++i)
            if (s[i] == ' ' && --k == 0)
                return s.substr(0, i);
        return s;
    }
};
```

