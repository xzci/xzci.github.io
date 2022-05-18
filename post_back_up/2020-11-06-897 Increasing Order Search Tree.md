---
title: Increasing Order Search Tree
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 897> Increasing Order Search Tree

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
    TreeNode* cur;

    void travel(TreeNode* root)
    {
        if(root == NULL) return;
        
        travel(root->left);
        
        root->left = NULL;
        cur->right = root;
        cur = root;
        
        travel(cur->right);
        
    }
    TreeNode* increasingBST(TreeNode* root) {
        if(root == NULL) return root;
       
        TreeNode* ans = new TreeNode(0);
        cur = ans;
        travel(root);
        return ans->right;
    }
};
```

