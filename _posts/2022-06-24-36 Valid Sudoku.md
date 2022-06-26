---
title: Valid Sudoku
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-M 36> Valid Sudoku

```c++
// Method 1
class Solution {
public:
    bool used[9];
    bool isValidSudoku(vector<vector<char>>& board) {

        for(int i = 0; i < 9; i++) {
            fill(used, used + 9, false);
            for(int j = 0; j < 9; j++)
                if(!check(board[i][j]))
                    return false;

            fill(used, used + 9, false);
            for(int j = 0; j < 9; j++)
                if(!check(board[j][i]))
                    return false;
        }

        for(int r = 0; r < 3; r++) {
            for(int c = 0; c < 3; c++) {
                fill(used, used + 9, false);
                for(int i = r * 3; i < r * 3 + 3; i++)
                    for(int j = c * 3; j < c * 3 + 3; j++)
                        if(!check(board[i][j]))
                            return false;
            }
        }
        return true;
    }
private:
    bool check(char c) {
        if(c == '.')
            return true;
        if(used[c - '1'])
            return false;

        return used[c -'1'] = true;;
    }
};

// Method 2
class Solution {
public:
    bool isValidSudoku(vector<vector<char>>& board) {
        bool row[9][9] = {false};
        bool col[9][9] = {false};
        bool box[9][9] = {false};
        for(int i = 0; i < 9; i++) {
            for(int j = 0; j < 9; j++) {
                if(board[i][j] != '.') {
                    int num = board[i][j] - '1';
                    int k = i / 3 * 3 + j / 3;
                    if(row[i][num] || col[j][num] || box[k][num])
                        return false;
                    row[i][num] = col[j][num] = box[k][num] = true;
                }
            }
        }
        return true;
    }
};

// Method 3
class Solution {
public:
    bool safe(vector<vector<char>>& board, int i, int j, int n) {
        int N = board.size();
        for(int k = 0; k < N; k++){
            if(board[i][k] == n+'0' || board[k][j] == n + '0') {
                return false;
            }
        }
        int s = sqrt(N);
        int x = i - i % s;
        int y = j - j % s;
        for(int p = 0; p < s; p++) {
            for(int q = 0; q < s; q++) {
                if(board[x + p][y + q] == n + '0') {
                    return false;
                }
            }
        }
        return true;
    }
    bool solve(vector<vector<char>>& board) {
        int N = board.size();
        int i, j, n;
        for(i = 0; i < N; i++) {
            for(j = 0; j < N; j++) {
                if(board[i][j] != '.') {
                    n=board[i][j] - '0';
                    board[i][j] = '.';
                    if(!safe(board, i, j, n)) {
                        return false;
                    }
                    board[i][j] = n + '0';
                }
            }
        }
        return true;
    }
    bool isValidSudoku(vector<vector<char>>& board) {
        return solve(board);
    }
};
```
