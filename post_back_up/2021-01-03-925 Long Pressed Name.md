---
title: Long Pressed Name
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 925> Long Pressed Name

```c++
class Solution {
public:
    bool isLongPressedName(string name, string typed) {
        int i = 0;
        int j = 0;
        char temp;
        
        while(i <= name.size() || j <= typed.size()) { 
            if(name[i] == typed[j]) {   
                temp = name[i];
                i++;
                j++;
            }
            else {
               if(temp == typed[j])
                   j++;
                else
                    return false;
            }
        }
        return true; 
    }
};
```

