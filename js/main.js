const calculadora=document.querySelector('.calculadora')
const pantalla=document.querySelector('.pantalla')
const buttons=document.querySelectorAll(".btn")
const buttonEqual=document.getElementById("igual")
const buttonMusica=document.getElementById('musica')
const buttonMode=document.getElementById('modo')
const crazyForm=new Audio("./sounds/Ateez-CrazyForm.mp3")
const soundError=new Audio("./sounds/Error.mp3")
const pressButton=new Audio("./sounds/PressButton.mp3")
let music=1
let mode=false
buttonMusica.addEventListener("click", ()=>{
        if(music%2==1){
            crazyForm.play()
            music+=1
            calculadora.style.animation="multiColorBackground 8s infinite"
            pantalla.style.animation="multiColor 8s infinite"
            buttonMusica.style.color="#39e684"
            buttonMusica.innerHTML="🎵:ON"
        }else if(music%2==0){
            crazyForm.pause()
            music+=1
            if (buttonMusica.textContent=="🎵:ON"){
                let buttonModificated=buttonMusica.textContent.replace("ON","OFF")
                buttonMusica.textContent=buttonModificated
                buttonMusica.style.color="#e6394a"
            }
            // calculadora.removeAttribute("style")
            // pantalla.removeAttribute("style")
        }
})
buttonMode.addEventListener("click", ()=>{
    if(mode==false){
        calculadora.style.animation="multiColorBackground 8s infinite"
        pantalla.style.animation="multiColor 8s infinite"
        buttonMode.style.color="#39e684"
        mode=true
    }else if(mode==true){
        buttonMode.style.color="#e6394a"
        calculadora.removeAttribute("style")
        pantalla.removeAttribute("style")
        mode=false
    }
})

buttons.forEach(button => {
    
    button.addEventListener("click",()=>{
        let botonApretado=button.textContent

        if(pantalla.textContent==="0"||pantalla.textContent=="Error(╥﹏╥)"){
            pantalla.textContent=botonApretado
        }else{
            pantalla.textContent+=button.textContent
        }
        if(button.id=="c"){   
            pantalla.textContent=0
        }
        if(button.id=="igual"){
            try {
                let borrar=pantalla.textContent.slice(0,-1)
                pantalla.textContent=borrar
                pantalla.textContent=eval(pantalla.textContent)   
            } catch (error) {
                pantalla.textContent="Error(╥﹏╥)"
                soundError.play()
            }
        }
        if(button.id=="borrar"){

            let borrar=pantalla.textContent.slice(0,-2)
            pantalla.textContent=borrar
        }
        if(pantalla.textContent==""){
            pantalla.textContent="0"
        }
    })  
});