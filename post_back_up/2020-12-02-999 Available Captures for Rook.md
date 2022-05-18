---
title: Available Captures for Rook
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 999> Available Captures for Rook

```c++
class Solution {
public:
    int numRookCaptures(vector<vector<char>>& board) {
        int row = 0;
        int col = 0;
        for(auto i : board) {
            auto it = find(i.begin(), i.end(), 'R');
            if(it != i.end()) {
                col = it - i.begin();
                break;
            }
            row++;
        }
        int add = 1;
        bool n = false;
        bool e = false;
        bool w = false;
        bool s = false;
        int ans = 0;
        while(true) {
            if(e != true) {
                if(col + add >= 8) {
                    e = true;
                } else {
                    if(e == false && board[row][col + add] == 'B')
                        e = true;
                    if(e == false && board[row][col + add] == 'p') {
                        e = true;
                        ans++;
                    }
                }
            }
            if(n != true) {
                if(row + add >= 8) {
                    n = true;
                } else {
                    if(n == false && board[row + add][col] == 'B')
                        n = true;
                    if(n == false && board[row + add][col] == 'p') {
                        ans++;
                        n = true;
                    }
                }
            }
            
            if(w != true) {
                if(col - add < 0) {
                    w = true;
                } else {
                    if(board[row][col - add] == 'B')
                        w = true;
                    if(w == false && board[row][col - add] == 'p') {
                        ans++;
                        w = true;
                    }
                }
            }
            if(s != true) {
                if(row - add < 0) {
                    s = true;
                } else {
                    if(board[row - add][col] == 'B')
                        s = true;
                    if(s == false && board[row - add][col] == 'p') {
                        ans++;
                        s = true;
                    }
                }
            }
            if(n && e && w && s)
                break;
            add++;
            //cout << n << e << w << s << endl;
        }
        return ans;
    }
};
```

