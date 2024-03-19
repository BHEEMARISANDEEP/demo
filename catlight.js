let catImg = document.querySelector(".cat-img")
let bulbImg = document.querySelector(".bulb-img")
let switchStatus = document.querySelector(".switch-status")
let onBtn = document.querySelector(".btn-on")
let offBtn = document.querySelector(".btn-off")

function offswitch(){
   bulbImg.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
   catImg.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
   switchStatus.innerText = "switched off"
   onBtn.style.backgroundColor="green"
   offBtn.style.backgroundColor="grey"
   

}
    
function onswitch(){
   bulbImg.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
   catImg.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
   switchStatus.innerText = "switched on"
   onBtn.style.backgroundColor="grey"
   offBtn.style.backgroundColor="red"
   

}
    