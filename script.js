// let a1 = document.getElementById("myheading");

// // a1.innerText = "this text is changed by javascript";

// a1.innerHTML = "<h2> This text is changed by innerHtml </h2>"

// a1. style.color = "Red";
// a1.style.backgroundColor = "pink";
// a1.style.fontSize = "30px";
// a1.style.border = "2px solid black"
// a1.style.margin ="10px "
// a1.style.padding = "10px"


// let class1 = document.getElementsByClassName("testing");

// class1[0].innerText = " This text is changes by javascript";

// class1[1].innerHTML = " <h3>This text is changed by innerHtml </h3>"

// let a1 = class1.length;

// for (i = 0; i <= a1 ; i++){
//     class1[i]. style.color = "Red";
//     class1 [i].style.backgroundColor = "pink";
//     class1 [i].style.fontSize = "30px";
//     class1[i].style.border = "2px solid black"
//     class1 [i].style.margin ="10px "
//     class1 [i].style.padding = "10px"
// }

// let para = document.getElementsByTagName("p");

// para[0].innerHTML = "<h1>This text is changes by innerHtml</h1>";

// Array.from(para).forEach(function(p){
    // p.style.color = "white";
    // p.style.backgroundColor = "purple";
    // p.style.border = "2px solid black";
    // p.style.margin = "20px";
    // p.style.padding = "20px";
// });

// let para1 = document.querySelector(".class1");
// let para1 = document.querySelector("p");

// para1.style.color = "pink"

let mydiv = document.querySelectorAll(".allselector  h1 , p , a");

mydiv.forEach(function(div){
//   div.style. color = "red"

if (div.tagName === "H1"){
    div.style.color = "white";
    div.style.backgroundColor = "purple";
    div.style.border = "2px solid black";
    div.style.margin = "20px";
    div.style.padding = "20px";
};
if (div.tagName === "P"){
    div.style.color = "white";
    div.style.backgroundColor = "purple";
    div.style.border = "2px solid black";
    div.style.margin = "20px";
    div.style.padding = "20px";

};
if (div.tagName === "A"){
    div.style.color = "white";
    div.style.backgroundColor = "purple";
    div.style.border = "2px solid black";
    // div.style.margin = "20px";
    // div.style.padding = "20px";

};

});
