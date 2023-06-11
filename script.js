let h4_DOM=document.querySelector("#h4");
h4_DOM.innerHTML="Hipotenüs uzunluğu hesaplama"

document.getElementById("h4").style.marginLeft ="430px" ;
document.getElementById("h4").style.marginTop ="200px" ;

document.getElementById("result").style.marginLeft ="500px" ;
document.getElementById("kenar1").style.marginLeft ="505px" ;
document.getElementById("kenar2").style.marginLeft="505px" ;
document.getElementById("btn").style.marginLeft="560px" ;

document.getElementById("kenar1").style.marginTop ="5px" ;
document.getElementById("kenar2").style.marginTop ="7px" ;
document.getElementById("btn").style.marginTop ="9px" ;

document.getElementById("result").style.marginTop ="5px" ;

document.getElementById("result").style.backgroundColor ="black" ;
document.getElementById("result").style.color ="white" ;

document.getElementById("result").classList.add("badge");
document.getElementById("result").classList.add("rounded-pill");







function changerFunc() {
    let KENAR1_DOM=document.querySelector("#kenar1");
    let KENAR2_DOM=document.querySelector("#kenar2");
    

    let number1=KENAR1_DOM.value
    let number2=KENAR2_DOM.value

    if ((number1=="") || (number2=="")){
        alert("Kenar uzunluğu boş bırakılamaz")
    }
    else if((number1<=0) && (number2<=20)) {
        let toast=document.querySelector("#toast")
        let toast2=new bootstrap.Toast(toast)
        toast2.show()
    }
    else {
        let hipotenüs=Math.sqrt(number1**2+number2**2)
        let RESULT_DOM=document.querySelector("#result");
        RESULT_DOM.innerHTML=hipotenüs
    }
    
}




