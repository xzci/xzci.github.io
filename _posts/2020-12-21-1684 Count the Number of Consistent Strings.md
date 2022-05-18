---
title: Count the Number of Consistent Strings
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1684> Count the Number of Consistent Strings

```c++
class Solution {
public:
    int countConsistentStrings(string allowed, vector<string>& words) {
        vector<int> letters(26,-1);
        for(int i = 0; i < allowed.size(); ++i)
            letters[allowed[i] - 'a'] = 0;
        
        int count = 0;
        for(auto word : words) {
            int i = 0;
            for(; i < word.size(); ++i)
                if(letters[word[i] - 'a'] == -1) break;
            if(i == word.size()) 
                ++count;
        }        
        return count;
    }
};
```

