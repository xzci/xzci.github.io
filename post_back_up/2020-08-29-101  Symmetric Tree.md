---
title: Symmetric Tree
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 101> Symmetric Tree

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
    bool isSymmetric(TreeNode* root) {
        return !root || rec(root->left, root->right);
    }
    bool rec(TreeNode* left, TreeNode *right) {
        if(!right && !left)
            return true;
        if(!right || !left || right->val != left->val)
            return false;
        return rec(left->left, right->right) && rec(right->left, left->right);
    }
};

```

