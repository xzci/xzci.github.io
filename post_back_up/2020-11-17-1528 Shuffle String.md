---
title: Shuffle String
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1528> Shuffle String

```c++
//method1
class Solution {
class Solution {
public:
    string restoreString(string s, vector<int>& indices) {
        char chrArray[101] = {};
        
        for(int i = 0; i != s.size(); i++) {
            chrArray[indices[i]] = s[i];
        }
        string ans = "";
        for(int i = 0; i != s.size(); i++){    
            ans += chrArray[i];
        }
        
        return ans;
    }
};

//method2
class Solution {
public:
    string restoreString(string s, vector<int>& indices) {
        string S(s.length(), ' ');
        for(int i = 0; i < s.length() ; i++) 
            S[indices[i]] = s[i];
        return S;
    }
};
```

