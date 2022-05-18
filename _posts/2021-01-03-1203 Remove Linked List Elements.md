---
title: Remove Linked List Elements
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 203> Remove Linked List Elements

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

// Method 1
class Solution {
public:
    ListNode* removeElements(ListNode* head, int val) {
        for (ListNode *prev = 0, *node = head; node; node = node->next) {
            if (node->val == val) {
                if (prev)
                    prev->next = node->next;
                else
                    head = node->next;
            } else {
                prev = node;
            }
        }
        return head;
    }
};

// Method 2
class Solution {
public:
    ListNode* removeElements(ListNode* head, int val) {
        if(head == NULL)
            return head;
        if(head->val == val) 
            head = removeElements(head->next, val);
        else
            head->next = removeElements(head->next, val);
        return head;
    }
};
```

