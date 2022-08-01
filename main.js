/*******************
 * OUR HELPER CODE *
*******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */
const gridWidth = 10;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-5';
  canvas.appendChild(div);
  count++;
}

// You probably should NOT do these in the order below.
// That is, you probably should NOT do all the queries,
// THEN all the functions,
// THEN all the wiring.

// Instead, it'll be easier if you go one action at a time!
// So, add a query for the palette colors.
// THEN add an event listener function for what happens when one is clicked.
// THEN wire those two together, so that when the palette elements are clicked,
// the function runs.
//
// And proceed from there to getting the squares working.
//

// ALSO.
// You do not have to follow the sections below. If you're doing your functions inline, it doesn't make a lot of sense to separate the event listener functions from their wiring!

/***********
 * QUERIES *
***********/

// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)

let paletteColors = document.querySelectorAll(".palette .palette-color");

let brush = document.querySelector(".current-brush");

let canvasArea = document.querySelectorAll(".canvas div")



/****************************
 * EVENT LISTENER FUNCTIONS *
****************************/

// Now add some functions to handle clicking one particular square
// and clicking one particular palette color. You can leave them
// empty at first, though a console.log just to know they're being
// run as event listeners (after the next step is set up) isn't a
// bad idea for testing purposes.

for (let i = 0; i < paletteColors.length; i++){
  
  paletteColors[i].addEventListener('click', function(){
    console.log(paletteColors[i])
    brush.classList.replace(brush.classList[1], paletteColors[i].classList[1])
    // brush.classList.remove(brush.classList[1])
    // brush.classList.add(paletteColors[i].classList[1])

  })

}

brush.addEventListener('click', function(){
    console.log(brush)
  })

  for (let square of canvasArea){
    // square.addEventListener('click', function(){
    //   console.log(square)
    //   square.classList.replace(square.classList[1], brush.classList[1]);
    // })
    square.addEventListener('mouseover', function(){
      if (mousedown === true){
      square.classList.replace(square.classList[1], brush.classList[1])
  }})
  }
//mousedown the event occurs when the user presses a mouse button over an element
let mosuedown = false
  document.addEventListener('mousedown', function(){
    mousedown = true
  });
//mouseup the event occurs when the user releases a mouse button over an element

  document.addEventListener('mouseup', function(){
    mousedown = false
  })

  //mousedown and mouseup


/**************************
 * WIRING IT ALL TOGETHER *
**************************/

// Now: wiring up our event listeners to our html node elements.
// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above.
