---
title: Longest Consecutive Sequence
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-M 128> Longest Consecutive Sequence

```c++
// Method 1
class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        int len = nums.size();
        if(len < 1)
            return 0;
        set<int> data;
        for(auto n: nums) {
            data.insert(n);
        }
        bool isFirst = true;
        int prev, count = 0;
        int res = 1;
        for(int num : data) {
            if(isFirst) {
                prev = num;
                count++;
                isFirst = false;
            }
            else if(prev + 1 == num) {
                count++;
                prev = num;
                if(res < count)
                    res = count;
            }
            else {
                count = 1;
                prev = num;
            }
        }
        return res;
    }
};

// Method 2
class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int count = 1;
        int ans = 1;

        if(nums.empty())
            return 0;

        for(int i = 1; i < nums.size(); i++) {
            if(nums[i] == nums[i - 1])
                continue;

            if(nums[i] - nums[i-1]==1) {
                count++;
                if(count > ans)
                    ans = count;
            }
            else {
                count=1;
            }
        }
        return ans;
    }
};

// Method 3
class Solution {
public:
    int longestConsecutive(vector<int>& num) {
        unordered_map<int, int> map;
        int size = num.size();
        int l = 1;
        for(int i = 0; i < size; i++) {
            if (map.find(num[i]) != map.end())
                continue;
            map[num[i]] = 1;
            if (map.find(num[i] - 1) != map.end()) {
                l = max(l, mergeCluster(map, num[i] - 1, num[i]));
            }
            if (map.find(num[i] + 1) != map.end()) {
                l = max(l, mergeCluster(map, num[i], num[i] + 1));
            }
        }
        return size == 0 ? 0 : l;
    }
private:
    int mergeCluster(unordered_map<int, int> &map, int left, int right) {
        int upper = right + map[right] - 1;
        int lower = left - map[left] + 1;
        int length = upper - lower + 1;
        map[upper] = length;
        map[lower] = length;
        return length;
    }
};
```
