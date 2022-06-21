---
title: Maximum Number of Words Found in Sentences
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2114> Maximum Number of Words Found in Sentences

```c++
// Method 1
class Solution {
public:
    int mostWordsFound(vector<string>& sentences) {
        int ans = 0;
        for(auto sentence : sentences) {
            int cn_words = 1;
            for(auto word : sentence) {
                if(word == ' ')
                    cn_words++;
            }
            if(cn_words > ans)
                ans = cn_words;
        }
        return ans;
    }
};

// Method 2
class Solution {
public:
    int mostWordsFound(vector<string>& sentences) {
        int ans = 0;
        for(auto s: sentences){
            ans = std::max(ans, (int)(count(s.begin(), s.end(), ' ')));
        }
        return ans + 1;
    }
};
```
