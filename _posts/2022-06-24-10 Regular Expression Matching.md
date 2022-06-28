---
title: Regular Expression Matching
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-H 10> Regular Expression Matching

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
        if(*p == '\0')
            return *s == '\0';
        if(*(p + 1) != '*') {
            if(*p == *s || (*p == '.' && *s != '\0'))
                return isMatch(s + 1, p + 1);
            else
                return false;
        }
        else {
            while(*p == *s || (*p == '.' && *s != '\0')) {
                if(isMatch(s, p + 2))
                    return true;
                s++;
            }
            return isMatch(s, p + 2);
        }
    }
};

// Method 2
class Solution {

   	// s="aab"  p="c*a*b"  c* -> j-2 as c will be repeated 0 times

private:
    bool helper(int i, int j, string &s, string &p, vector<vector < int>> &dp) {
        if (i < 0 && j < 0)
            return true;
        if (i >= 0 && j < 0)
            return false;
        if (i < 0 && j >= 0) {
            int count = 0, len = j + 1;
            if (len & 1)
                return false;
            while (j >= 0) {
                if (p[j--] == '*')
                    count++;
            }
            return count == len / 2;
        }

        if (dp[i][j] != -1)
            return dp[i][j];
        if (s[i] == p[j] or p[j] == '.')
            return dp[i][j] = helper(i - 1, j - 1, s, p, dp);
        else if (p[j] == '*')
            return dp[i][j] = helper(i, j - 2, s, p, dp)
                || ((s[i] == p[j - 1] || p[j - 1] == '.')
                && helper(i - 1, j, s, p, dp));

        return dp[i][j] = false;
    }
public:
    bool isMatch(string s, string p) {
        int m = s.size(), n = p.size();
        vector<vector < int>> dp(m, vector<int> (n, -1));
        return helper(m - 1, n - 1, s, p, dp);
    }
};
```
