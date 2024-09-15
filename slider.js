
// setTimeout(myfunction, 4000)

// function myfunction(){
//     document.body.style.backgroundColor = "purple";
//        alert("Hello")
// // }

// setInterval(mysecondfunction, 5000)

// function mysecondfunction(){
//     alert("Hello World")
// }

// let mainimage = document.getElementById('sliderimage');
// let otherimage = ['0bc3e4422019035fc69fa94499bdb950.jpg','bb8f0dfca020b72c40a29840e055e74c.jpg','cdb0a234400fd1fcb805921f9c355abe.jpg']
// let currentIndex = 0;

// function myimage(){
//     mainimage.src = otherimage [currentIndex];
//     currentIndex = (currentIndex + 1) % otherimage.length;
// }

// setInterval(myimage, 3000);

let name = window.prompt("Enter Your Name");
let designation = window.prompt("Enter Your Designation")

if (designation === "designer"){
    // window.location.href = "https://www.pinterest.com/"
    window.open("https://www.pinterest.com/");
}

else if(designation==="developer"){
       
    window.open ("https://www.facebook.com/");
}