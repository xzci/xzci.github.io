---
title: Can Place Flowers
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 605> Can Place Flowers

```c++
class Solution {
public:
    bool canPlaceFlowers(vector<int>& flowerbed, int n) {
        for (int i = 0; i < flowerbed.size(); i++) {
            if (n == 0) 
                return true;
            
            if (flowerbed[i] == 0) {
                if (i > 0 && flowerbed[i - 1] == 1) 
                    continue;
                if (i < flowerbed.size() - 1 && flowerbed[i + 1] == 1) 
                    continue;
                
                flowerbed[i] = 1; n--; 
            } 
        }
        
        return n == 0;
    }
};
```

