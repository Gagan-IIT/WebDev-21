// let : a variable with the same name can only be declared once
// let+let, var+let, let+var throws error but var+var doesn't
let myDog = "Camper";
let myDog = "Tommy";        //throws SyntaxError

// "use strict"; enables Strict Mode, which catches common coding mistakes and "unsafe" actions
"use strict";

/* a variable declared with the let keyword inside a block, statement, or expression
    has it's scope limited to that block, statement, or expression. Eg:
    function abc(){
        for(var i=0; i<10; i++){
            ...
        }
        console.log(i);
    }
    The above code is equivalent to...
    function abc(){
        var i;
        for(i=0; i<10; i++){
            ...
        }
        console.log(i);
    }
    Here i, declared with var, has scope even after the loop and prints 10 in console.
    On the other hand, if i is declared with let, it's scope is only inside the loop:
    function abc(){
        for(let i=0; i<10; i++){
            ...
        }
        console.log(i);
    }
    This code will throw ReferenceError
*/

// once a variable is assigned with const, it cannot be reassigned
// has all features of let except that it's read-only
// common practice for naming variables: uppercase letters with underscore
const FAV_PET = "Cats";
FAV_PET = "Dogs";       //throws TypeError
