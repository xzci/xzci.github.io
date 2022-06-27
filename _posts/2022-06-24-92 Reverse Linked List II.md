---
title: Reverse Linked List II
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-M 92> Reverse Linked List II

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
class Solution {
public:
    ListNode* reverseBetween(ListNode* head, int left, int right) {
        ListNode temp(-1);
        temp.next = head;

        ListNode *prev = &temp;

        for(int i = 0; i < left - 1; i++)
            prev = prev->next;
        ListNode *const head_temp = prev;

        prev = head_temp->next;

        ListNode *cur = prev->next;

        for(int i = left; i < right; i++) {
            prev->next = cur->next;
            cur->next = head_temp->next;
            head_temp->next = cur;
            cur = prev->next;
        }
        return temp.next;
    }
};
```
