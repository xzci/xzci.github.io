---
title: Swap Nodes in Pairs
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-M 24> Swap Nodes in Pairs

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
    ListNode* swapPairs(ListNode* head) {
        if(head == nullptr || head->next == nullptr)
            return head;
        ListNode temp(-1);
        temp.next = head;

        for(ListNode *prev = &temp, *cur = prev->next, *next = cur->next;
           next;
           prev = cur, cur = cur->next, next = cur ? cur->next : nullptr) {
            prev->next = next;
            cur->next = next->next;
            next->next = cur;
        }
        return temp.next;
    }
};
```
