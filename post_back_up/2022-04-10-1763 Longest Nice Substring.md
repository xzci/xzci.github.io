---
title: Longest Nice Substring
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1763> Longest Nice Substring


```c++
//method 1
class Solution {
public:
    string longestNiceSubstring(string s) {
        if(s.size() < 2)
            return "";
        unordered_set<char>st(s.begin(),s.end());
        for(int i = 0; i < s.size(); i++){
            if(!st.count(toupper(s[i])) || !st.count(tolower(s[i]))) {
                string s1 = longestNiceSubstring(s.substr(0, i));
                string s2 = longestNiceSubstring(s.substr(i + 1));
                return s1.size() >= s2.size() ? s1 : s2;
            }
        }
        return s;
    }
};

//method 2
class Solution {
public:
    string longestNiceSubstring(string s) {
        int n = s.size();
        if(n<2) return "";
        bool seen[128];
        
        int maxLength = 0, startIndex = 0;
        
        for(int i = 0; i < n; i++){
            memset(seen, false, 128);
            int oddAlpha = 0;
            for(int j = i; j < n; j++){
                char cur = s[j];
                
                if(!seen[cur]) {
                    seen[cur] = true;
                    if(seen[ cur ^ 32 ]){ // ^ 32: upper <-> lower
                        oddAlpha--;
                    } else {
                        oddAlpha++;
                    }
                }
                if(oddAlpha==0 && j-i+1 > maxLength){
                    maxLength = j-i+1;
                    startIndex = i;
                }
            } 
        }
        return s.substr(startIndex, maxLength);
    }
};
```

