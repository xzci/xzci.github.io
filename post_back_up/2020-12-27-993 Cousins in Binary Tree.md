---
title: Cousins in Binary Tree
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 993> Cousins in Binary Tree

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
private:
    std::map<int, std::pair<int, int>> map{};
    
public:
    void preOrder(TreeNode* node, int depth, int parent) {
        if (node == nullptr) {
            return;
        }
        
        map[node->val] = std::make_pair(depth, parent);
        parent = node->val;
        
        depth++;
        
        preOrder(node->left, depth, parent);
        preOrder(node->right, depth, parent);
        
        depth--;
    }
    
    bool isCousins(TreeNode* root, int x, int y) {
        preOrder(root, 0, -1);
            
        const auto [depth_x, parent_x] = map[x];
        const auto [depth_y, parent_y] = map[y];
        
        return depth_x == depth_y && parent_x != parent_y;
    }
};
```

