let counterValue = document.getElementById("value")
function onAdd(){
   
    
    let oldValue = counterValue.innerText
    let latestValue = parseInt(oldValue)+1
    counterValue.innerText = latestValue
    

    if(latestValue>0){
        counterValue.style.color="blue"
    }
    else if(latestValue<0){
        counterValue.style.color ="red"
    }
    else{
        let finalvalue = 0
        counterValue.innerText = finalvalue
        counterValue.style.color= "white"
    }
}
function onRemove(){

    let oldValue = counterValue.innerText
    let latestValue = parseInt(oldValue)-1
    counterValue.innerText = latestValue

    if(latestValue>0){
        counterValue.style.color="green"
    }
    else if(latestValue<0){
        counterValue.style.color ="red"
    }
    else{
        let finalvalue = 0
        counterValue.innerText = finalvalue
    
        counterValue.style.color= "white"
    }
}

function onZero(){
    let finalvalue = 0
    counterValue.innerText = finalvalue
    counterValue.style.color = "pink"

}

    
