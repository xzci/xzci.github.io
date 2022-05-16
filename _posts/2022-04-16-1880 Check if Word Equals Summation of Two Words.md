---
title: Check if Word Equals Summation of Two Words
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1880> Check if Word Equals Summation of Two Words


```c++
//method 1
class Solution {
public:
    bool isSumEqual(string firstWord, string secondWord, string targetWord) {
        string s1="",s2="",s3="";
        for(int i=0;i<firstWord.size();i++)
        {
            int x= firstWord[i] - 97;
            string s=to_string(x);
            s1=s1+s;
        }
        for(int i=0;i<secondWord.size();i++)
        {
            int x= secondWord[i] - 97;
            string s=to_string(x);
            s2=s2+s;
        }
        for(int i=0;i<targetWord.size();i++)
        {
            int x= targetWord[i] - 97;
            string s=to_string(x);
            s3=s3+s;
        }
        
        return ((stoi(s1) + stoi(s2)) == stoi(s3));
    }
};

// Method 2
class Solution {
public:
    bool isSumEqual(string firstWord, string secondWord, string targetWord) {
        int f=0,s=0,t=0;
        for(int j=0;j<firstWord.length();j++)
        {
            f=f*10+(firstWord[j]-'a');
        }
        for(int j=0;j<secondWord.length();j++)
        {
            s=s*10+(secondWord[j]-'a');
        }
        for(int j=0;j<targetWord.length();j++)
        {
            t=t*10+(targetWord[j]-'a');
        }
        if(f+s == t)
            return true;
        else
            return false;
    }
};
```

