---
title: Rearrange Characters to Make Target String
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2287> Rearrange Characters to Make Target String

```c++
// Method 1
class Solution {
public:
    int rearrangeCharacters(string s, string target) {
        int check_1[26] = {0};
        int check_2[26] = {0};
        for(auto c : s) {
            check_1[c - 'a']++;
        }
         for(auto c : target) {
            check_2[c - 'a']++;
        }
        int ans = 100000;

        for(int i = 0; i != 26; i++) {
            if(check_2[i] != 0) {
                ans = min(ans, check_1[i] / check_2[i]);
            }
        }

        return ans;
    }
};

// Method 2
class Solution {
public:
    int rearrangeCharacters(string s, string target) {
        vector<int> vs(26,0);vector<int> vt(26,0);
        for(int i=0;i<target.size();i++){
            vt[target[i]-'a']++;
        }
        for(int i=0;i<s.size();i++){
            vs[s[i]-'a']++;
        }
        int min_multiple = INT_MAX;
        for(int i=0;i<26;i++){
            if(vt[i] !=0){
                min_multiple = min(min_multiple,vs[i]/vt[i]);
            }
        }
        return min_multiple;
    }
};
```
