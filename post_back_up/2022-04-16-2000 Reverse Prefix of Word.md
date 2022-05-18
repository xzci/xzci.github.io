---
title: Reverse Prefix of Word
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 2000> Reverse Prefix of Word


```c++
//Method 1
class Solution {
public:
    string reversePrefix(string word, char ch) {
        for(int i = 0; i < word.length(); i++) {
            if(word[i] == ch) {
                reverse(word.begin(), word.begin()+i+1);
                break;
            }
        }
        return word;
    }
};

// Method 2
class Solution {
public:
    string reversePrefix(string word, char ch) {
        size_t found = word.find(ch);
        if (found != string::npos) {
            reverse(word.begin(), word.begin()+found+1);
            return word;
        }
        return word;
    }
};
```

