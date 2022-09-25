---
title: Copy List with Random Pointer
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-M 138> Copy List with Random Pointer

```c++
/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* next;
    Node* random;

    Node(int _val) {
        val = _val;
        next = NULL;
        random = NULL;
    }
};
*/

class Solution {
public:
    Node* copyRandomList(Node* head) {
        for(Node *cur = head; cur != nullptr;) {
            Node *node = new Node(cur->val);
            node->next = cur->next;
            cur->next = node;
            cur = node->next;
        }

        for(Node *cur = head; cur != nullptr;) {
            if(cur->random != NULL)
                cur->next->random = cur->random->next;
            cur = cur->next->next;
        }

        Node temp(-1);
        for(Node *cur = head, *new_cur = &temp;
           cur != nullptr; ) {
            new_cur->next = cur->next;
            new_cur = new_cur->next;
            cur->next = cur->next->next;
            cur = cur->next;
        }
        return temp.next;
    }
};
```
