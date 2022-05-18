---
title: Subdomain Visit Count
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 811> Subdomain Visit Count

```c++
// Method 1
class Solution {
public:
    vector<string> subdomainVisits(vector<string>& cpdomains) {
        std::map<std::string, int> fmap;
        std::vector<std::string> fvec;
        for(std::string s : cpdomains)
        {
            int len = s.length();
            int pos1 = s.find_first_of(' ');
            int visit = std::stoi(s.substr(0, pos1));
            int pos2 = pos1;
            while(pos2 != std::string::npos)
            {
                std::string in = s.substr(pos1+1, len-pos1);
                fmap[in] += visit;
                pos2 = s.find_first_of('.', pos1+1);
                pos1 = pos2;
            }
        }
        
        for(auto& x : fmap)
            fvec.push_back((std::to_string(x.second) + ' ' + x.first));
        
        return fvec; 
    }
};

// Method 2
class Solution {
public:
    vector<string> subdomainVisits(vector<string>& cpdomains) {
        
        unordered_map<string, int> cache;
        for (int i = 0; i< cpdomains.size(); i++) {
            int count = 0;
            int j = 0;
            while (j < cpdomains[i].size() && cpdomains[i][j]!=' '){
                count  = count*10 + (cpdomains[i][j]-'0'); 
                j++;
            }
            j++;
            cache[cpdomains[i].substr(j, cpdomains[i].size()-j)] += count;
            while (j < cpdomains[i].size()) {
                if (cpdomains[i][j] == '.')
                    cache[cpdomains[i].substr(j+1, cpdomains[i].size()-j-1)] += count;
                j++;
            }
        }
        
        vector<string> res;
        for (auto it : cache)
            res.push_back(to_string(it.second) + ' ' + it.first);
        
        return res;
    }
};
```

