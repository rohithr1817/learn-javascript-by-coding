
// for(i=0;i<=10;i++){
//     console.log("Padlo");
// }


// print 1 to 10 numbers
// for(i=0;i<=10;i+=2){
//     console.log(i);
// }

// print even numbers from 1 to 100
for(let i=0;i<=100;i++){
    if(i%2==0){                       // put ! to print odd numbers
        console.log(i);
    }
}

// for(i=10;i>0;i--){
//     console.log("Padlo");
// }


// to print stieng characters
// let str="pokemon";
// for(i=0;i<str.length;i++){
//     console.log(str[i]);
// }
// // or
// for(let i of str){
//     console.log(i);
// }


// print sum of 1 to 10 numbers

// let sum=0;
// for(let i=0;i<=10;i++){  
//     sum+=i;
// }
// console.log(sum);




for(i=0;i<=10;i++){
    if(i==5){
        continue;
    }
    else{
        console.log(i);
    }
}


for(i=0;i<=10;i++){
    if(i==5){
        break;
    }
    else{
        console.log(i);
    }
}



let student ={
    name:"Rohith",
    age:22,
    course:"Engineering",
    city:"Bangalore",
    country:"India"
}

for (let key in student){
    console.log(key,student[key]);
}