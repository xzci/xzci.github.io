---
title: Goal Parser Interpretation
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1678> Goal Parser Interpretation

```c++
class Solution {
public:
    string interpret(string command) {
       string ans = "";
        int i = 0;
        int size = command.size();
        while(i < size) {
            if(command[i] == 'G') {
                i++;
                ans += "G";
            }
            else 
                if(command[i] == '(') {
                    if(command[i + 1] == ')') {
                    i += 2;
                    ans += "o";
                    }
                else {
                    i += 4;
                    ans += "al";
                }
            }
        }
        return ans;
    }
};
```

