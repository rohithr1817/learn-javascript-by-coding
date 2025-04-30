                   // // Events in JavaSript
                   // The change in state of an object is kmown as an Event
                   // Events are fired to notify code of "intersting changes" that may affect code execution.
                   // Event handling in JS

              //      node.event = () => {                  // btn.onClick=()={    //handle here    }
              //        //handle here
              //      }

       // Mouse Events:

       //             click: Fired when an element is clicked.
       //             dblclick: Fired when an element is double-clicked.
       //             mouseover: Fired when the mouse pointer enters an element.
       //             mouseout: Fired when the mouse pointer leaves an element.
       //             mousemove: Fired when the mouse pointer moves within an element.
                  
       // Keyboard Events: 
       //             keydown: Fired when a key is pressed down.
       //             keyup: Fired when a key is released.
       //             keypress: Fired when a key is pressed (deprecated in favor of keydown and keyup).
                  
       // Form Events:       
       //             submit: Fired when a form is submitted.
       //             change: Fired when the value of an input element changes.
       //             focus: Fired when an element gains focus.
       //             blur: Fired when an element loses focus.
                   
       // Window Events:      
       //             load: Fired when the whole page is loaded, including all dependent resources.
       //             resize: Fired when the window is resized.
       //             scroll: Fired when the document is scrolled.
                   
       // Touch Events (for mobile devices): 
       //             touchstart: Fired when a touch point is placed on the touch surface.
       //             touchmove: Fired when a touch point is moved along the touch surface.
       //             touchend: Fired when a touch point is removed from the touch surface.

       // Print event & many more


// let btn=document.querySelector("#btn");     // if code is both in inline html and in js first priority is js
// btn.onclick = () => {
//        console.log("Yu have Clicked")
//        a = 25;
//        a++;
//        console.log(a)
// }


  //if yu click on button its shown yu have clicked
let btn=document.querySelector("#btn"); 
// btn.onclick = (evt) => {
//        console.alert("Yu have Clicked")
//        console.log(evt);
//        console.log(evt.type);
//        console.log(evt.target);
//        console.log(evt.clientX,evt.clientY);
// }
  


let myDiv=document.querySelector("#myDiv");
//  myDiv.onmouseover = () => {
//  console.log("yu are inside div element")
// };




                     //  //    Event Listeners - Imp
              // node.addEventListener( event, callback)
              // node.removeEventListener( event, callback)


// btn.addEventListener("click",(evt) => {
//        console.log("yu CLicked")
//        console.log(evt)

// })

btn.addEventListener("click",(evt) => {
       console.log("button was CLicked")
})

btn.addEventListener("click",() => {
       console.log("button was CLicked - handler1")
})

let handler2 =() => {                                  // to remove an event store in a fumction variable and call it event
       console.log("button was CLicked - handler2")
}
btn.addEventListener("click",handler2)


btn.addEventListener("click",() => {
       console.log("button was CLicked - handler3")
})

btn.removeEventListener("click",handler2 );        // remove event



  // // Assignment-01
  // // Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again


 let modebtn = document.querySelector("#mode");
 let body = document.querySelector("body");
 let currmode = "light";

 modebtn.addEventListener("click",() =>{
       if(currmode==="light"){
              currmode = "dark";
              body.classList.add("dark");            // using classList 
              body.classList.remove("light");
              // document.querySelector("body").style.backgroundColor="black";
              
       }
       else{
              currmode = "light"
              body.classList.add("light");           // using classList
              body.classList.remove("dark");
              // document.querySelector("body").style.backgroundColor="white";
       }
       console.log(currmode)
 })
 