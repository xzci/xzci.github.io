---
title: Minimum Depth of Binary Tree
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 111> Minimum Depth of Binary Tree

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
    int minDepth(TreeNode* root) {
        if (!root)
            return 0;
        int left = minDepth(root->left);
        int right = minDepth(root->right);
        if(!root->left || !root->right)
            return !root->left ? right + 1 : left + 1;
        root->left = NULL;
        root->right = NULL;
        return min(left, right)+1;
    }
};
```
