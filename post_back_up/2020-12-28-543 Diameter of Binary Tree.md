---
title: Diameter of Binary Tree
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 543> Diameter of Binary Tree

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
    int maxDepth(TreeNode* root, int &ans) {
        if(root == NULL)
            return 0;
        if(root->left == NULL && root->right == NULL)
            return 1;
        int x, y;
        x = maxDepth(root->left, ans);
        y = maxDepth(root->right, ans);
        ans = max(ans, x + y);
        return 1 + max(x, y); 
    }
    
    int diameterOfBinaryTree(TreeNode* root) {
        int ans = 0;
        maxDepth(root, ans);
        return ans;
    }
};
```

