---
title: Find a Corresponding Node of a Binary Tree in a Clone of That Tree
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-E 1379> Find a Corresponding Node of a Binary Tree in a Clone of That Tree

```c++
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */

class Solution {
    TreeNode *ans;
public:
    TreeNode* getTargetCopy(TreeNode* original, TreeNode* cloned, TreeNode* target) {
        if(!cloned)
            return NULL;

        getTargetCopy(original, cloned -> left, target);
        getTargetCopy(original, cloned -> right, target);

        if(cloned -> val == target -> val) ans = cloned;

        return ans;
    }
};
```
