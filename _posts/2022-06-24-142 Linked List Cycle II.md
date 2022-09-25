---
title: Linked List Cycle II
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-M 142> Linked List Cycle II

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
    ListNode *detectCycle(ListNode *head) {
        ListNode *slow = head, *fast = head;
        while(fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;
            if(slow == fast) {
                ListNode *slow_temp = head;
                while(slow_temp != slow) {
                    slow_temp = slow_temp->next;
                    slow = slow->next;
                }
                return slow_temp;
            }
        }
        return nullptr;
    }
};
```
