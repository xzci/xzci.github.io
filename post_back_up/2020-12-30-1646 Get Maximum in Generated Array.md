---
title: Get Maximum in Generated Array
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1646> Get Maximum in Generated Array

```c++
class Solution {
public:
    int getMaximumGenerated(int n) {
        if (n <= 1)
		return n;
        int maxGen = 0;
        vector<int> vGen(n + 1, 0);
        vGen[1] = 1;
        for (int i = 2; i <= n; i++) {
            if (i % 2 == 0)
                vGen[i] = vGen[i / 2];
            else
                vGen[i] = vGen[(i - 1) / 2] + vGen[(i - 1) / 2 + 1];

            maxGen = max(maxGen, vGen[i]);
        }
        return maxGen;
    }
};
```

