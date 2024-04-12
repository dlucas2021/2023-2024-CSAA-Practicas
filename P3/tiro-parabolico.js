//-- Elementos del DOM



const display = document.getElementById("display")
const display2 = document.getElementById("display2")

const canvas = document.getElementById("ctiro");


//-- Acceder al botón de disparo
const btnLanzar = document.getElementById("btnLanzar");

//-- Acceder al botón de iniciar
const btnIniciar = document.getElementById("btnIniciar");

//-- Sonidos
//-- Crear los elementos de sonido
const rebote_sound = new Audio('rebote.mp3');

canvas.width = 2000;
canvas.height = 700;

//-- Obtener el contexto del canvas 2d
const ctx = canvas.getContext("2d");


//-- Coordenadas iniciales del proyectil
let xop = 5;
let yop = 640;
let xp = xop;
let yp = yop;


let xomin = 200;
let xomax = 1000;
let xo = getRandomInt(1900)
console.log(xo) //getRandomXO(xomin,xomax);
let yo = getRandomInt(600);


//-- Dibujar el proyectil
dibujarP(xop, yop, 50, 50, "green"); // Pintar el proyectil

//-- Dibujbar el objetivo
dibujarO(xo,yo); // Pintar el objetivo



//-- Función principal de actualización
let velocidad = document.getElementById("velocidad")
let veloc = document.getElementById("veloc")

velocidad.oninput = () => {
    veloc.innerHTML = velocidad.value
}

const crono = new Crono(display);

const angulo = document.getElementById("angulo")
const ang = document.getElementById("ang")

angulo.oninput = () => {
    ang.innerHTML = angulo.value
}


let tiempoInicio = null;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  


function lanzar(tiempoActual) {
   

    if (!tiempoInicio) {
        tiempoInicio = tiempoActual;
    }

    const tiempoTranscurrido = (tiempoActual - tiempoInicio) / 1000; // Convertir a segundos
 

    let velpx = Number(velocidad.value);

    let velpy = Number(velocidad.value);

     
    const distancia = Math.sqrt(Math.pow(xp - xo, 2) + Math.pow(yp - yo, 2));
    if (distancia < 45) {
        console.log("¡Acertaste!");
        
        display2.textContent="¡Acertaste!"
        crono.stop
        
    }
    if (xp >= xo && xp <= xo + 50 && yp >= yo && yp <= yo + 50) {
        dibujarP(xp, yp, 50, 50, "black");
        crono.stop();
        return; 
      }

    let angx = Number(angulo.value);
    let angy = Number(angulo.value);
    if (angx > 35){
        angx=35
    }
    if (velpx > 20){
        velpx=20
    }


    //-- Condición de rebote en extremos verticales del canvas
    if (xp < 0 || xp >= (canvas.width - 25)) {
        bound_sound();
        velpx = -velpx;
    }

    //-- Condición de rebote en extremos horizontales del canvas
    if (yp <= 0 || yp > canvas.height - 25) {
        bound_sound();
        velpy = -velpy;
    }

    //-- Calcular la nueva posición utilizando las fórmulas del tiro parabólico
    const { x, y } = calcularPosicion(xp, yp, velpx, angx, tiempoTranscurrido);

    //-- Actualizar la posición
    xp = x;
    
    yp = y;
    
    //-- Colisión?¿?¿¿¿?¿
    if (xp - xo < 10) {
        dibujarP(xp, yp, 50, 50, "yellow"); // Pintar el proyectil
    }

    //-- 2) Borrar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //-- 3) Pintar los elementos en el canvas
    dibujarP(xp, yp, 50, 50, "red"); // Pintar el proyectil
    dibujarO(xo, yo); // Pintar el objetivo

    //-- 4) Repetir
    requestAnimationFrame(lanzar);
}



// Función para calcular la posición en función del tiempo utilizando las fórmulas del tiro parabólico
function calcularPosicion(x0, y0, v0, angulo, tiempo) {
    const angRad = angulo * Math.PI / 180; // Convertir el ángulo a radianes
    const vx = v0 * Math.cos(angRad); // Componente horizontal de la velocidad
    const vy = -v0 * Math.sin(angRad); // Componente vertical de la velocidad
    const g = 9.8; // Aceleración debida a la gravedad en m/s^2
    
    let x = x0 + vx * tiempo; // Posición horizontal
    let y = y0 + vy * tiempo + 0.5 * g * Math.pow(tiempo, 2); // Posición vertical

    // Limitar el movimiento dentro de las dimensiones del canvas
    if (x < 0) {
        x = 0; // Limite izquierdo
    } else if (x >= canvas.width - 75) {
        x = canvas.width - 75; // Limite derecho
        crono.stop();
        console.log("Fallaste...Reinicia y vuelve a intentarlo!")
        display2.textContent ="Fallaste...Reinicia y vuelve a intentarlo!"
        
        
    }

    if (y < 0) {
        y = 0; // Limite superior
    } else if (y > canvas.height - 75) {
        y = canvas.height - 75; // Limite inferior
        
    }

    return { x, y };
}


function bound_sound() {

    birds.currentTime = 0;
    birds.play();
}

//-- función para pintar el proyectil
function dibujarP(x,y,lx,ly,color) {

    //-- Pintando el proyectil
    ctx.beginPath();

    //-- Definir un rectángulo de dimensiones lx x ly,
    ctx.rect(x, y, lx, ly);

    //-- Color de relleno del rectángulo
    ctx.fillStyle = color;

    //-- Mostrar el relleno
    ctx.fill();

    //-- Mostrar el trazo del rectángulo
    ctx.stroke();

    ctx.closePath();
}

//-- función para pintar el objetivo
function dibujarO(x,y) {

    //-- Pintando el objetivo
    ctx.beginPath();

    //-- Dibujar un circulo: coordenadas x,y del centro
    //-- Radio, Angulo inicial y angulo final
    if (x < 300) {
        x=300
    }

    ctx.arc(x, y, 25, 0, 2 * Math.PI);
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    ctx.fillStyle = 'yellow';

    //-- Dibujar el relleno
    ctx.fill()    

    //-- Dibujar el trazo
    ctx.stroke();

    ctx.closePath();
}

//-- Función de retrollamada del botón de disparo
btnLanzar.onclick = () => {
    // Obtener el tiempo actual
    const tiempoActual = performance.now();
    
    // Llamar a la función lanzar con el tiempo actual como argumento
    lanzar(tiempoActual);
    crono.start();
}



btnIniciar.onclick = () => {

    //-- Reinicio
    location.reload();
    crono.reset();


    //-- Dibujar el proyectil
    dibujarP(xop, yop, 50, 50, "green"); // Pintar el proyectil

}