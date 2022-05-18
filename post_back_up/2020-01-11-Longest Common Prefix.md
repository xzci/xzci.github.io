---
title: Longest Common Prefix
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E> Longest Common Prefix

求出最长的公共字串。这题有些歧义，根据`Disucuss`中的内容，增加条件如下：
>{"a","a","b"} should give "" as there is nothing common in all the 3 strings.
>{"a", "a"} should give "a" as a is longest common prefix in all the strings.
>{"abca", "abc"} as abc
>{"ac", "ac", "a", "a"} as a.

有了该条件后，可以使用双重循环进行求解，在一般的操作中，需要注重边界值的问题。

```c++
string longestCommonPrefix(vector<string>& strs) {
    string prefix = "";
    for(int idx=0; strs.size()>0; prefix+=strs[0][idx], idx++)
        for(int i=0; i<strs.size(); i++)
            if(idx >= strs[i].size() ||(i > 0 && strs[i][idx] != strs[i-1][idx]))
                return prefix;
    return prefix;
    }
```
