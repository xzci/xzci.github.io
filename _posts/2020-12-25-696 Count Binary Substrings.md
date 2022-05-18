---
title: Count Binary Substrings
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 696> Count Binary Substrings

```c++
// Method 1
class Solution {
public:
int countBinarySubstrings(string s) {
    int ans = 0, previous = 0, current = 1;
    for(int i = 1 ; i < s.size() ; i++){
        if(s[i] == s[i-1]) current++;
        else{
            previous = current;
            current = 1;
        }
        if(current <= previous) ans++;
    }
    return ans;
	}
};

// Method 2
class Solution {
public:
    int countBinarySubstrings(string s) {        
        ios_base::sync_with_stdio(0); cin.tie(0);
        int i = 0, res = 0, pre = 0, l = s.size();  
        for (int j=0;j < l;j++) {
            if (s[i]!=s[j]) {             
                res += min(pre,j-i);     
                pre = j - i;
                i = j;
            }            
        }           
        return res+min(pre,l-i);        
    }
};
```

