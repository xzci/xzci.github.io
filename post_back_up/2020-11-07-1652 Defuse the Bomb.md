---
title: Defuse the Bomb
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1652> Defuse the Bomb

```c++
// Method 1
class Solution {
public:
    vector<int> decrypt(vector<int>& code, int k) {
        int n = code.size();
        vector<int>res(n,0);
        
        if(k == 0)
            return res;
        
        int start = 1,end = k;
        int sum = 0;
        if(k < 0) {
		   // if k is negative then the first window will be the last k elements
            k *= -1;
            start = n - k;
            end = n - 1;
        }
        
        // maintaining first window
        for(int i = start; i <= end; i++)
            sum += code[i];
        
        for(int i = 0; i < n; i++){
            res[i] = sum;
            // sliding the window 
            sum -= code[(start++)%n];
            sum += code[(++end)%n];
        }
        return res;
    }
};

// Method 2
class Solution {
public:
    vector<int> decrypt(vector<int>& code, int k) {
        int n = code.size();
        int dir;
        vector<int> ans(n,0);
        if(k > 0) 
            dir=1;
        else 
            if(k < 0) {
                dir=-1;
                k=-k;
            }
        else 
            return ans;
        
        for(int i = 0; i < n; i++){
            int t = 0;
            int pos;
            for(int j = 1; j <= k; j++){
                pos = i + j * dir;
                if(pos >= n)
                    pos-=n;
                else 
                    if(pos < 0) 
                        pos += n;
                t += code[pos];
            }
            ans[i] = t;
        }
        return ans;
    }
};
```

