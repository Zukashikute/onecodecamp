const blankPage = document.querySelector("canvas");
const resetBtn = document.getElementById("resetBtn");
blankPage.width = window.innerWidth;
blankPage.height = window.innerHeight;
var ctx = blankPage.getContext("2d");

const drawCircle = (xCenter, yCenter, radius) => {
   ctx.beginPath();
   ctx.arc(xCenter, yCenter, radius, 0, 2 * Math.PI);
   ctx.fillStyle = "aquamarine";
   ctx.fill();
}

const generateRandomNum = (minNum, maxNum) => {
   let randomNum = Math.random();
   let range = maxNum - minNum;
   let scaleUp = Math.round(randomNum * range);
   return scaleUp + minNum;
}

const clickToDrawCircle = (e) => {
   xCenter = e.clientX
   yCenter = e.clientY
   radius = generateRandomNum(10, 100)
   drawCircle(xCenter, yCenter, radius);
}

const clearWindow = () => {
   ctx.clearRect(0, 0, blankPage.width, blankPage.height)
}

blankPage.addEventListener("click", clickToDrawCircle);
resetBtn.addEventListener("click", clearWindow);

