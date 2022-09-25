---
title: Sum of Digits of String After Convert
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 1945> Sum of Digits of String After Convert

```c++
// Method 1
class Solution {
public:
    int getLucky(string s, int k) {
        int n = s.length();
        int sum = 0;
        string str = "";
        for(int i = 0; i < n; i++) {
            str+=to_string(s[i] - 'a');
        }
        while(k--){
            sum = 0;
            for(int i = 0; i < str.length(); i++)
                sum += (str[i] - '0');
            str = to_string(sum);
        }
        return sum;
    }
};

class Solution {
public:
    int getLucky(string s, int k) {
         int num = 0, n = 0; int sum;
        for(int i=0; i < s.length(); i++) {
            num = num*10+ s[i]-'a'+1;
            while(num) {
               n += (num % 10);
               num /= 10;
            }
        }
        k--;
        while(k--) {
            sum = 0;
            while(n > 0) {
                sum += n % 10;
                n /= 10;
            }
            n = sum;
        }
        return sum;
    }
};
```
