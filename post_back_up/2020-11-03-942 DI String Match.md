---
title: DI String Match
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 942> DI String Match

```c++
// Method 1
class Solution {
public:
    vector<int> diStringMatch(string S) {
        int numberI = 0;
        int numberD = S.size();
        vector<int> ans(S.size() + 1, 0);
        int index = 0;
        for(auto i : S) {
            if (i == 'I')
                ans[index] = numberI++;
            else
                ans[index] = numberD--;
            index++;
        }
                ans[index] = numberI;
        
        return ans;      
    }
};

// Method 2
class Solution {
public:
        int D = count(S.begin(),S.end(),'D') + 1, 
        int I = D-1;
        vector<int> res(s.size()+1);
        if(s[0]=='D') 
            res[0]=--D;
        int i=0;
        for(auto ch:s) 
            res[++i] = ch == 'D' ? --D : ++I;
        return res;
        
    }
};
```

