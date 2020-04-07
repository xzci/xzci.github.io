---
title: Leetcode
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E> Maximum 69 Number

```c++
class Solution {
public:
    
    int maximum69Number (int num) {
        int ans = 0;
        vector<int> temp;
        while(num != 0) {
            temp.push_back(num % 10);
             num /= 10;
        }
        
        for (int i = temp.size() - 1;  i >= 0; i--) {
            if (temp[i] == 6) {
                temp[i] = 9;
                break;
            }
        }
        for (int i = temp.size() - 1; i >= 0; i--) {
            ans = ans * 10 + temp[i];
        }
        
        return ans;
    }
};

// 2
class Solution {
public:

    int maximum69Number (int num) {
        string temp = to_string(num);
        for(int i = 0; i != temp.size(); i++)
            if(temp[i] == '6') {
                temp[i] = '9';
                break;
            }
        int ans = 0;
        for(int i = 0; i != temp.size(); i++)
            ans =  ans * 10  + (temp[i]  - '0');
        return ans;
    }
};
```

