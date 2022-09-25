---
title: Surrounded Regions
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-M 130> Surrounded Regions

```c++
// Method 1
class Solution {
public:
    void solve(vector<vector<char>>& board) {
        if(board.empty())
            return;

        const int m = board.size();
        const int n = board.front().size();

        for(int i = 0; i < n; i++) {
            bfs(board, 0, i);
            bfs(board, m - 1, i);
        }

        for(int i = 1; i < m - 1; i++) {
            bfs(board, i, 0);
            bfs(board, i, n - 1);
        }
        for(int i = 0; i < m; i++)
            for(int j = 0; j < n; j++)
                if(board[i][j] == 'O')
                    board[i][j] = 'X';
        else if(board[i][j] == '+')
            board[i][j] = 'O';
    }

private:
    void bfs(vector<vector<char>>& board, int i, int j) {
        queue<pair<int, int>> q;
        const int m = board.size();
        const int n = board.front().size();

        auto is_valid = [&](const pair<int, int> &s) {
            const int x = s.first;
            const int y = s.second;
            if(x < 0 || x >= m || y < 0 || y >= n || board[x][y] != 'O')
                return false;
            return true;
        };
        auto state_extend = [&](const pair<int, int> &s) {
            vector<pair<int, int>> result;
            const int x = s.first;
            const int y = s.second;
            const pair<int, int> new_states[4] = {{x - 1, y}, {x + 1, y}, {x, y - 1}, {x, y + 1}};

            for(int k = 0; k < 4; k++) {
                if(is_valid(new_states[k])) {
                    board[new_states[k].first][new_states[k].second] = '+';
                    result.push_back(new_states[k]);
                }
            }
            return result;
        };

        pair<int, int> start = {i, j};
        if(is_valid(start)) {
            board[i][j] = '+';
            q.push(start);
        }
        while(!q.empty()) {
            auto cur = q.front();
            q.pop();
            for(auto s : state_extend(cur))
                q.push(s);
        }
    }
};

// Method 2
class Solution {
private:
    bool isValid(int i, int j, int n, int m) {
        if(i < 0 || j < 0 || i >= n || j >= m)
            return false;
        return true;
    }

    vector<int> dx = {1, -1, 0, 0};
    vector<int> dy = {0, 0, 1, -1};


    void dfs(vector<vector<char>>& board, vector<vector<bool>>& visited, int i, int j) {
        int n = board.size();
        int m = board[0].size();

        if(!isValid(i ,j, n, m))
            return;

        if(board[i][j] == 'X' || visited[i][j])
            return;

        visited[i][j] = true;

        for(int k = 0; k < 4; k++){
            dfs(board, visited, i + dx[k], j + dy[k]);
        }

    }
public:
    void solve(vector<vector<char>>& board) {

        int n = board.size();

        int m = board[0].size();

        vector<vector<bool>> visited(n, vector<bool>(m, false));

        for(int i = 0; i < n; i++) {
            if(board[i][0] == 'O')
                dfs(board, visited, i, 0);
            if(board[i][m-1] == 'O')
                dfs(board, visited, i, m-1);
        }

        for(int j = 0; j < m; j++) {
            if(board[0][j] == 'O')
                dfs(board, visited, 0, j);
            if(board[n - 1][j] == 'O')
                dfs(board, visited, n - 1, j);
        }

        for(int i = 0; i < n; i++){
            for(int j = 0; j < m; j++){
                if(board[i][j] == 'O' && !visited[i][j])
                    board[i][j] = 'X';
            }
        }

    }
};
```
