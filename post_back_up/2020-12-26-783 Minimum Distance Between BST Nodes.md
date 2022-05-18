---
title: Minimum Distance Between BST Nodes
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 783> Minimum Distance Between BST Nodes

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
     int min_val = INT_MAX, prev = -1;
public:
    void inorder(TreeNode *root){
        if(!root)
            return;
        inorder(root->left);
        if(prev != -1)
            min_val = min(min_val, abs(root->val-prev));
        prev= root->val;
        inorder(root->right);
    }

    int minDiffInBST(TreeNode* root) {
        inorder(root);
        return min_val;
    }
};
```

