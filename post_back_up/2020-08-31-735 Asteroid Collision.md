---
title: Asteroid Collision
categories:
tags:
- C++
- Leetcode
- Algorithms
---

# <-E 735> Asteroid Collision

```c++
// method 1
class Solution {
public:
        vector<int> asteroidCollision(vector<int>& asteroids) {
                vector<int> ans;
                for(int i=0; i!=asteroids.size();i++){
                    if(ans.size() == 0)
                        ans.push_back(asteroids[i]);
                    else {
                        while(ans.size() > 0) {
                            int temp = ans.back() + asteroids[i];
                            if(temp == 0 && ans.back() > 0) {
                                ans.pop_back();
                                break;
                            }
                            else if(ans.back() > 0) {
                                if(temp > ans.back()){
                                    ans.push_back(asteroids[i]);
                                    break;
                                }
                                else {
                                    if(abs(asteroids[i]) > abs(ans.back())) {
                                        ans.pop_back();
                                        if(ans.size() == 0){
                                            ans.push_back(asteroids[i]);
                                            break;
                                        }
                                            
                                    }
                                    else
                                        break;
                                }
                            }
                            else if (ans.back() < 0) {
                                ans.push_back(asteroids[i]);
                                break;
                        }
                    }
                    
                }
            }    
            return ans;
        }
};

// method 2
class Solution {
public:
    vector<int> asteroidCollision(vector<int>& asteroids) {
        vector<int> leftpassed;
        vector<int> ast;
        for(auto& a : asteroids){
            if(a>0)
                ast.push_back(a);
            else{
                while(ast.size() && ast.back()<abs(a)){
                    ast.pop_back();
                }
                if(ast.size() && ast.back()==abs(a)){
                    ast.pop_back();
                }
                else if(ast.size() && ast.back()>abs(a)){
                    
                }
                else{
                    leftpassed.push_back(a);
                }
            }
        }
        
        for(auto& x:ast)
           leftpassed.push_back(x); 
        return leftpassed;
    }
};
```

