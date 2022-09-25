---
title: Palindrome Partitioning
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-M 131> Palindrome Partitioning

```c++
// Method 1
class Solution {
public:
    vector<vector<string>> partition(string s) {
        const int n = s.size();
        bool p[n][n];
        fill_n(&p[0][0], n * n, false);
        for(int i = n - 1; i >= 0; i--)
            for(int j = i; j < n; j++)
                p[i][j] = s[i] == s[j] && ((j - i < 2) || p[i + 1][j - 1]);

        vector<vector<string>> sub_palins[n];
        for(int i = n - 1; i >= 0; i--)
            for(int j = i; j < n; j++)
                if(p[i][j]) {
                    const string plaindrome = s.substr(i, j - i + 1);
                    if(j + 1 < n)
                        for(auto v : sub_palins[j + 1]) {
                            v.insert(v.begin(), plaindrome);
                            sub_palins[i].push_back(v);
                        }
                    else
                         sub_palins[i].push_back(vector<string> {plaindrome});
                }
        return sub_palins[0];

    }
};

// Method 2
class Solution {
public:
    vector<vector<string>> partition(string s) {
        vector<vector<string> > ret;
        if(s.empty()) return ret;

        vector<string> path;
        dfs(0, s, path, ret);

        return ret;
    }

    void dfs(int index, string& s, vector<string>& path, vector<vector<string> >& ret) {
        if(index == s.size()) {
            ret.push_back(path);
            return;
        }
        for(int i = index; i < s.size(); ++i) {
            if(isPalindrome(s, index, i)) {
                path.push_back(s.substr(index, i - index + 1));
                dfs(i+1, s, path, ret);
                path.pop_back();
            }
        }
    }

    bool isPalindrome(const string& s, int start, int end) {
        while(start <= end) {
            if(s[start++] != s[end--])
                return false;
        }
        return true;
    }
};
```
