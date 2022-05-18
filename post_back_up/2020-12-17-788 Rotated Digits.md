---
title: Rotated Digits
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 788> Rotated Digits

```c++
class Solution {
public:
    
        bool good(int x){
        int y;
        bool rotated=false;
        while(x > 0){
            y=x % 10;
            switch(y){
                case 0:
                case 1:
                case 8:
                    break;
                case 2:
                case 5:
                case 6:
                case 9:
                    rotated = true;
                    break;
                default:
                    return false;
            }
            x = x / 10;
        }
        return rotated;
    }
    
    int rotatedDigits(int N) {
        int count =0;
        for(int i=1;i<=N;i++){
            if(good(i)){
                count++;
            }
        }
        return count;
    }
};
```

