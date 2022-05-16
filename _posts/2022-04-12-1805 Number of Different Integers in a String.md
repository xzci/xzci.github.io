---
title: Number of Different Integers in a String
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1805> Number of Different Integers in a String


```c++
//method 1
class Solution {
public:
    int numDifferentIntegers(string word) {
        unordered_set<string> set;
        string num = "";
        int n = word.size();
        for (int i = 0; i <= n; ++i) {
            if (i == n || isalpha(word[i])) {
                if (i && isdigit(word[i-1])) {
                    int j;
                    for (j = 0; j < num.size(); ++j) {
                        if (num[j] != '0') {
                            set.insert(num.substr(j));
                            break;
                        }
                    }
                    if (j == num.size()) {
                        set.insert("0");
                    }
                    num = "";
                }
            } else {
                num += word[i];
            }
        }
        return set.size();
    }
};

//Method 2
class Solution {
public:
    int numDifferentIntegers(string word) {
        set<string> s;
        string numstr;
        for(int i = 0; i < word.size(); i++) {
            if(word[i] >=97 && word[i] <=122) {
                if(numstr.size() > 0) {
                    int j = 0;
                    while(j < numstr.size()) {
                        if(numstr[j]!='0')
                          break;
                        numstr.erase(0,1);
                    }
                  s.insert((numstr));
                  numstr="";
              }
            }
            else
            numstr += word[i];
        }
        
        if(numstr.size() >= 1) {
            int j = 0;
            while(j < numstr.size()) {
                if(numstr[j] != '0')
                  break;
                numstr.erase(0,1);
             }
            s.insert((numstr));
        }
        
        return s.size();   
    }
};
```

