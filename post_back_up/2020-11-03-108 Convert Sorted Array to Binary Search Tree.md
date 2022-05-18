---
title: Convert Sorted Array to Binary Search Tree
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 108> Convert Sorted Array to Binary Search Tree

```c++
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    TreeNode * createNode(vector<int>& nums, int left, int right){
        if(left>right)
            return NULL;            
        
        int mid = (left+right)/2;
        TreeNode * node = new TreeNode(nums[mid]);
        
        node->left = createNode(nums, left, mid-1);
        node->right = createNode(nums, mid+1, right);
        return node;
    }
    
public:
    TreeNode* sortedArrayToBST(vector<int>& nums) {
        return createNode(nums, 0, nums.size()-1);
    }
};
```

