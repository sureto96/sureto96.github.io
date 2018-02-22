var numCircles = 6;
var colors = generateColors(6);

var circles = document.querySelectorAll(".circle"); 
var correctColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var click = new Audio('Assets/click.wav');
var correct = new Audio('Assets/correct.wav');
var incorrect = new Audio('Assets/incorrect.wav');

easyBtn.addEventListener("click", function() {
   easyBtn.classList.add("selected");
   hardBtn.classList.remove("selected");
    numCircles = 3;
    colors = generateColors(numCircles);
    correctColor = pickColor();
    colorDisplay.textContent = correctColor;
    messageDisplay.textContent = " ";
    h1.style.backgroundColor = "steelblue";
    click.play();
    for(var i = 0; i < circles.length; i++) {
        if(colors[i]) {
            circles[i].style.backgroundColor = colors[i];
        } else {
            circles[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function() {
   hardBtn.classList.add("selected");
   easyBtn.classList.remove("selected");
    numCircles = 6;
       colors = generateColors(numCircles);
    correctColor = pickColor();
    colorDisplay.textContent = correctColor;
    messageDisplay.textContent = " ";
    h1.style.backgroundColor = "steelblue";
    click.play();
    for(var i = 0; i < circles.length; i++) {
            circles[i].style.backgroundColor = colors[i];
            circles[i].style.display = "block"; 
    }
});

resetButton.addEventListener("click", function() {
    colors = generateColors(numCircles);
    resetButton.textContent = "Reset colors"
    correctColor = pickColor();
    colorDisplay.textContent = correctColor;
    messageDisplay.textContent = " ";
    h1.style.backgroundColor = "steelblue";
    click.play();
    for(var i = 0; i < circles.length; i++) {
  circles[i].style.backgroundColor = colors[i];
    }
    
});

colorDisplay.textContent = correctColor;

for(var i = 0; i < circles.length; i++) {
  circles[i].style.backgroundColor = colors[i];
    
  circles[i].addEventListener("click", function() {
      
      var clickedColor = this.style.backgroundColor;
      
      if(clickedColor === correctColor) {
          messageDisplay.textContent = "Correct";
          changeColors(clickedColor);
          h1.style.backgroundColor = correctColor;
          correct.play();
          resetButton.textContent = "Play again?"
      } else {
          this.style.backgroundColor = "#232323";
          incorrect.play();
          messageDisplay.textContent = "Try again";
      }
  });
}

function changeColors(color) {

    for (var i = 0; i < colors.length; i++){
        
        circles[i].style.backgroundColor = color;
    }

}

function pickColor() {
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateColors(num) {
    var arr = []
    
    for(var i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", " + g + ", " + b + ")";
}