---
title: Reorder Data in Log Files
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 937> Reorder Data in Log Files

```c++
class Solution {
public:
    struct comp{
        bool operator() (pair<string,string> & a, pair<string,string> & b) {
            return a.second == b.second ? a.first < b.first: a.second < b.second;
        }
    };
    vector<string> reorderLogFiles(vector<string>& logs) {
        vector<pair<string,string>> letter;
        vector<string> digit;
        for(string s: logs) {
            int ind = s.find(' ');
            if(s[ind+1] >= 'a') {
                letter.emplace_back(make_pair(s.substr(0,ind), s.substr(ind+1)));
            } else {
                digit.push_back(s);
            }
        }
        sort(letter.begin(),letter.end(),comp());
        vector<string> result;
        for(auto& l : letter) {
            result.push_back(l.first + " " + l.second);
        }
        for(string d: digit) 
            result.push_back(d);
        return result;
    }
};
```

