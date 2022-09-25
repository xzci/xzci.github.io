---
title: Binary Tree Inorder Traversal
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 94> Binary Tree Inorder Traversal

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
    void inorder(TreeNode* root, vector<int> &node)
    {
        if(root ==NULL)
            return;
        inorder(root->left,node);
        node.push_back(root->val);
        inorder(root->right,node);
    }
    vector<int> inorderTraversal(TreeNode* root) {
        vector<int> node;
        
        inorder(root,node);
        
        return node;
    }
};

```

(a) Inorder (Left, Root, Right) 
(b) Preorder (Root, Left, Right) 
(c) Postorder (Left, Right, Root) 

