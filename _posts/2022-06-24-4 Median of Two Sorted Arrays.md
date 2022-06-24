---
title: Median of Two Sorted Arrays
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-H 4> Median of Two Sorted Arrays

```c++
// Method 1
class Solution {
public:
double findMedianSortedArrays(vector<int>& A, vector<int>& B) {
    int n = A.size();
    int m = B.size();
    if (n > m)
        return findMedianSortedArrays(B, A); // Swapping to make A smaller

    int start = 0;
    int end = n;
    int realmidinmergedarray = (n + m + 1) / 2;

    while (start <= end) {
        int mid = (start + end) / 2;
        int leftAsize = mid;
        int leftBsize = realmidinmergedarray - mid;
        int leftA
            = (leftAsize > 0)
                  ? A[leftAsize - 1]
                  : INT_MIN;
        int leftB
            = (leftBsize > 0) ? B[leftBsize - 1] : INT_MIN;
        int rightA
            = (leftAsize < n) ? A[leftAsize] : INT_MAX;
        int rightB
            = (leftBsize < m) ? B[leftBsize] : INT_MAX;
        if (leftA <= rightB and leftB <= rightA) {
            if ((m + n) % 2 == 0)
                return (max(leftA, leftB)
                        + min(rightA, rightB))
                       / 2.0;
            return max(leftA, leftB);
        }
        else if (leftA > rightB) {
            end = mid - 1;
        }
        else
            start = mid + 1;
    }
    return 0.0;
    }
};
// Method 2
class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        vector<int> Temp;
        Temp.reserve(nums1.size() + nums1.size() );
        Temp.insert(Temp.end(), nums1.begin(), nums1.end());
        Temp.insert(Temp.end(), nums2.begin(), nums2.end());
		sort(Temp.begin(), Temp.end());
		if (Temp.size() % 2 == 0)
			return (Temp[Temp.size() / 2 - 1] + Temp[Temp.size() / 2]) / 2.0;
		else
			return  Temp[Temp.size() / 2];
    }
};
```
