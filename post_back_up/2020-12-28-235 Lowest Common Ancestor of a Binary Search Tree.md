---
title: Lowest Common Ancestor of a Binary Search Tree
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 235> Lowest Common Ancestor of a Binary Search Tree

```c++
// Method 1
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
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        if(p->val < root->val && q->val < root->val)
            return lowestCommonAncestor(root->left,p,q);
        
        if(p->val > root->val && q->val > root->val)
            return lowestCommonAncestor(root->right,p,q);
        
        return root;
    }
};

// Method 2
class Solution {
public:
    // ITERATIVE
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        TreeNode* curr = root;
        while(curr)
        {
            // same branch but need to traverse
            if (p->val < curr->val and q->val < curr->val) // traverse left subtree
            {
                curr = curr->left;
            } else if(p->val > curr->val and q->val > curr->val) // traverse right subtree
            {
                curr = curr->right;
            } else { // found root that's equal to p/q OR found a fork so LCA
                return curr;
            }
        }
        return nullptr;
    }
};
```

