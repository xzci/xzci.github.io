---
title: Percentage of Letter in String
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2278> Percentage of Letter in String

```c++
class Solution {
public:
    int percentageLetter(string s, char letter) {
        int n = s.size();
		int c = 0;
		for(auto i : s){
			if(i == letter)
				c++;
		}
		return c * 100 / n;
    }
};
```
