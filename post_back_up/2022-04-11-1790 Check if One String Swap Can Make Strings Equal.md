---
title: Check if One String Swap Can Make Strings Equal
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1790> Check if One String Swap Can Make Strings Equal


```c++
//method 1
class Solution {
public:
    bool areAlmostEqual(string s1, string s2) {
        vector<char> v2,v1;
        int n = s1.size();
        for(int i = 0;i < n;i++){
            if(s1[i] != s2[i]){
                v1.emplace_back(s1[i]);
                v2.emplace_back(s2[i]);
            }
        }
        if(v1.size() == 0) return true;
        else if(v1.size() != 2) return false;
        else if(v1[0] == v2[1] && v1[1] == v2[0]) return true;
        else return false;
    }
};

// Method 2
class Solution {
public:
    bool areAlmostEqual(string s1, string s2) {
        int n = s1.size();
        int cnt = 0;
        char prev_s1, prev_s2;  
        for(int i = 0; i < n; i++){
            if(s1[i] == s2[i]) continue;
            
            if(++cnt > 2) 
                return false; 
            if(cnt == 1){ 
                prev_s1 = s1[i];
                prev_s2 = s2[i]; 
            }
            else if(cnt == 2 && (s1[i] != prev_s2 || s2[i] != prev_s1)) 
                return false; 
        return cnt != 1; 
    }
};
```

