---
title: Construct Binary Tree from Preorder and Postorder Traversal
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-M 889> Construct Binary Tree from Preorder and Postorder Traversal

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
    TreeNode* constructFromPrePost(vector<int>& pre, vector<int>& post) {
        vector<int> pos(pre.size()+1);
        for (int i = 0; i < post.size(); i++) pos[post[i]] = i;

        TreeNode* root = nullptr;
        int i = 0;
        root = build(root, pre, pos, i);

        return root;
    }

    TreeNode* build(TreeNode* root, vector<int>& pre, vector<int>& pos, int& i) {
        if (i < pre.size()) root = new TreeNode(pre[i]);
        if (i == pre.size() - 1) {
            i++;
            return root;
        }
        int local = i;
        if (i < pre.size() && pos[pre[local]] > pos[pre[i+1]])
            root->left = build(root->left, pre, pos, ++i);
        if (i < pre.size() && pos[pre[local]] > pos[pre[i+1]])
            root->right = build(root->right, pre, pos, ++i);

        return root;
    }
};

// Method 2
class Solution {
public:
    unordered_map<int, int> m; // value->index
    TreeNode* constructFromPrePost(vector<int>& pre, vector<int>& post) {
        int len = post.size();
        for (int i = 0; i < len; i++) m[post[i]] = i;
        return construct(pre, post, 0, len - 1, 0, len - 1);
    }

    TreeNode* construct(vector<int>& pre, vector<int>& post, int a, int b, int c, int d) {
        TreeNode* n = new TreeNode(pre[a]);
        if (a == b) return n;
        int t = pre[a + 1];
        int idx = m[t];
        int len = idx - c + 1;
        n->left = construct(pre, post, a + 1, a + len, c, c + len - 1);
        if (idx + 1 == d) return n;
        n->right = construct(pre, post, a + len + 1, b, idx + 1, d - 1);
        return n;
    }
};
```
