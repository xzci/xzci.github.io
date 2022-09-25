---
title: Capitalize the Title
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2129> Capitalize the Title

```c++
// Method 1
class Solution {
public:
    string capitalizeTitle(string title) {
         for(int i = 0; i < title.size(); i++) {
            if((i ==0 || title[i - 1]==' ') &&
               (i + 1 < title.size() && title[i + 1] !=' ' &&
                i + 2 < title.size() && title[i+2] != ' '))
                title[i]= toupper(title[i]);
            else
                title[i]= tolower(title[i]);
        }
        return title;
    }
};
```
