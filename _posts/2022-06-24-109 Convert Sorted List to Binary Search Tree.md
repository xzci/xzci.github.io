---
title: Convert Sorted List to Binary Search Tree
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-M 109> Convert Sorted List to Binary Search Tree

```c++
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
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
    TreeNode* sortedListToBST(ListNode* head) {
        return sortedListToBST(head, listLength(head));
    }
private:
    TreeNode* sortedListToBST(ListNode *head, int len) {
        if(len == 0)
            return nullptr;
        if(len == 1)
            return new TreeNode(head->val);

        TreeNode *root = new TreeNode(nth_node(head, len / 2 + 1)->val);
        root->left = sortedListToBST(head, len / 2);
        root->right = sortedListToBST(nth_node(head, len / 2 + 2), (len - 1) / 2);
        return root;
    }


    int listLength(ListNode *node) {
        int n = 0;
        while(node) {
            ++n;
            node = node->next;
        }
        return n;
    }

    ListNode* nth_node(ListNode* node, int n) {
        while(--n) {
            node = node->next;
        }
        return node;
    }
};

// Method 2
class Solution {
public:
    TreeNode * buildBST(const vector<int> &v, const int lo, const int hi) {
        if (lo > hi)
            return NULL;

        const int m = lo + ((hi - lo) >> 1);
        TreeNode * ret = new TreeNode(v[ m ]);
        ret->left = buildBST(v, lo, m - 1);
        ret->right = buildBST(v, m + 1, hi);
        return ret;
    }

    TreeNode* sortedListToBST(ListNode* head) {
        vector<int> v;
        for (ListNode * cur = head; cur != NULL; cur = cur->next)
            v.push_back(cur->val);

        TreeNode * ret = buildBST(v, 0, v.size() - 1);
        return ret;
    }
};
```
