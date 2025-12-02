const myButton = document.getElementById("myButton");

myButton.addEventListener("click", function(){

    const pageTwo = document.getElementById("pageTwo");
    const pageOne = document.getElementById("pageOne");
    pageOne.style.display = "none";
    pageTwo.style.display = "block";

});



