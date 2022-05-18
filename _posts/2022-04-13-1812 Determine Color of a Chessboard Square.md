---
title: Determine Color of a Chessboard Square
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1812> Determine Color of a Chessboard Square


```c++
class Solution {
public:
    bool squareIsWhite(string coordinates) {
        return (coordinates[0] - 'a' + coordinates[1] - '1') % 2 == 1;
    }
};
```

