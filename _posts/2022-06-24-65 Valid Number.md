---
title: Valid Number
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-H 65> Valid Number

```c++
// Method 1
class Solution {
private:
    enum InputType {
            INVALID,  // 0
            SPACE,    // 1
            SIGN,     // 2
            DIGIT,    // 3
            DOT,      // 4
            EXPONENT, // 5
            NUM_INPUTS// 6
        };

public:
    bool isNumber(string s) {
        const int transitionTable[][NUM_INPUTS] = {
        -1,  0,  3,  1,  2, -1,
        -1,  8, -1,  1,  4,  5,
        -1, -1, -1,  4, -1, -1,
        -1, -1, -1,  1,  2, -1,
        -1,  8, -1,  4, -1,  5,
        -1, -1,  6,  7, -1, -1,
        -1, -1, -1,  7, -1, -1,
        -1,  8, -1,  7, -1, -1,
        -1,  8, -1, -1, -1, -1,
    };
        int state = 0;
        for(auto i : s) {
            InputType inputType = INVALID;
            if(isspace(i))
                inputType = SPACE;
            else if(i == '+' || i == '-')
                inputType = SIGN;
            else if(isdigit(i))
                inputType = DIGIT;
            else if(i == '.')
                inputType = DOT;
            else if(i == 'e' || i == 'E')
                inputType = EXPONENT;

            state = transitionTable[state][inputType];

            if(state == -1)
                return false;
        }

        return state == 1 || state == 4 || state == 7 || state == 8;
    }
};

// Method 2
class Solution {
public:
    bool isNumber(string s) {
        bool sign = alse, dot = false, exp = false;
        bool num = false, numAfterE = true;
        for (int i = 0; i < s.size(); i++) {
            if (isspace(s[i])) {
                if (sign || dot || exp || num)
                    return false;
            } else if (s[i] == '+' || s[i] == '-') {
                if (i > 0 && s[i - 1]!=' ' && s[i - 1]!='e')
                    return false;
                sign = true;
            } else if (s[i] == '.') {
                if (dot || exp)
                    return false;
                dot = true;
            } else if (s[i] == 'e' || s[i] == 'E') {
                if (!num || exp)
                    return false;
                exp = true;
                numAfterE = false;
            } else if (isdigit(s[i])) {
                num = true;
                numAfterE = true;
            } else return false;
        }

        return num && numAfterE;
    }
};
```
