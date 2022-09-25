---
title: Sorting the Sentence
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1859> Sorting the Sentence


```c++
class Solution {
public:
    string sortSentence(string s) {
        vector<string> words(10);
        stringstream ss(s);
        string str;
        while(ss >> str) {
            int index = str[str.length() - 1] - '0'; 
            str.pop_back(); 
            words[index] = str;
        }

        str = "";
        for(int i = 1; i <= 10; i++)
            if(words[i] != "")
                str += words[i] + " "; 
        str.pop_back();
        return str;
    }
};
```

