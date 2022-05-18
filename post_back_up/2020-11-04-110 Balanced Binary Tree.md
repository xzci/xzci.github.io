---
title: Balanced Binary Tree
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 110> Balanced Binary Tree

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
    bool isBalanced(TreeNode* root) {
        if(!root)
            return true;
        bool bal = true;
        dfshelper(root, bal);
        return bal;  
    }
    
    int dfshelper(TreeNode* root, bool &bal) {
        if(!root)
            return 0;
        int lh = dfshelper(root->left, bal)+1;
        int rh = dfshelper(root->right, bal)+1;
        
        if(abs(lh - rh) > 1)
            bal = false;
        
        return max(lh, rh);
    }
};
```

