//-- Elementos de la gui
const gui = {
    display : document.getElementById("display"),
    start : document.getElementById("start"),
    stop : document.getElementById("stop"),
    reset : document.getElementById("reset"),
    start0 : document.getElementById("0"),
    start1 : document.getElementById("0"),
    start1 : document.getElementById("1"),
    start2 : document.getElementById("2"),
    start3 : document.getElementById("3"),
    start4 : document.getElementById("4"),
    start5 : document.getElementById("5"),
    start6 : document.getElementById("6"),
    start7 : document.getElementById("7"),
    start8 : document.getElementById("8"),
    start9 : document.getElementById("9"),




}

console.log("Ejecutando JS...");

//-- Definir un objeto cronómetro
const crono = new Crono(gui.display);

//---- Configurar las funciones de retrollamada

//-- Arranque del cronometro
gui.start.onclick = () => {
    console.log("Start!!");
    crono.start();
}
gui.start0.onclick = () => {
    console.log("Start!!");
    crono.start();
}
gui.start1.onclick = () => {
    console.log("Start!!");
    crono.start();
}
gui.start2.onclick = () => {
    console.log("Start!!");
    crono.start();
}
gui.start3.onclick = () => {
    console.log("Start!!");
    crono.start();
}
gui.start4.onclick = () => {
    console.log("Start!!");
    crono.start();
}
gui.start5.onclick = () => {
    console.log("Start!!");
    crono.start();
}
gui.start6.onclick = () => {
    console.log("Start!!");
    crono.start();
}
gui.start7.onclick = () => {
    console.log("Start!!");
    crono.start();
}
gui.start8.onclick = () => {
    console.log("Start!!");
    crono.start();
}

gui.start9.onclick = () => {
    console.log("Start!!");
    crono.start();
}
  
//-- Detener el cronómetro
gui.stop.onclick = () => {
    console.log("Stop!");
    crono.stop();
}

//-- Reset del cronómetro
gui.reset.onclick = () => {
    console.log("Reset!");
    crono.reset();
}