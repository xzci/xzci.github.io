---
title: Employee Importance
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 690> Employee Importance

```c++
/*
// Definition for Employee.
class Employee {
public:
    int id;
    int importance;
    vector<int> subordinates;
};
*/
// Method 1
class Solution {
public:
    int getImportance(vector<Employee*> employees, int id) {
        unordered_map<int, Employee*>m;
        for(auto x: employees) 
			m[x->id] = x;
        int sum = 0;
        deque<Employee*> q;
        q.push_back(m[id]);
        while(!q.empty()) {
            auto p = q.front();
            q.pop_front();
            for(auto x: p->subordinates) q.push_back(m[x]);
            sum += p->importance;
        }
        return sum;
    }
};

// Method 2
class Solution {
public:
    int findImportanceValue(vector<Employee*> employees, int id) {
    Employee* currentEmployee;
    for(int i = 0; i < employees.size(); i++) {
        if(employees[i]->id ==  id) {
            currentEmployee = employees[i];
            break;
        }
    }
    int totalExp = currentEmployee->importance;
    for(int i = 0;i<currentEmployee->subordinates.size(); i++) {
        totalExp += (findImportanceValue(employees, currentEmployee->subordinates[i]));
    }
    return totalExp;
	}
    int getImportance(vector<Employee*> employees, int id) {
        return findImportanceValue(employees,id);
    }
};
```

