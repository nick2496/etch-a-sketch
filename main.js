const container = document.querySelector("#container");

generateGrid(16);

function generateGrid(items){
   for (let i=0; i< Math.pow(items,2); i++) {
      let div = document.createElement("div");
      div.setAttribute('id', i);
      div.setAttribute('class', 'square'); //why add a class? for selecting all divs as nodelist and applying event listener to each of them, not possible with id attribute as its different for each div
      container.appendChild(div);
      container.style.display="grid";
      container.style.gridTemplateRows= `repeat(${items}, minmax(0,1fr))`;
      container.style.gridTemplateColumns= `repeat(${items}, minmax(0,1fr))`;

   }
      let boxes = document.querySelectorAll(".square"); // why is there a need to create a square class for each div inside container div? so that active class doesn't get applied to all div's at once. so, EITHER the inner elements shud be different from container to use directly - like buttons for eg, OR need to use a class for selecting bunch of elements
      boxes.forEach((box) => {
      box.addEventListener("mouseover", (e) => {
         e.target.style.backgroundColor="white";
      });
      });
}

      

let resetbtn= document.querySelector('#reset');
let colorbtn= document.querySelector('#color');

resetbtn.addEventListener('click', clearGrid); //resetbtn -> clearGrid -(white color) 
colorbtn.addEventListener('click', randomColor); //colorbtn -> randomColor -(Random colors)

function clearGrid() {
   container.innerHTML= '';
   setTimeout(() => {
         let items = parseInt(prompt('How many squares per side to make the new grid?'));
         if (items <=100 ){
            generateGrid(items);
         }
         else {
            alert('Items greater than 100 are not allowed');
         }
         
   }, 300);

}

function randomColor() {
   let boxes=document.querySelectorAll(".square");
   boxes.forEach((box) => {
      box.addEventListener("mouseover", (e) => {
            let letters= "0123456789ABCDEF";
            let color = '#';
            for (let i=0; i<6; i++){
               color+= letters[Math.floor(Math.random()*16)];
            }
            e.target.style.backgroundColor=color;
      }); 
});
}










