---
title: Find Words That Can Be Formed by Characters
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1160> Find Words That Can Be Formed by Characters

```c++
class Solution {
public:
    int countCharacters(vector<string>& words, string chars) {
        string s;
        int umap[27]={};
        for(int i=0;i<chars.size();i++){
            umap[chars[i]-'a']++; 
        }
        int sum=0, k;
        for(int i=0; i<words.size(); i++){
            s=words[i];
            k=0;
            int umap1[27]={};
            for(int j=0; j<s.size(); j++){
                umap1[s[j]-'a']++;
                if(umap1[s[j]-'a'] > umap[s[j]-'a'])    break;
                k++;
            }
            if(k == s.size())   sum+=s.size();
        }
        return sum;
    }
};
```

