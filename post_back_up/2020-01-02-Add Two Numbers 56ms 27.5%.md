---
title: Add Two Numbers 56ms 27.5%
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-M> Add Two Numbers 56ms 27.5%


```c++
(l1 ? l1->val : 0)
l1 = l1 ? l1->next : l1;
```

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
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        int remainder = 0;
        ListNode answer(0);
        ListNode *p = &answer;
        while (l1 || l2 || remainder) {
            int sum = (l1 ? l1->val : 0) + (l2 ? l2->val : 0) + remainder;
            remainder = sum / 10;
            p->next = new ListNode(sum % 10);
            p = p->next;
            l1 = l1 ? l1->next : l1;
            l2 = l2 ? l2->next : l2;
        }
        return answer.next;
    }
};
```

