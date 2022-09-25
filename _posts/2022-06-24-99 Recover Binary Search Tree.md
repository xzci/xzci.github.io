---
title: Recover Binary Search Tree
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-M 99> Recover Binary Search Tree

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
    void recoverTree(TreeNode* root) {
        pair<TreeNode*, TreeNode*> broken;
        TreeNode *prev = nullptr;
        TreeNode *cur = root;

        while(cur != nullptr) {
            if(cur->left == nullptr) {
                detect(broken, prev, cur);
                prev = cur;
                cur = cur->right;
            }
            else {
                TreeNode *node = cur->left;

                while(node->right != nullptr && node->right != cur)
                    node = node->right;
                if(node->right == nullptr) {
                    node->right = cur;
                    cur = cur->left;
                }
                else {
                    detect(broken, prev, cur);
                    node->right = nullptr;
                    prev = cur;
                    cur = cur->right;
                }
            }
        }
        swap(broken.first->val, broken.second->val);
    }
private:
    void detect(pair<TreeNode*, TreeNode*> &broken, TreeNode* prev, TreeNode* cur) {
        if(prev != nullptr && prev->val > cur->val) {
            if(broken.first == nullptr)
                broken.first = prev;
            broken.second = cur;
        }

    }
};

// Method 2
class Solution {
public:

    void recoverTree(TreeNode* root) {

        TreeNode* parent = nullptr;
        TreeNode* first = nullptr;
        TreeNode* second = nullptr;

        stack<TreeNode*> s;

        TreeNode* curr = root;

        while(curr || !s.empty()) {
            while(curr) {
                s.push(curr);
                curr = curr->left;
            }
            curr = s.top();
            s.pop();

            if(parent && (parent->val > curr->val)) {
                if(!first) {
                    first = parent;
                }
                second = curr;
            }
            parent = curr;
            curr = curr->right;
        }
        int temp = first->val;
        first->val = second->val;
        second->val = temp;

    }
};
```
