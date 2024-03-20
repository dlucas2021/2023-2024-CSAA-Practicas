//-- Elementos de la gui
const gui = {
    display : document.getElementById("display"),
    start : document.getElementById("start"),
    stop : document.getElementById("stop"),
    reset : document.getElementById("reset"),
    start0 : document.getElementById("0"),
    start1 : document.getElementById("1"),
    start2 : document.getElementById("2"),
    start3 : document.getElementById("3"),
    start4 : document.getElementById("4"),
    start5 : document.getElementById("5"),
    start6 : document.getElementById("6"),
    start7 : document.getElementById("7"),
    start8 : document.getElementById("8"),
    start9 : document.getElementById("9"),
    q :document.getElementById("q"),
    w :document.getElementById("w"),
    e :document.getElementById("e"),
    r :document.getElementById("r")

}
 //-- Array que almacena números secretos
const secretkey = [];

//-- Generar números aleatorios con un valor máximo
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
    //--Generamos números secretos y los almacenamos en un array
//--Generamos números secretos y los almacenamos en un array
//-- Generar números aleatorios únicos y almacenarlos en un array
for (let i = 0; i < 4; i++) {
    let rnum;
    do {
        rnum = getRandomInt(10).toString(); // Generar un número aleatorio
    } while (secretkey.includes(rnum)); // Verificar si ya está presente en el array

    secretkey.push(rnum); // Agregar el número único al array
}

console.log("Ejecutando JS...");

let allGuessed = false; // Variable de bandera para verificar si se han adivinado todos los números

function checkAllGuessed() {
    if (gui.q.textContent != "*" && gui.w.textContent != "*" && gui.e.textContent != "*" && gui.r.textContent != "*") {
        allGuessed = true;
    }
}

//-- Definir un objeto cronómetro
const crono = new Crono(gui.display);

//---- Configurar las funciones de retrollamada

//-- Arranque del cronometro
gui.start.onclick = () => {
    console.log("Start!!");
    crono.start();
}


gui.start0.onclick = () => {
    crono.start();
    console.log("Ha pulsado 0");
    if (secretkey[0] === "0") {
        gui.q.textContent = secretkey[0];
        gui.q.style.color = "green"
        checkAllGuessed();
    } else if (secretkey[1] === "0") {
        gui.w.textContent = secretkey[1];
        gui.w.style.color = "green"
        checkAllGuessed();
    } else if (secretkey[2] === "0") {
        gui.e.textContent = secretkey[2];
        gui.e.style.color = "green"
        checkAllGuessed();
    } else if (secretkey[3] === "0") {
        gui.r.textContent = secretkey[3];
        gui.r.style.color = "green"
        checkAllGuessed();
    }
    if (allGuessed) {
        console.log("Enhorabuena");
        crono.stop();
    }
    }


gui.start1.onclick = () => {
    crono.start();
    console.log("Ha pulsado 1");
    if (secretkey[0] === "1") {
        gui.q.textContent = secretkey[0];
        gui.q.style.color = "green"
        checkAllGuessed();
    } else if (secretkey[1] === "1") {
        gui.w.textContent = secretkey[1];
        gui.w.style.color = "green"
        checkAllGuessed();
    } else if (secretkey[2] === "1") {
        gui.e.textContent = secretkey[2];
        gui.e.style.color = "green"
        checkAllGuessed();
    } else if (secretkey[3] === "1") {
        gui.r.textContent = secretkey[3];
        gui.r.style.color = "green"
        checkAllGuessed();
    }
        if (allGuessed) {
            console.log("Enhorabuena");
            crono.stop();
        }
    }


gui.start2.onclick = () => {
    crono.start();
    console.log("Ha pulsado 2");
    if (secretkey[0] === "2") {
        gui.q.textContent = secretkey[0];
        gui.q.style.color = "green"
        checkAllGuessed();
    } else if (secretkey[1] === "2") {
        gui.w.textContent = secretkey[1];
        gui.w.style.color = "green"
        checkAllGuessed();
    } else if (secretkey[2] === "2") {
        gui.e.textContent = secretkey[2];
        gui.e.style.color = "green"
        checkAllGuessed();
    } else if (secretkey[3] === "2") {
        gui.r.textContent = secretkey[3];
        gui.r.style.color = "green"
        checkAllGuessed();
    }
        if (allGuessed) {
            console.log("Enhorabuena");
            crono.stop();
        }
    }


gui.start3.onclick = () => {
    crono.start();
    console.log("Ha pulsado 3");
    if (secretkey[0] === "3") {
        gui.q.textContent = secretkey[0];
        gui.q.style.color = "green"
        checkAllGuessed();
    } else if (secretkey[1] === "3") {
        gui.w.textContent = secretkey[1];
        gui.w.style.color = "green"
        checkAllGuessed();
    } else if (secretkey[2] === "3") {
        gui.e.textContent = secretkey[2];
        gui.e.style.color = "green"
        checkAllGuessed();
    } else if (secretkey[3] === "3") {
        gui.r.textContent = secretkey[3];
        gui.r.style.color = "green"
        checkAllGuessed();
    }
        if (allGuessed) {
            console.log("Enhorabuena");
            crono.stop();
        }
    }


gui.start4.onclick = () => {
    crono.start();
    console.log("Ha pulsado 4");
    if (secretkey[0] === "4") {
        gui.q.textContent = secretkey[0];
        gui.q.style.color = "green"
        checkAllGuessed();
    } else if (secretkey[1] === "4") {
        gui.w.textContent = secretkey[1];
        gui.w.style.color = "green"
        checkAllGuessed();
    } else if (secretkey[2] === "4") {
        gui.e.textContent = secretkey[2];
        gui.e.style.color = "green"
        checkAllGuessed();
    } else if (secretkey[3] === "4") {
        gui.r.textContent = secretkey[3];
        gui.r.style.color = "green"
        checkAllGuessed();
    }
        if (allGuessed) {
            console.log("Enhorabuena");
            crono.stop();
        }
    }  
 


