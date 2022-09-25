---
title: Find Resultant Array After Removing Anagrams
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2273> Find Resultant Array After Removing Anagrams

```c++
// Method 1
class Solution {
public:
    vector<string> removeAnagrams(vector<string>& words) {
        set<string> ans_temp;
        vector<string> ans;
        for(auto word : words) {
            int n = ans_temp.size();
            string temp = word;
            sort(temp.begin(), temp.end());
            ans_temp.insert(temp);
            if(ans_temp.size() > 1) {
                ans_temp.clear();
                ans_temp.insert(temp);
                ans.push_back(word);
            }

            if(ans_temp.size() != n) {
                ans.push_back(word);

            }
        }
        return ans;
    }
};

// Method 2
class Solution {
public:
    vector<string> removeAnagrams(vector<string>& words) {
        vector<string>ans;
        for(int i = 0; i<words.size();) {
            int  j = i + 1;
            while(j < words.size() && isAnagram(words[i], words[j]))
                j++;
            ans.push_back(words[i]);
            i = j;
        }
        return ans;
    }

    bool isAnagram(string w,string x){
        vector<int>a(26);
        for(auto i : w)
            a[i - 'a']++;

        for(auto i : x)
            a[i - 'a']--;

        for(auto i:a)
            if(i != 0)
                return false;

        return true;
    }
};
```
