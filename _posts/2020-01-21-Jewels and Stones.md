---
title: Leetcode
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E>  Jewels and Stones

```c++
// 1
class Solution {
public:
    int numJewelsInStones(string J, string S) {
        int ans = 0;
        for (auto i : S) {
            if (find(J.begin(), J.end(), i) != J.end())
                ans++;
        }
        return ans;
    }
};

// 2
class Solution {
public:
  int numJewelsInStones(string J, string S) {
        int check[128] = {0};
        for (int i = 0; i != S.size(); i++) {
            check[S[i]]++;
        }
        
        for (int i = 0; i != J.size(); i++) {
            check[J[i]] = -check[J[i]];
        }
        int ans = 0;
        for (int i = 0; i != 128; i++) {
            if (check[i] < 0)
                ans = ans - check[i];
        }
        return ans;
    }
};
```

