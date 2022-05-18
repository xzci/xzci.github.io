---
title: Sum of Left Leaves
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 404> Sum of Left Leaves

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
    int sumOfLeftLeaves(TreeNode* root) {
      
      if(root == nullptr) return 0;
      
      int sum = 0;
      
      if(root ->left != nullptr && root->left-> left == nullptr && root->left->right == nullptr) 
          sum += root->left->val;
      
      return sum + sumOfLeftLeaves(root->left) + sumOfLeftLeaves(root->right);
      
    }
};
```

