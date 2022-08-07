---
title: Interleaving String
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-M 97> Interleaving String

```c++
class Solution {
private:
    vector<vector<bool>> dp;
	vector<vector<bool>> vis;

	bool solve(int i, int j, string &a, string &b, string &c) {
		if (i == 0 && j == 0) return true;
		if (vis[i][j]) return dp[i][j];
		vis[i][j] = true;
		if (i == 0) return dp[i][j] = b[j - 1] == c[j - 1] && solve(i, j - 1, a, b, c);
		if (j == 0) return dp[i][j] = a[i - 1] == c[i - 1] && solve(i - 1, j, a, b, c);

		int k = i + j - 1;
		if (a[i - 1] != c[k] && b[j - 1] != c[k]) return dp[i][j] = false;
		if (a[i - 1] == c[k]) dp[i][j] = solve(i - 1, j, a, b, c);
		if (b[j - 1] == c[k]) dp[i][j] = dp[i][j] || solve(i, j - 1, a, b, c);
		return dp[i][j];
	}

public:
    bool isInterleave(string s1, string s2, string s3) {
        int n = s1.length(), m = s2.length();
		dp.resize(n + 1, vector<bool>(m + 1, false));
		vis.resize(n + 1, vector<bool>(m + 1, false));
		int k = s3.length();
		if (k != n + m) return false;
		return solve(n, m, s1, s2, s3);
    }
};
```
