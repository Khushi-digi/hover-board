let board=document.querySelector(".board")
let clutter=""
for(let i=0;i<240;i++){
    clutter+=`<div id="block"></div>`
}
board.innerHTML=clutter
board.addEventListener("mousemove",(e)=>{
    let red=Math.floor(Math.random()*255)+1
    let green=Math.floor(Math.random()*255)+1
    let blue=Math.floor(Math.random()*255)+1
    console.log(red,green,blue)

    let curr=(e.target.id=="block"?e.target:"")

    curr.style.backgroundColor=`rgb(${red},${green},${blue})`
    curr.style.boxShadow=`0px 0px 10px rgb(${red},${green},${blue})`
    setInterval(() => {
      curr.style.backgroundColor="rgb(12, 11, 11)"
      curr.style.boxShadow=`none`
    }, 2000);
})