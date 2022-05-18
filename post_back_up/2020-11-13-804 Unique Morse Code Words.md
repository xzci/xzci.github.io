---
title: Unique Morse Code Words
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 804> Unique Morse Code Words

```c++
class Solution {
public:
    int uniqueMorseRepresentations(vector<string>& words) {

        set<string> codes;
        vector<string> morse = { ".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.." };
        for (string& word: words) {
            string code = "";
            for (char c: word)
                code += morse[c - 'a'];
            codes.insert(code);
        }
        return codes.size();
    
    }
};
```

