---
title: Root Equals Sum of Children
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 2236> Root Equals Sum of Children

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
    bool checkTree(TreeNode* root) {
        return (root->val == (root->left->val) + root->right->val);
    }
};
```