gui.start5.onclick = () => {
    crono.start();
    console.log("Ha pulsado 5");
    if (secretkey[0] === "5") {
        gui.q.textContent = secretkey[0];
        gui.q.style.color = "green"
        checkAllGuessed();
    } else if (secretkey[1] === "5") {
        gui.w.textContent = secretkey[1];
        gui.w.style.color = "green"
        checkAllGuessed();
    } else if (secretkey[2] === "5") {
        gui.e.textContent = secretkey[2];
        gui.e.style.color = "green"
        checkAllGuessed();
    } else if (secretkey[3] === "5") {
        gui.r.textContent = secretkey[3];
        gui.r.style.color = "green"
        checkAllGuessed();
    }
        if (allGuessed) {
            console.log("Enhorabuena");
            crono.stop();
        }
    }
    

gui.start6.onclick = () => {
    crono.start();
    console.log("Ha pulsado 6");
    if (secretkey[0] === "6") {
        gui.q.textContent = secretkey[0];
        gui.q.style.color = "green"
    } else if (secretkey[1] === "6") {
        gui.w.textContent = secretkey[1];
        gui.w.style.color = "green"
    } else if (secretkey[2] === "6") {
        gui.e.textContent = secretkey[2];
        gui.e.style.color = "green"
    } else if (secretkey[3] === "6") {
        gui.r.textContent = secretkey[3];
        gui.r.style.color = "green"
    }
    if (allGuessed) {
            console.log("Enhorabuena");
            crono.stop();
        }
    
}

gui.start7.onclick = () => {
    crono.start();
    console.log("Ha pulsado 7");
    if (secretkey[0] === "7") {
        gui.q.textContent = secretkey[0];
        gui.q.style.color = "green"
        checkAllGuessed();
    } else if (secretkey[1] === "7") {
        gui.w.textContent = secretkey[1];
        gui.w.style.color = "green"
        checkAllGuessed();
    } else if (secretkey[2] === "7") {
        gui.e.textContent = secretkey[2];
        gui.e.style.color = "green"
        checkAllGuessed();
    } else if (secretkey[3] === "7") {
        gui.r.textContent = secretkey[3];
        gui.r.style.color = "green"
        checkAllGuessed();
    }
    if (allGuessed) {
        console.log("Enhorabuena");
        crono.stop();
    }
    }
    

gui.start8.onclick = () => {
    crono.start();
    console.log("Ha pulsado 8");
    if (secretkey[0] === "8") {
        gui.q.textContent = secretkey[0];
        gui.q.style.color = "green"
        checkAllGuessed();
    } else if (secretkey[1] === "8") {
        gui.w.textContent = secretkey[1];
        gui.w.style.color = "green"
        checkAllGuessed();
    } else if (secretkey[2] === "8") {
        gui.e.textContent = secretkey[2];
        gui.e.style.color = "green"
        checkAllGuessed();
    } else if (secretkey[3] === "8") {
        gui.r.textContent = secretkey[3];
        gui.r.style.color = "green"
        checkAllGuessed();
    }
    if (allGuessed) {
        console.log("Enhorabuena");
        crono.stop();
    }
} 

gui.start9.onclick = () => {
    crono.start();
    console.log("Ha pulsado 9");
    if (secretkey[0] === "9") {
        gui.q.textContent = secretkey[0];
        gui.q.style.color = "green";
        checkAllGuessed();
    } else if (secretkey[1] === "9") {
        gui.w.textContent = secretkey[1];
        gui.w.style.color = "green";
        checkAllGuessed();
    } else if (secretkey[2] === "9") {
        gui.e.textContent = secretkey[2];
        gui.e.style.color = "green";
        checkAllGuessed();
    } else if (secretkey[3] === "9") {
        gui.r.textContent = secretkey[3];
        gui.r.style.color = "green";
        checkAllGuessed();
    }
    if (allGuessed) {
        console.log("Enhorabuena");
        crono.stop();
    }
 }

//-- Detener el cronómetro
gui.stop.onclick = () => {
    console.log("Stop!");
    crono.stop();
}

//-- Reset del cronómetro
gui.reset.onclick = () => {
    console.log("Reset!");
    allGuessed = false

    //-- Limpiar el display y reiniciar el cronómetro
    crono.reset();

    //-- Limpiar el contenido y el color de los elementos de la GUI
    gui.q.textContent = "*";
    gui.q.style.color = "red";
    gui.w.textContent = "*";
    gui.w.style.color = "red";
    gui.e.textContent = "*";
    gui.e.style.color = "red";
    gui.r.textContent = "*";
    gui.r.style.color = "red";

    //-- Limpiar el array secretkey
    secretkey.length = 0;

    //-- Generar nuevos números aleatorios únicos y almacenarlos en secretkey
    for (let i = 0; i < 4; i++) {
        let rnum;
        do {
            rnum = getRandomInt(10).toString(); // Generar un número aleatorio
        } while (secretkey.includes(rnum)); // Verificar si ya está presente en el array

        secretkey.push(rnum); // Agregar el número único al array
    }

    //-- Mostrar la nueva clave secreta en la consola (opcional)
    console.log(secretkey);

    //-- Detener el cronómetro
    crono.stop();
}
