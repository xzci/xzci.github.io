---
title: Reverse Integer 15ms 77.99%
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E> Reverse Integer 15ms 77.99%

```c++
class Solution {
public:
    int reverse(int x) {
        int ans = 0;
        while (x) {
            int temp = ans * 10 + x % 10;
            if (temp / 10 != ans)
                return 0;
            ans = temp;
            x /= 10;
        }
        return ans;
    }
};

class Solution {
public:
   int reverse(int x){
        int n = 0;
        while(x != 0) {
            if(n > INT_MAX / 10 || n < INT_MIN / 10 || 
               (n == INT_MAX / 10 && x % 10 > INT_MAX % 10) ||
               (n == INT_MIN / 10 && x % 10 < INT_MIN % 10))
                return 0;
            n = 10 * n + x % 10;
            x /= 10;
        }
    return n;
    }
};
```

