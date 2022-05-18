---
title: Valid Palindrome II
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 680> Valid Palindrome II

```c++
class Solution {
public:
    bool validPalindrome(string s) {
        int i = 0;
		int j = s.length() - 1;

		while (i < j) {
			if (s[i] == s[j]) {
				i++;
				j--;
				continue;
			}
			return isPal(s, i + 1, j) || isPal(s, i, j - 1);
		}
		return true;
	}

	bool isPal(string s, int i, int j) {
		while (i < j) {
			if (s[i] == s[j]) {
				i++;
				j--;
			} else 
				return false;
		}
		return true;
    }
};
```

