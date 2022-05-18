---
title: Range Sum of BST
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 938> Range Sum of BST

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
    int rangeSumBST(TreeNode* root, int low, int high) {
        if (root==nullptr) return 0;
        
        int sum=0;

        if (root->val >= low)
            sum += rangeSumBST(root->left, low, high);

        if (root->val >= low && root->val <= high) 
            sum += root->val;

        if (root->val<=R)
            sum += rangeSumBST(root->right, low, high);
            
        root->left = root->right = nullptr;
        return sum;
    }
};


// Method 2
class Solution {
public:
    int rangeSumBST(TreeNode* root, int low, int high) {
        int sum = 0;
        
        if (root) {
            if (root->val >= low && root->val <= high)
                sum+= root->val;

            if (root->val < high) 
                sum += rangeSumBST(root->right, low, high);

            if (root->val > low)
                sum += rangeSumBST(root->left, low, high);
        }
        return sum;   
    }
};
```

