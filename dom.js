// let fb = document.getElementById("fb");
// let ld = document.getElementById("ld");
// let yt = document.getElementById("yt");

// fb.href = "https://www.pinterest.com/";

// ld.href = "https://www.wikipedia.org/";


// let all_images = document.getElementsByTagName("img");

// all_images[0].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL1sr-cYDwKMQlCuRJNUAPvDEArA1KSHUcrg&s";
// all_images[1].src = "https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg";
// all_images[2].src = "https://www.thespruceeats.com/thmb/UpVWAcHnFEe_KvQpYsR1a7U-WY0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-your-best-grilled-burger-recipe-7511041-hero-C-c5080fa5f97c4c2b908968527f8a851b.jpg";

// all_images[0].alt = "burger";
// all_images[0].width = 200;
// all_images[1].height = 200;


    //   Events 

// let btn1 =document.getElementById("btn");

// btn1.addEventListener("click", function(){
//  btn1.addEventListener("mouseover", function(){             // mouseout , mousedown , mouseup , doubleclick     
    //  document.write("Hello World!");

    //  document.body.style.backgroundColor ="red";
//     btn1.style.backgroundColor = "pink"

// });

    //    create element through javascript

let new_div = document.createElement("div");
new_div.innerHTML = "<h1>This Is A New Div</h1>";
new_div.style.backgroundColor = "pink";
new_div.style.width= "200px";
new_div.style.height = "200px";
new_div.style.padding= "20px";

document.body.appendChild(new_div);

let new_para = document.createElement("p");
new_para.innerHTML = "This is a New Paragraph";
new_para.style.color = "white";
let btn1 = document.createElement("button");
btn1.innerHTML = "button";
document.body.appendChild(btn1);

btn1.addEventListener("click", function(){
    new_div.appendChild(new_para);
});


new_div.appendChild(new_para);