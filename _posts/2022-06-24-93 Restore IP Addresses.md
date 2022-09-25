---
title: Restore IP Addresses
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-M 93> Restore IP Addresses

```c++
// Method 1
class Solution {
public:
    vector<string> restoreIpAddresses(string s) {
        vector<string> result;
        string ip;
        dfs(s,0, 0, ip, result);
        return result;
    }
private:
    void dfs(string &s, int start, int step, string ip, vector<string>& result) {
        if(start == s.size() && step == 4) {
            ip.resize(ip.size() - 1);
            result.push_back(ip);
            return;
        }
        if(s.size() - start > (4 - step) * 3)
            return;
        if(s.size() - start < (4 - step))
            return;

        int num = 0;
        for(int i = start; i < start + 3; i++) {
            num = num * 10 + (s[i] - '0');
            if(num <= 255) {
                ip += s[i];
                dfs(s, i + 1, step + 1, ip + '.', result);
            }
            if(num == 0)
                break;
        }
    }
};

// Method 2
class Solution {
public:
    void solve(string &s, vector<string>&ans, int d, int i, string a){
     if(i == s.size() && d == 4){
          ans.push_back(a.substr(0,a.length() - 1));
          return;
      }
      if(d > 4 || (d == 4 && i < s.size())) {
          return;
      }
      int j = i;
      string val = "";
      while(j < s.size() && j < i + 3) {
          val+=s[j];
          if(stoi(val) < 256 && (j == i || s[i] != '0')){
              solve(s, ans, d + 1, j + 1, a + val + ".");
          }
          j++;
      }
  }
    vector<string> restoreIpAddresses(string s) {
        int n = s.size();
        vector<string> ans;
        if(n < 4) {
            return ans;
        }
        if(n == 4){
            string a = "";
            for(int i = 0; i < n - 1; i++){
                a += s[i];
                a += '.';
            }
            a += s[n-1];
            ans.push_back(a);
            return ans;
        }
        if(s.length() > 12){
            return ans;
        }
        string a = "";
        solve(s, ans, 0, 0, a);
        return ans;
    }
};
```
