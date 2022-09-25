---
title: Unique Binary Search Trees II
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-M 95> Unique Binary Search Trees II

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
    vector<TreeNode*> generateTrees(int n) {
        if(n == 0)
            return generate(1, 0);
        return generate(1, n);
    }

    vector<TreeNode *> generate(int start, int end) {
        vector<TreeNode *> subTree;
        if(start > end) {
            subTree.push_back(nullptr);
            return subTree;
        }

        for(int i = start; i <= end; i++) {
            vector<TreeNode*> leftSubs = generate(start, i - 1);
            vector<TreeNode*> rightSubs = generate(i + 1, end);
            for(auto j : leftSubs)
                for(auto k : rightSubs) {
                    TreeNode *node = new TreeNode(i);
                    node->left = j;
                    node->right = k;
                    subTree.push_back(node);
                }
        }
        return subTree;
    }
};
```
