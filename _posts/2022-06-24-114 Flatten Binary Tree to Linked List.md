---
title: Flatten Binary Tree to Linked List
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-M 114> Flatten Binary Tree to Linked List

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
// Method 1
class Solution {
public:
    void flatten(TreeNode* root) {
        flatten(root, NULL);
    }
private:
    TreeNode *flatten(TreeNode *root, TreeNode *tail) {
        if(NULL == root)
            return tail;
        root->right = flatten(root->left, flatten(root->right, tail));
        root->left = NULL;
        return root;
    }
};

// Method 2
class Solution {
public:
    void flatten(TreeNode* root) {
        TreeNode * curr = root,*prev;
        while(curr != NULL) {
            if(curr->left != NULL) {
                prev = curr->left;//move to the left if it is exist
                while(prev->right != NULL) {
                    prev = prev->right;
                }
                //making connection from left subtree right to the right of curr
                prev->right = curr->right;
                curr->right = curr->left;
                curr->left = NULL;

            }
            curr = curr->right;//basically we are moving left
        }

    }
};
```
