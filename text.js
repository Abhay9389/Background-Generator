window.onload = function(){
    var css = document.querySelector("h3");
    var color1 = document.querySelector(".color1");
    var color2 = document.querySelector(".color2");
    var body = document.getElementById("gradient")

    //my code starts here
    alert("This is 90% from a course on udemy")
    function randColor() {
    return "#" + Math.random().toString(16).slice(2, 8)
    }

    color1.value = randColor()
    color2.value = randColor()
    setGradient()
    //ends here

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background +";";
    }

    //setGradient gets called automatically every time an input is selected 
    color1.addEventListener("input", setGradient)
    color2.addEventListener("input", setGradient)

}