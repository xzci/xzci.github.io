---
title: Check if the Sentence Is Pangram
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1832> Check if the Sentence Is Pangram


```c++
class Solution {
public:
    bool checkIfPangram(string sentence) {
        vector<int> count (26,0);
        for (int i = 0; i < sentence.length(); i++)
        {
            ++count[sentence[i]-'a'];
        }
        return find(count.begin(), count.end(), 0) == count.end();
    }
};
```

