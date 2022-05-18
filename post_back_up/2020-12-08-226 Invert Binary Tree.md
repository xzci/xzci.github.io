---
title: Invert Binary Tree
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 226> Invert Binary Tree

```c++
// Method 1
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
    TreeNode* invertTree(TreeNode* root) {
        if(root==NULL)
            return NULL;
			
        TreeNode* l=invertTree(root->left);
        TreeNode* r=invertTree(root->right);
		
        root->left=r;
        root->right=l;
		
        return root;
    }
};

// Method 2
class Solution {
public:
    TreeNode* invertTree(TreeNode* root) {
        
        if(root==NULL) return NULL;
        TreeNode* temp = root->left;
        root->left = root->right;
        root->right = temp;
        
        invertTree(root->left);
        invertTree(root->right);
        
        return root;
        
        
    }
};
```

