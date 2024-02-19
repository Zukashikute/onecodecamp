const blankPage = document.querySelector("canvas");
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
   let xCenter = e.clientX;
   let yCenter = e.clientY;
   let radius = generateRandomNum(5, 100);

   drawCircle(xCenter, yCenter, radius)
}

blankPage.addEventListener("click", clickToDrawCircle);

