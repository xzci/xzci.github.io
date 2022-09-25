---
title: String Matching in an Array
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1408> String Matching in an Array

```c++
// Method 1
class Solution {
public:
    vector<string> stringMatching(vector<string>& words) {
        vector<string> s;
        
        for(int i = 0;i < words.size(); i++) {
            for(int j = 0;j < words.size(); j++) {
                if(j == i || words[i].size() > words[j].size())
                    continue;
                if(words[j].find(words[i]) !=-1){ 
                    s.push_back(words[i]); 
                    break;
                }
            }
        }
            return s;
    }
};


// Method 2
class Solution {
public:
    vector<string> stringMatching(vector<string>& words) {
        vector<string> myVector;
        for(int i=0; i<words.size(); i++){
            for(int j=0; j<words.size(); j++){
                if(i != j && words[j].find(words[i])!=string::npos){
                    if(find(myVector.begin(), myVector.end(), words[i]) == myVector.end()){
                        myVector.push_back(words[i]);
                    }
                }
            }
        }
        return myVector;
    }
};
```

