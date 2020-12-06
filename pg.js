$(document).ready(function() {
  $("#formButton1").click(function() {
    $("#form1").toggle();
  });
});


$(document).ready(function() {
  $("#formButton2").click(function() {
    $("#form2").toggle();
  });
});

// METHOD-2 BY classList.toggle()

// var b=document.querySelector("#formButton1");
// b.addEventListener("click", function(){
// 	document.body.classList.toggle("purple");
// })


// var b=document.querySelector("button");
// b.addEventListener("click", function(){
// 		document.body.classList.toggle("x");
// })

// $(document).ready(function(){
//   $("button").click(function(){
//     $("p").toggle();
//   });