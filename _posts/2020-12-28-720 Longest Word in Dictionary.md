---
title: Longest Word in Dictionary
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 720> Longest Word in Dictionary

```c++
class Solution {
private:
    struct TrieNode {
        TrieNode *children[26];
        bool isEndOfWord = false;
    };
    
public:
    static bool compare(string &a, string &b){
        return a.size() < b.size();
    }
    
    void TrieInsert(TrieNode *root, int idx, string &word, bool canBeBuilt, string &res){
        if(idx == word.size()){
            root->isEndOfWord = true;
            if(canBeBuilt){
                if(res.size()==word.size()){
                    res = (res<word) ? res : word;
                } else if (res.size()<word.size()){
                    res = word;
                } 
            }
            return;
        }
        
        if(root->children[word[idx]-'a'] == NULL){
            root->children[word[idx]-'a'] = new TrieNode();
        }
        
        if(idx < word.size()-1){
            canBeBuilt  &= root->children[word[idx]-'a']->isEndOfWord;
        }
        
        TrieInsert(root->children[word[idx]-'a'], idx+1, word, canBeBuilt, res);
    }
    
    string longestWord(vector<string>& words) {
        if(words.empty()){
            return "";
        }
        sort(words.begin(), words.end(), compare);
        
        TrieNode *root = new TrieNode();
        int i;
        string res = "";
        for(i=0; i<words.size(); i++){
            TrieInsert(root, 0, words[i], true, res);
        }
        return res;
    }
};
```

