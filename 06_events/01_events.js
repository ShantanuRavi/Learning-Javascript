//-------- PROJECT REMOVE A PICTURE BY CLICKING ON IT --------//

document.querySelector("#images").addEventListener("click",function(e){
  if(e.target.tagName === "IMG")
  {
    const temp = e.target.parentNode;
    console.log(`${e.target.id} REMOVED`)
    temp.remove();
  }
})
