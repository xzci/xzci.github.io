---
title: Sudoku Solver
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-H 37> Sudoku Solver

```c++
class Solution {
public:
	void solveSudoku(vector<vector<char>>& board) {
		solve_suduko(board);
	}

	bool solve_suduko(vector<vector<char>>& board) {
		int n = board.size();
		int m = board[0].size();
		for(int i = 0;i < n; i++) {
			for(int j = 0; j < m; j++) {
				if(board[i][j] == '.') {
					for(char ch = '1'; ch <= '9'; ch++) {
						if(isvalid(board, ch, i, j)) {
							board[i][j] = ch;
							if(solve_suduko(board))
                                return true;
							else board[i][j] = '.';
						}
					}
					return false;
				}
			}
		}
		return true;
	}

	bool isvalid(vector<vector<char>>& board,char ch,int row,int col) {
		for(int i = 0; i < 9; i++) {
			if(board[row][i] == ch)
                return false;
			if(board[i][col] == ch)
                return false;
			if(board[3 * (row / 3) + i / 3][3 * (col / 3) + i % 3] == ch)
                return false;
		}
		return true;
	}
};
```
