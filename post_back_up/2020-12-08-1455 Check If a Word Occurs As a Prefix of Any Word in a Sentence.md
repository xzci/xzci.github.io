---
title: Check If a Word Occurs As a Prefix of Any Word in a Sentence
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1455> Check If a Word Occurs As a Prefix of Any Word in a Sentence

```c++
class Solution {
public:
    int isPrefixOfWord(string sentence, string searchWord) {
        stringstream s(sentence);
        string word;
        int count = 1;
        while(s >> word){
            if (word.substr(0,searchWord.size()) == searchWord){
                return count;
            }
            count+= 1;
        }
        return -1;
    }
};
```

