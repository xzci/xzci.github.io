---
title: Walking Robot Simulation
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 874> Walking Robot Simulation

```c++
class Solution {
public:
    int robotSim(vector<int>& commands, vector<vector<int>>& obstacles) {
        int x = 0, y = 0;
        char dir = 'u';
        
        set<pair<int, int>>s;
        for (int i = 0; i < obstacles.size(); i++)
            s.insert({obstacles[i][0], obstacles[i][1]});
        
        int res = 0;
        for (int i = 0; i < commands.size(); i++) {
            if (commands[i] > 0) {
                if (dir == 'u') {
                    int p = y;
                    while (p <= y+commands[i] && ((x == 0 && p == 0) || s.find({x, p}) == s.end()))
                        p++;
                    y = s.find({x, p}) == s.end() ? y + commands[i] : p-1;
                } else if (dir == 'd') {
                    int p = y;
                    while (p >= y-commands[i] && ((x == 0 && p == 0) || s.find({x, p}) == s.end()))
                        p--;
                    y = s.find({x, p}) == s.end() ? y - commands[i] : p+1;
                } else if (dir == 'l') {
                    int p = x;
                    while (p >= x-commands[i] && ((p == 0 && y == 0) || s.find({p, y}) == s.end()))
                        p--;
                    x = s.find({p, y}) == s.end() ? x - commands[i] : p+1;
                } else if (dir == 'r') {
                    int p = x;
                    while (p <= x+commands[i] && ((p == 0 && y == 0) || s.find({p, y}) == s.end()))
                        p++;
                    x = s.find({p, y}) == s.end() ? x + commands[i] : p-1;
                }
            } else if (commands[i] == -2) {
                if (dir == 'u') dir = 'l';
                else if (dir == 'r') dir = 'u';
                else if (dir == 'd') dir = 'r';
                else if (dir == 'l') dir = 'd';
            } else if (commands[i] == -1) {
                if (dir == 'u') dir = 'r';
                else if (dir == 'r') dir = 'd';
                else if (dir == 'd') dir = 'l';
                else if (dir == 'l') dir = 'u';
            }
            
            res = max(res, x*x + y*y);
        }
        
        return res;
    }
};
```

