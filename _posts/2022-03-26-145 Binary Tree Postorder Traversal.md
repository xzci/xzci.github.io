---
title: Binary Tree Postorder Traversal
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 145> Binary Tree Postorder Traversal


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
    void postorder(vector<int>&res,TreeNode* root)
    {
        if(root == NULL)
            return;
        postorder(res,root->left);
        postorder(res,root->right);
        res.push_back(root->val);
    }
    vector<int> postorderTraversal(TreeNode* root) {
        vector<int>res;
        postorder(res,root);
        return res;
    }
};
```

