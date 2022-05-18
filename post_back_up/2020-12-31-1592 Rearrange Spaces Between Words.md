---
title: Rearrange Spaces Between Words
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1592> Rearrange Spaces Between Words

```c++
class Solution {
public:
    string reorderSpaces(string text) {
        auto words{0}, words_lengths{0};
        string w;
        for(stringstream ss{text}; ss>>w; words_lengths += size(w), words++);

        int spaces = size(text) - words_lengths,
                 d = words != 1 ? spaces / (words - 1) : 0;

        string out;        
        for(stringstream ss{text}; ss>>w; spaces-=d)
            out.append(w).append(--words ? d : spaces, ' ');

        return out; 
    }
};
```

