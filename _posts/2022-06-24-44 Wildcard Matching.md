---
title: Wildcard Matching
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-H 44> Wildcard Matching

```c++
// Method 1
class Solution {
public:
    bool isMatch(string s, string p) {
        char char_s[s.size() + 1];
        char char_p[p.size() + 1];
        strcpy(char_s, s.c_str());
        strcpy(char_p, p.c_str());
        return isMatch(char_s, char_p);
    }
private:
    bool isMatch(const char *s, const char *p) {
        bool star = false;
        const char *str, *ptr;
        for(str = s, ptr = p; *str != '\0'; str++, ptr++) {
            switch(*ptr) {
                case '?':
                    break;
                case '*':
                    star = true;
                    s = str, p = ptr;
                    while(*p == '*')
                        p++;
                    if(*p == '\0')
                        return true;
                    str = s - 1;
                    ptr = p - 1;
                    break;
                default:
                    if(*str != *ptr) {
                        if(!star)
                            return false;
                        s++;
                        str = s - 1;
                        ptr = p - 1;
                    }
            }
        }
        while (*ptr == '*')
                ptr++;
            return (*ptr == '\0');
    }
};

// Method 2
class Solution {
public:
    bool isMatch(string s, string p) {
        int pi = 0, si = 0, star = -1, count = 0;

        while (si < s.size()) {
            if (p[pi] == '*') {
                count = si;
                star = pi++;
            }

            else if (p[pi] == s[si] || p[pi] == '?') {
                pi++, si++;
            }
            else if (star >= 0){
                pi = star+1;
                si = ++count;
            }
            else return false;
        }

        while (pi < p.size() && p[pi] == '*')
            pi++;
        return pi == p.size();

    }
};
```
