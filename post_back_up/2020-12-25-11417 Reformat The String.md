---
title: Reformat The String
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1417> Reformat The String

```c++
class Solution {
public:
    string reformat(string s)  {
	string ans(s.size(), ' ');
    int charnum = 0;
    int num = 0;
    
    bool flag = false;
    for (auto i : s) {
         if(isalpha(i)) 
             charnum++;             
         else 
             num++;
    }
    
	if (abs(num - charnum) > 1) 
        return "";
    int index_num;
    int index_char;
    if(num > charnum) {
        index_num = 0;
        index_char = 1;
    }
    else {
        index_num = 1;
        index_char = 0;
    }

	for (auto i : s) {
         if(isalpha(i)) {
             ans[index_char] = i;
             index_char += 2;    
         } else {      
             ans[index_num] = i;
             index_num += 2;    
         }
    }
	return ans;
    }
};
```

