---
title: Compare Strings by Frequency of the Smallest Character
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1170> Compare Strings by Frequency of the Smallest Character

```c++
class Solution {
public:
    vector<int> numSmallerByFrequency(const vector<string>& queries, 
                                    const vector<string>& words) {
    if (queries.empty() || words.empty()) {
      return {};
    }
    vector<int> vqf(queries.size());
    for (size_t i = 0; i < queries.size(); ++i) {
      vqf[i] = frequency(queries[i]);
    }
    vector<int> vwf(words.size());
    for (size_t i = 0; i < words.size(); ++i) {
      vwf[i] = frequency(words[i]);
    }
    sort(vwf.begin(), vwf.end());
    vector<int> res(queries.size());
    for (size_t i = 0; i < queries.size(); ++i) {
      auto it = upper_bound(vwf.begin(), vwf.end(), vqf[i]);
      res[i] = distance(it, vwf.end());
    }
    return res;
  }

private:
  int frequency(const string& s) {
    if (s.empty()) {
      return 0;
    }
    return count(s.begin(), s.end(), *min_element(s.begin(), s.end()));
  }
};
```

