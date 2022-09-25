---
title: Edit Distance
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-H 72> Edit Distance

```c++
class Solution {
public:
    int minDistance(string word1, string word2) {
        const int n = word1.size();
        const int m = word2.size();

        int f[n + 1][m + 1];
        for(int i = 0; i <= n; i++)
            f[i][0] = i;
        for(int i = 0; i <= m; i++)
            f[0][i] = i;

        for(int i = 1; i <= n; i++)
            for(int j = 1; j <= m; j++)
                if(word1[i - 1] == word2[j - 1])
                    f[i][j] = f[i - 1][j - 1];
                else
                    f[i][j] = 1 + min(f[i - 1][j -1], min(f[i - 1][j], f[i][j - 1]));

        return f[n][m];
    }
};
```
