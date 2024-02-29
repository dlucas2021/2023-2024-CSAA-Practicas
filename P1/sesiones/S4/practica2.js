console.log("ejecutando javascript")

const dsp1 = document.getElementById('dsp1')

//-- leer el boton identificado como boton 1
const bt1 = document.getElementById('bt1')

//leer el bootn identificado como boton2 
const bt2 = document.getElementById('bt2')

bt1.onclick = () => {
    //console.log("Clic sobre el boton 1")
    //dsp1.innerHTML="Clic sobre el boton 1"
    dsp1.innerHTML+=" 1"
    dsp1.style.backgroundColor="red"

    if (dsp1.style.backgroundColor=="red") {
       dsp1.style.backgroundColor="yellow";
    }
    else if (dsp1.style.backgroundColor=="green") {
}
}

bt2.onclick = () => {
    dsp1.innerHTML+=" 2"
    dsp1.style.backgroundColor="blue"

}
