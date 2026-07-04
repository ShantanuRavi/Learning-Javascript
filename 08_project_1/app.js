  let randomcolor = function(){
  const hex = "0123456789ABCDEF";
  let color = "#"
  for(let i = 0 ; i < 6 ; i++)
  {
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color;
};
let intervalId
const startChangingColor = function(){
  function changeColor(){
    document.getElementById("colorbox").style.backgroundColor = randomcolor();
  }
  if(!intervalId)
  {
    intervalId = setInterval(changeColor,500);
  }
}

const stopChangingColor = function(){
  clearInterval(intervalId);
  intervalId = null;

}
document.getElementById("start").addEventListener("click",startChangingColor)
document.getElementById("stop").addEventListener("click",stopChangingColor)