---
title:  Find Numbers with Even Number of Digits
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E>  Find Numbers with Even Number of Digits

```c++
class Solution {
public:
    bool checkEvenDights(int n) {
        int dights = 0;
        while(n != 0) {
            n /= 10;
            dights++;
        }
        if(dights % 2)
            return false;
        else
            return true;
    }
    int findNumbers(vector<int>& nums) {
        int ans = 0;
        for(auto i : nums) {
            if(checkEvenDights(i))
                ans++;
        }
        return ans;
    }
};
```

