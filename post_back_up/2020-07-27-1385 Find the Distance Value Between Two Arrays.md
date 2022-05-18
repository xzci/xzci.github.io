---
title: Find the Distance Value Between Two Arrays
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1385> Find the Distance Value Between Two Arrays

```c++
class Solution {
public:
    int findTheDistanceValue(vector<int>& arr1, vector<int>& arr2, int d) {
        int len1 = arr1.size(), len2 = arr2.size();
        int ans = 0;
        bool chk;
        
        for(int i=0; i<len1; i++){
            chk = false;
            for(int j=0; j<len2; j++){
                if(abs(arr1[i]-arr2[j]) <= d)
                {   
                    chk = true;
                    break;
                }
            }
            if(!chk) ans++;
        }
        return ans;
    }
};
```

