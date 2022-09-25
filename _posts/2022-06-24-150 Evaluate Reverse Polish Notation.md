---
title: Evaluate Reverse Polish Notation
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-M 150> Evaluate Reverse Polish Notation

```c++
class Solution {
public:
    int evalRPN(vector<string>& tokens) {
        int n = tokens.size(), first, sec, third;
        stack<int> stk;
        for(int i = 0; i < n; i++) {
            if(tokens[i] == "+" || tokens[i] == "-" || tokens[i] == "*" || tokens[i] == "/" ) {
                sec = stk.top();
                stk.pop();
                first = stk.top();
                stk.pop();
                switch(tokens[i][0]) {
                    case '+':
                        third = first + sec;
                        break;
                    case '-':
                        third = first - sec;
                        break;
                    case '*':
                        third = first * sec;
                        break;
                    case '/':
                        third = first / sec;
                        break;

                }
                stk.push(third);
            }
            else{
                stk.push(stoi(tokens[i]));
            }
        }
        return stk.top();
    }
};
```
