---
title: Uncommon Words from Two Sentences
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 884> Uncommon Words from Two Sentences

```c++
class Solution {
public:
    void addWords(unordered_map<string,int>& m, const string& s) {
        string t;
        for(auto i:s) {
            if(i==' ') {
                if(!t.empty()) {
                    ++m[t];
                    t.clear();
                }
            }
            else t+=i;
        }
        if(!t.empty()) ++m[t];
    }
    
    vector<string> uncommonFromSentences(const string& A, const string& B) {
        unordered_map<string,int> m;
        addWords(m,A);
        addWords(m,B);
        vector<string> v;
        for(const auto& i:m)
            if(i.second==1) v.push_back(i.first);
        return v;
    }
};

```

