---
title: Sum of All Odd Length Subarrays
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 1588> Sum of All Odd Length Subarrays

```c++
// Method 1
class Solution {
public:
    int sumOddLengthSubarrays(vector<int>& arr) {

        int n = arr.size();
        int result = 0;

        for(int i = 0; i < n; i++){
            result += arr[i] * (((i + 1)*(n - i) + 1) / 2);
        }
        
        return result;  
    }
};

// Method 2
class Solution {
public:
    int sumOddLengthSubarrays(vector<int>& arr) {
        int ans = 0;
      
        for(int i = 1; i <= arr.size(); i += 2){
            
            int begin = 0;
            while((begin + i) <= arr.size()) {
                
                for(int times = 0; times < i; times++) {
                    ans += arr[begin + times];
                }
                begin += 1;
            }
            
        }
        return ans;
    }
};

// Method 3
class Solution {
public:
    int sumOddLengthSubarrays(vector<int>& arr) {
        int n = arr.size();
        int sum = 0;
        for(int i=1;i<=n;i+=2){
            int windowSize=i;
            int tmpSum=0;
            for(int j=0;j<windowSize;j++){
                tmpSum+=arr[j];
            }
            sum+=tmpSum;
            int start = 0;
            for(int j=windowSize;j<n;j++){
                tmpSum = tmpSum - arr[start];
                tmpSum = tmpSum + arr[j];
                start++;
                sum+=tmpSum;
            }
        }
        return sum;
        
    }
};
```

