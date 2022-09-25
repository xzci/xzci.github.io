---
title: Merge k Sorted Lists
categories:
tags:
  - C++
  - Leetcode
  - Algorithms
---

# <-M 23> Merge k Sorted Lists

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
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        if(lists.size() == 0)
            return nullptr;

        ListNode *p = lists[0];
        for(int i = 1; i < lists.size(); i++)
            p = mergeTwoLists(p, lists[i]);
        return p;
    }
private:
    ListNode *mergeTwoLists(ListNode *l1, ListNode *l2) {
        ListNode head(-1);
        for(ListNode *p = &head; l1 != nullptr || l2 != nullptr; p = p->next) {
            int val1 = l1 == nullptr ? INT_MAX : l1->val;
            int val2 = l2 == nullptr ? INT_MAX : l2->val;

            if(val1 <= val2) {
                p->next = l1;
                l1 = l1->next;
            }
            else {
                p->next = l2;
                l2 = l2->next;
            }
        }
        return head.next;
    }
};

// Method 2
class Solution {
public:
    ListNode* mergeKLists(vector<ListNode*>& list) {
        if(list.size() == 0)
            return nullptr;
        multimap<int,ListNode*> m;

        for(int i = 0; i < list.size(); i++) {
            ListNode* temp = list[i];
            while(temp != nullptr){
                m.insert(make_pair(temp->val, temp));
                temp = temp->next;
            }
        }
        auto it = m.begin();
        ListNode* head  = new ListNode(-1);
        ListNode* temp = head;
        for(auto it = m.begin(); it != m.end(); it++) {
            temp->next = it->second;
            temp = temp->next;
        }

        return head->next;
    }
};
```
