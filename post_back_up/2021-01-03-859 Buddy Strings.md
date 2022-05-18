---
title: Buddy Strings
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 859> Buddy Strings

```c++
class Solution {
public:
    bool buddyStrings(string A, string B) { 
        if(A.size()!= B.size()) 
            return false;
        
        if(A == B){
            vector<int>freq(26,0);
            
            for(int i = 0; i < A.size(); i++){
                if(++freq[A[i] - 'a'] == 2) 
                    return true;
            }
            return false;
        }
        
        vector<int> mismatch;
        for(int i = 0; i < A.size();i++){
            if(A[i] == B[i])  
                continue;
            mismatch.push_back(i);
        }
        
        if(mismatch.size() != 2) 
            return false;
        
        if(A[mismatch[1]] == B[mismatch[0]] && B[mismatch[1]] == A[mismatch[0]])
            return true;
        
        return false;
    }
};
```

