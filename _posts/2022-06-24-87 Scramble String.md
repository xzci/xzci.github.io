---
title: Scramble String
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-H 87> Scramble String

```c++
// Method 1
class Solution {
public:
    bool isScramble(string s1, string s2) {
        const int n = s1.size();
        if(s1.size() != s2.size())
            return false;

        bool f[n + 1][n][n];
        fill_n(&f[0][0][0], (n + 1) * n * n, false);

        for(int i = 0; i < n; i++)
            for(int j = 0; j < n; j++)
                f[1][i][j] = s1[i] == s2[j];

        for(int k = 1; k <= n; k++)
            for(int i = 0; i + k <= n; i++)
                for(int j = 0; j + k <= n; j++)
                    for(int h = 1; h < k; h++)
                        if((f[h][i][j] && f[k - h][i + h][j + h]) ||
                            (f[h][i][j + k - h] && f[k - h][i + h][j])){
                                f[k][i][j] = true;
                            break;
                        }
        return f[n][0][0];

    }
};

// Method 2
class Solution {
public:
    bool isScramble(string s1, string s2) {
        int sum1 = 0, sum2 = 0;
        int n = s1.size();
        if (n == 1) return s1[0] == s2[0];
        int p1 = -1, p2 = -1;
        for (int i = 0; i < n; i++) {
            sum1 += s1[i] * s1[i] - s2[i] * s2[i];
            sum2 += s1[i] * s1[i] - s2[n - 1 - i] * s2[n - 1 - i];
            if (sum1 == 0 && i != n-1) p1 = i;
            if (sum2 == 0 && i != n-1) p2 = i;
        }
        int a = 0, b = 0;
        if (p1 != -1) a = isScramble(s1.substr(0, p1 + 1), s2.substr(0, p1 + 1)) && isScramble(s1.substr(p1 + 1, n - p1 - 1 ), s2.substr(p1 + 1, n - p1 - 1));
        if (p2 != -1) b = isScramble(s1.substr(0, p2 + 1), s2.substr(n - p2 - 1, p2 + 1)) && isScramble(s1.substr(p2 + 1, n - p2 - 1), s2.substr(0, n - p2 - 1));
        return a || b;
    }
};
```
