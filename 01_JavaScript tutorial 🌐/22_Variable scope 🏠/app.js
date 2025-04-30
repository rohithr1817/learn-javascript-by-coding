// Your JavaScript code here

// Variable scope = where a variable is recognized 
//                  and accessible (local vs global)

let y = 3; //global variable


function function1(){
    // let x = 1 ;        // local variable
    // console.log(x);
    let y = 1;
    console.log(y);
}

function function2(){
    // let x = 2 ;        '//local variable
    // console.log(x);
    let y = 1;           // if same varibale in local and global = local is chosen if there else global
    console.log(y);
}

function1()
function2()
