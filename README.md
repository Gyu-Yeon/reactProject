# Today's lessons.

## 1. How to make html components in JSX
 -write some html code in return() 
 - ex) function Modal(){return()}
 
 ## 2. How to use if statement in JSX
 - put ? and : inside of {} 
 - write the statement before ? sign. and after ? sign write the code that should be execute when statement is true. after : write the code for else
 - ex) 1 < 3 ? console.log('hi) : null
 
 
  ## 3. How to use props in JSX
 - what is props? : props is JSX grammar that can let you share parents component's usestates to children component
 - first, choose any usestate that you need, and then right this line (if usestate name is nums) < container nums={nums} / >
 - second, write props as the parameter of components that you are going to use. 
 - ex)  props.title

## 4. Handling input data
- save input data as usestate.
- use  onChange method.
- when you write something in input onChange is working.
- use e.target.value to track what input contains
- ex) onChange={ (e)=>{ e.target.value}}
 
 
 2022.01.10

