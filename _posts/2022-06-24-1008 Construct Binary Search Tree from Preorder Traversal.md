---
title: Construct Binary Search Tree from Preorder Traversal
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-M 1008> Construct Binary Search Tree from Preorder Traversal

```c++
class Solution {
public:
    TreeNode* bstFromPreorder(vector<int>& preorder) {
        int i=0;
        return treeHelp(preorder, i, LONG_MAX);
    }

    TreeNode* treeHelp(vector<int> &preorder, int &i, long maxVal) {
        if(i == preorder.size() || preorder[i] > maxVal)
            return NULL;

        TreeNode *n = new TreeNode(preorder[i++]);

        n->left = treeHelp(preorder, i, n->val);
        n->right = treeHelp(preorder, i, maxVal);

        return n;
    }
};
```
