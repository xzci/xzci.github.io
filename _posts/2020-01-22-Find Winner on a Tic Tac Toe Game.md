---
title:  Find Winner on a Tic Tac Toe Game
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E>  Find Winner on a Tic Tac Toe Game

```c++
class Solution {
public:
    string tictactoe(vector<vector<int>>& moves) {
        vector<int> aRow(3);
        vector<int> bRow(3);
        vector<int> aCol(3);
        vector<int> bCol(3);
        int aIndex_1 = 0;
        int aIndex_2 = 0;
        int bIndex_1 = 0;
        int bIndex_2 = 0;
        for (int i = 0; i < moves.size(); i++) {
            int x = moves[i][0];
            int y = moves[i][1];   
            if (i % 2) {
                if (++aRow[x] == 3 || ++aCol[y] == 3 || (x == y && ++aIndex_1 == 3) || (x + y == 2 && ++aIndex_2 == 3))
                    return "B";
            }
            else {
                if (++bRow[x] == 3 || ++bCol[y] == 3 || (x == y && ++bIndex_1 == 3) || (x + y == 2 && ++bIndex_2 == 3))
                    return "A";
            }
        }     
        if (moves.size() == 9)
            return "Draw";
        else
            return "Pending";
    }
};
```

