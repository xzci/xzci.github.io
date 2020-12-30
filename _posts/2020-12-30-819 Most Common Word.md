---
title: Most Common Word
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 819> Most Common Word

```c++
// Method 1
class Solution {
public:
    string mostCommonWord(string paragraph, vector<string>& banned) {
        transform(paragraph.begin(), paragraph.end(), paragraph.begin(), ::tolower);
        map<string,int>mp;
        string s = "";
        for(char c : paragraph) {
            if(isalpha(c))
                s += c;
            else {
                if(s.size() > 0)
                    mp[s]++;
                s = "";
            }
        }
        if(s.size() > 0)
            mp[s]++;
        for(string s : banned){
            if(mp.find(s) != mp.end())
                mp[s] = 0;
        
        }
        int max = 0;
        string ans = "";
        for (auto it : mp){
            if(max < it.second) {
                max = it.second;
                ans = it.first;
            }
        }
        return ans;
    }
};

// Method 2
class Solution {
public:
    string mostCommonWord(string paragraph, vector<string>& banned) {
        for(int i = 0; i< paragraph.length(); i++) {
            char c = ispunct(paragraph[i]) ? ' ' : tolower(paragraph[i]);
            paragraph[i] = c;
        }
        string str, res;
        unordered_map<string, int> freq;
        unordered_set<string> b;

        for(int i = 0; i < banned.size(); i++){
         b.insert(banned[i]);
        }

        stringstream ss(paragraph);
        int max = 0;
        while(ss >> str) {
            if(b.count(str) == 0){
                if(freq.find(str) ==freq.end())
                    freq[str]= 1;    
                else
                    freq[str]+= 1;
                if(freq[str] > max){ 
                    res = str;
                    max = freq[str];
                 }
            }                
        }
        return res;
    }
};

```

