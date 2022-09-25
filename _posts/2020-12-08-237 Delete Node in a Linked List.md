---
title: Delete Node in a Linked List
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 237> Delete Node in a Linked List

```c++
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    void deleteNode(ListNode* node) {
        auto nxt=node->next;
        *node=*nxt;
        delete nxt;
    }
};


class Solution {
public:
    void deleteNode(ListNode* node) {
        node->val=node->next->val;
        auto del=node->next;
        node->next=del->next;
        delete del;
    }
};
```

