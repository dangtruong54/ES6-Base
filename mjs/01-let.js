/**
 * Created by TruongDX on 3/9/2018.
 */
let todo = [
    "Football",
    "Coding",
    "Study Script"
]
/* ============== Cach 1 viet vong lap for
let length = todo.length;
for(let i = 0; i < length; i++){
    console.log(todo[i]);
}
*/

/* ============== Cach 2 viet vong lap for: dung for in
 for(let index in todo){
    console.log(todo[index]);
 }
 */
/* ============== Cach 2 viet vong lap for: dung for off
for(let item of todo){
    console.log(item);
}
 */

let todoObj = {
    id : 134,
    name : "Football",
    status : true
}
/*
for(let index in todoObj){
    console.log(todoObj[index]);
}
*/

for(let item of todoObj){
    console.log(todoObj[item]);
}