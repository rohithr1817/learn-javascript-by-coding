//  // DOM Manipulation

//  // Attributes
//  // 1.  getAttribute(attr)    // get the value of an attribute
//  // 2.  setAttribute(attr , value)    // to set the value of an attribute 


// // Style
// //  1. node.style



// let para= document.querySelector("p")
// console.log(para)

// let div= document.querySelector("div")
// console.log(div)
// console.log(div.getAttribute("id"))   // myDiv
// // console.log(div.setAttribute("id","newDiv"))  // changes the div id value
// console.log(div.getAttribute("id"))   // newDiv




//  // style
//  div.style.backgroundColor = "pink"          //  in js background-color will become backgroundColor and no space and 2nd words caps 
//  div.style.color = "black"
//  div.style.fontSize = "30px"




// let myclass= div.getAttribute("class")  // get the value of class attribute
// console.log(myclass)    // returns null as there is no class attribute in div tag
// let id=div.getAttribute("id")  // get the value of id attribute
// console.log(id)         // returns id name 
// let divNam = div.getAttribute("name")  // get the value of name attrobutre of div element
// console.log(divNam)      // returns div tag name attribute = value



////////////////////////////////////////////////////////////



            ////  Insert Elements

            //               let el = document.createElement("div")
            
            // 1)  node.append (el)  // adds at the end of the node (inside)         important append.child() & remove.child()
            // 2)  node.prepend (el) // adds at the start of node (inside)
            // 3)  node.before (el)  // add befor the node (outside)
            // 4)  node.after (el)   // adds after the node (outside)


            // ////  Delete Element

            // 1) node.remove()



            // // Assignment-01  

            // task to add button to after particular node at lasst of body and to chnage button color using js
let newBtn = document.createElement("button");
newBtn.innerText="Click Me!"
console.log(newBtn)
newBtn.style.backgroundColor="blue"
newBtn.style.color="white"


    let divtag = document.querySelector("#list1")
    console.log(divtag)
    divtag.append(newBtn)
    // divtag.prepend(newBtn)
    // divtag.before(newBtn)
    // divtag.after(newBtn)

          
             // or to add h1 using js

let newheading = document.createElement("h1")
newheading.innerHTML="<h2>New h1 Tag added done</h2>"
console.log(newheading)

    document.querySelector("header").before(newheading);

 
      //  delete element
    newheading.remove();  /// this will delete that tag element




    // // Assignment - 02

    // Create a <p> tag in html, give it a class and some styling.
    // now create a new class in CSS and try to append this class to the <p> element.

    // yu will notice difference , mention and how you overwrite the class name when yu add a new one?
    // solve this prolem using ////classList//// 


    let para = document.querySelector("p");
    // para.style.color="Red"
    // para.style.font= "italic small-caps bold 30px Georgia, serif";

    console.log(para.getAttribute("class"))
    // para.setAttribute("class","newClass")     
    // console.log(para.getAttribute("class"))  //// Note: after chnaging class what i applied to old class name it will all remove CSS so we will 
                                             // so we  use classList
    
    para.classList.add("newClass")
    console.log(para.getAttribute("class"))
    para.classList.remove("newClass")
    console.log(para.getAttribute("class"))