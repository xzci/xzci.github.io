---
title: Check if Binary String Has at Most One Segment of Ones
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1784> Check if Binary String Has at Most One Segment of Ones


```c++
//method 1
class Solution {
public:
    bool checkOnesSegment(string s) {
        bool consecutive{false};
        int count{0};
        
        for(char &c : s){
            if(c == '1' && consecutive)
                return false;
            
            if(c == '1')
               count++;
            else{
                if(!consecutive && count > 0)
                    consecutive = true;
                
                count = 0;
            }
        }
        
        return consecutive || count;
    }
};

//method 2
class Solution {
public:
    bool checkOnesSegment(string s) {
        int i = 0;
		// scan for sequential 1's
        while(i < s.size() && s[i]=='1'){
            i++;
        }
		// scan for non sequential 1's
        while(i < s.size() && s[i]!='1'){
            i++;
        }
		// no non-sequential 1's detected
        return i == s.size();
    }
};
```

