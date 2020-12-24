// Your code here


function moveDodgerRight() {
  let rightNumbers = dodger.style.left.replace("px", "");
  let right = parseInt(rightNumbers, 10);
 
  if (right < 360) {
    dodger.style.left = `${right + 1}px`;
  }
}