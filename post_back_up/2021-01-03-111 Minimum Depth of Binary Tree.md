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
        if(!root)
            return 0;
        int leftd = minDepth(root->left);
        int rightd = minDepth(root->right);
        if(leftd > 0 and rightd > 0) 
            return min(leftd, rightd) + 1;
        else if(leftd <= 0)
            return rightd + 1;
        else 
            return leftd + 1;
    }
};
```

