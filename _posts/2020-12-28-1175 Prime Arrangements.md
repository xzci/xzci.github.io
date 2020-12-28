---
title: Prime Arrangements
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1175> Prime Arrangements

```c++
class Solution {
public:
    int numPrimeArrangements(int n) {
        int m = 1e9 + 7, pr = 0, npr = 1;
        long res = 1;
        for (int i = 2; i <= n; ++i) {
            bool fg = true;
            for (int j = 2; j * j <= i; ++j) {
				if (i % j == 0) {
                    fg = false;
                    break;
                }
            }
			
            if (fg)
                res = (res * ++pr) % m;
            else
                res = (res * ++npr) % m;
        }
        
        return res;
    }
};
```

