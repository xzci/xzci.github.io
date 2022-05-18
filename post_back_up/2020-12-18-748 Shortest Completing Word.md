---
title: Shortest Completing Word
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 748> Shortest Completing Word

```c++
// Method 1
class Solution {
public:
    string shortestCompletingWord(string licensePlate, vector<string>& words) {
        int storelp[26]={0}; //to store count of chars in licensePlate string
        for(int i = 0; i < licensePlate.size(); i++){
            if(isalpha(licensePlate[i])){
                storelp[tolower(licensePlate[i]) - 'a'] += 1;
            }
        }
        string res = "";
        int minsize = INT_MAX;
        for(auto i = 0; i < words.size(); i++){
            int flag = 1; //let's assume it has all chars
            int storeword[26] {0};
            for(int j = 0; j < words[i].size(); j++){
                storeword[words[i][j] - 'a'] += 1;
            }
            for(int k = 0; k < 26; k++){
                if(storeword[k] < storelp[k]){ //if the required no. of chars is not present, we break
                    flag = 0;
                    break;
                }
            }
            if(flag == 1 && words[i].size() < minsize){
                    res = words[i];
                    minsize = words[i].size();
            }
        }
        return res;
    }
};

// Method 2
class Solution {
public:
    string shortestCompletingWord(string licensePlate, vector<string>& words) {
        int licCount[26]{0};
        for (char c : licensePlate) {
            if (isalpha(c)) {
                ++licCount[tolower(c) - 'a'];
            }
        }
        
        int retIndx{-1};
        for (int i{0}; i < words.size(); ++i) {
            int wCount[26]{0};
            for (char c : words[i]) {
                ++wCount[c - 'a'];
            }
            
            if (equal(begin(licCount), end(licCount), begin(wCount), end(wCount), [](int l, int r){ return l <= r; })) {
                if (retIndx < 0) {
                    retIndx = i;
                }
                else if (words[retIndx].size() > words[i].size()) {
                    retIndx = i;
                }
            }
        }
        
        return words[retIndx];
    }
};
```

