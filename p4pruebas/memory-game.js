

const selectors = {
    gridContainer: document.querySelector('.grid-container'),
    tablero: document.querySelector('.tablero'),
    movimientos: document.querySelector('.movimientos'),
    timer: document.querySelector('.timer'),
    comenzar: document.querySelector('button'),
    win: document.querySelector('.win')
}


const state = {
    gameStarted: false,
    flippedCards: 0,
    totalFlips: 0,
    totalTime: 0,
    loop: null
}

const gui = {
    tamano2: document.getElementById("tamano2"),
    tamano4: document.getElementById("tamano4"),
    tamano6: document.getElementById("tamano6"),
    reset :document.getElementById("reset"),
    comenzar: document.getElementById("start")
}

juego= false

const generateGame = () => {
    
    gui.tamano2.addEventListener('click', () => {
        const dimensions = 2
        
      
        
        //-- Creamos un array con las imagenes que vamos a utilizar en nuestro juego
        const img = ['piccolo.png', 'vegeta.png', 'goku2.png','freezer.png','celula.png', 'piccolo.png', 'vegeta.png', 'goku2.png','freezer.png','celula.png']
    
        const picks = pickRandom(img, (dimensions * dimensions) / 2) 
    
        //-- Después descolocamos las posiciones para asegurarnos de que las parejas de cartas
        // están desordenadas.
        const items = shuffle([...picks, ...picks])
        
        //-- Vamos a utilizar una función de mapeo para generar 
        //  todas las cartas en función de las dimensiones
        const cards = `
            <div class="tablero" style="grid-template-columns: repeat(${dimensions}, auto)" grid-dimension="2">
                ${items.map(item => `
                    <div class="card" item-back="${item}">
                        <div class="card-front"></div>
                        <div class="card-back"><img src="${item}"></div>
                    </div>
                `).join('')}
           </div>
        `
        
        //-- Vamos a utilizar un parser para transformar la cadena que hemos generado
        // en código html.
        const parser = new DOMParser().parseFromString(cards, 'text/html')
    
        //-- Por último, vamos a inyectar el código html que hemos generado dentro de el contenedor
        // para el tablero de juego.
        selectors.tablero.replaceWith(parser.querySelector('.tablero'))

    })
    gui.tamano4.addEventListener('click', () => {
        const dimensions = 4;
        const img = ['piccolo.png', 'vegeta.png', 'goku2.png','freezer.png','celula.png', 'piccolo.png', 'vegeta.png', 'goku2.png','freezer.png','celula.png']
    
        
        const picks = pickRandom(img, (dimensions * dimensions) / 2) 
    
        //-- Después descolocamos las posiciones para asegurarnos de que las parejas de cartas
        // están desordenadas.
        const items = shuffle([...picks, ...picks])
        
        //-- Vamos a utilizar una función de mapeo para generar 
        //  todas las cartas en función de las dimensiones
        const cards = `
            <div class="tablero" style="grid-template-columns: repeat(${dimensions}, auto)" grid-dimension="4">
                ${items.map(item => `
                    <div class="card" item-back="${item}">
                        <div class="card-front"></div>
                        <div class="card-back"><img src="${item}"></div>
                    </div>
                `).join('')}
           </div>
        `
        
        //-- Vamos a utilizar un parser para transformar la cadena que hemos generado
        // en código html.
        const parser = new DOMParser().parseFromString(cards, 'text/html')
    
        //-- Por último, vamos a inyectar el código html que hemos generado dentro de el contenedor
        // para el tablero de juego.
        selectors.tablero.replaceWith(parser.querySelector('.tablero'))

    })
    gui.tamano6.addEventListener('click', () => {
        const dimensions = 6;
       
        const img = ['piccolo.png', 'vegeta.png', 'goku2.png','freezer.png','celula.png', 'piccolo.png', 'vegeta.png', 'goku2.png','freezer.png','celula.png']
    
       
        const picks = pickRandom(img, (dimensions * dimensions) / 2) 
    
        //-- Después descolocamos las posiciones para asegurarnos de que las parejas de cartas
        // están desordenadas.
        const items = shuffle([...picks, ...picks])
        
        //-- Vamos a utilizar una función de mapeo para generar 
        //  todas las cartas en función de las dimensiones
        const cards = `
            <div class="tablero" style="grid-template-columns: repeat(${dimensions}, auto)" grid-dimension="6">
                ${items.map(item => `
                    <div class="card" item-back="${item}">
                        <div class="card-front"></div>
                        <div class="card-back"><img src="${item}"></div>
                    </div>
                `).join('')}
           </div>
        `
        
        //-- Vamos a utilizar un parser para transformar la cadena que hemos generado
        // en código html.
        const parser = new DOMParser().parseFromString(cards, 'text/html')
    
        //-- Por último, vamos a inyectar el código html que hemos generado dentro de el contenedor
        // para el tablero de juego.
        selectors.tablero.replaceWith(parser.querySelector('.tablero'))

    })

}

const pickRandom = (array, items) => {
    // La sintaxis de tres puntos nos sirve para hacer una copia del array
    const clonedArray = [...array]
    // Random picks va almacenar la selección al azar de emojis
    const randomPicks = [] 

    for (let index = 0; index < items; index++) {
        const randomIndex = Math.floor(Math.random() * clonedArray.length)
        // Utilizamos el índice generado al azar entre los elementos del array clonado
        // para seleccionar un emoji y añadirlo al array de randompicks.
        randomPicks.push(clonedArray[randomIndex])
        // Eliminamos el emoji seleccionado del array clonado para evitar que 
        // vuelva a salir elegido con splice.
        // 0 - Inserta en la posición que le indicamos.
        // 1 - Remplaza el elemento, y como no le damos un nuevo elemento se queda vacío.
        clonedArray.splice(randomIndex, 1)
    }

    return randomPicks
}

const shuffle = array => {
    const clonedArray = [...array]

    // Intercambiamos las posiciones de los emojis al azar para desorganizar el array
    // así nos aseguramos de que las parejas de emojis no están consecutivas.
    // Para conseguirlo utilizamos un algoritmo clásico de intercambio y nos apoyamos
    // en una variable auxiliar.
    for (let index = clonedArray.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1))
        const original = clonedArray[index]

        clonedArray[index] = clonedArray[randomIndex]
        clonedArray[randomIndex] = original
    }

    return clonedArray
}

const attachEventListeners = () => {
    document.addEventListener('click', event => {
        // Del evento disparado vamos a obtener alguna información útil
        // Como el elemento que ha disparado el evento y el contenedor que lo contiene
        const eventTarget = event.target
        const eventParent = eventTarget.parentElement

        // Cuando se trata de una carta que no está girada, le damos la vuelta para mostrarla
        if (eventTarget.className.includes('card') && !eventParent.className.includes('flipped')) {
            flipCard(eventParent)
        // Pero si lo que ha pasado es un clic en el botón de comenzar lo que hacemos es
        // empezar el juego
        } else if (eventTarget.nodeName === 'BUTTON' && !eventTarget.className.includes('disabled')) {
            startGame()
        }
    })
}

const startGame = () => {
    // Iniciamos el estado de juego
    state.gameStarted = true
    // Desactivamos el botón de comenzar
    selectors.comenzar.classList.add('disabled')

    // Comenzamos el bucle de juego
    // Cada segundo vamos actualizando el display de tiempo transcurrido
    // y movimientos
    state.loop = setInterval(() => {
        state.totalTime++

        selectors.movimientos.innerText = `${state.totalFlips} movimientos`
        selectors.timer.innerText = `Tiempo: ${state.totalTime} sec`
    }, 1000)
}

const flipCard = card => {
    // Sumamos uno al contador de cartas giradas
    state.flippedCards++
    // Sumamos uno al contador general de movimientos
    state.totalFlips++

    // Si el juego no estaba iniciado, lo iniciamos
    if (!state.gameStarted) {
        startGame()
    }

    // Si no tenemos la pareja de cartas girada
    // Giramos la carta añadiendo la clase correspondiente
    if (state.flippedCards <= 2) {
        card.classList.add('flipped')
    }

    // Si ya tenemos una pareja de cartas girada tenemos que comprobar
   // Si ya tenemos una pareja de cartas girada, comprobamos si coinciden
if (state.flippedCards === 2) {
    // Seleccionamos las cartas que están giradas y no emparejadas
    const flippedCards = document.querySelectorAll('.flipped:not(.matched)');

    // Si las cartas no coinciden, las giramos nuevamente después de 1 segundo
    if (flippedCards[0].getAttribute('item-back') !== flippedCards[1].getAttribute('item-back')) {
        setTimeout(() => {
            flipBackCards();
        }, 1000);
    }
    // Restablecemos el contador de cartas giradas
    state.flippedCards = 0;
}


    // Antes de terminar, comprobamos si quedan cartas por girar
    // porque cuando no quedan cartas por girar hemos ganado
    // y se lo tenemos que mostrar al jugador
    if (!document.querySelectorAll('.card:not(.flipped)').length) {
        setTimeout(() => {
            // Le damos la vuelta al tablero
            selectors.gridContainer.classList.add('flipped')
            // Le mostramos las estadísticas del juego
            selectors.win.innerHTML = `
                <span class="win-text">
                    ¡Has ganado!<br />
                    con <span class="highlight">${state.totalFlips}</span> movimientos<br />
                    en un tiempo de <span class="highlight">${state.totalTime}</span> segundos
                </span>
            `
        
            // Paramos el loop porque el juego ha terminado
            clearInterval(state.loop)
        }, 1000)
    }
}


const flipBackCards = () => {
    // Seleccionamos las cartas que no han sido emparejadas
    // y quitamos la clase de giro
    document.querySelectorAll('.card:not(.matched)').forEach(card => {
        card.classList.remove('flipped')
    })
    // Ponemos el contado de parejas de cartas a cero
    state.flippedCards = 0
}

gui.reset.addEventListener('click',()=>{
    clearInterval(state.loop)
    const dimensions = 0;
       
    const img = ['piccolo.png', 'vegeta.png', 'goku2.png','freezer.png','celula.png', 'piccolo.png', 'vegeta.png', 'goku2.png','freezer.png','celula.png']
    
        //-- Elegimos un subconjunto de emojis al azar, así cada vez que comienza el juego
        // es diferente.
        // Es decir, si tenemos un array con 10 emojis, vamos a elegir el cuadrado de las
        // dimensiones entre dos, para asegurarnos de que cubrimos todas las cartas
        const picks = pickRandom(img, (dimensions * dimensions) / 2) 
    
        //-- Después descolocamos las posiciones para asegurarnos de que las parejas de cartas
        // están desordenadas.
        const items = shuffle([...picks, ...picks])
        
        //-- Vamos a utilizar una función de mapeo para generar 
        //  todas las cartas en función de las dimensiones
        const cards = `
            <div class="tablero" style="grid-template-columns: repeat(${dimensions}, auto)" grid-dimension="6">
                ${items.map(item => `
                    <div class="card" item-back="${item}">
                        <div class="card-front"></div>
                        <div class="card-back"><img src="${item}"></div>
                    </div>
                `).join('')}
           </div>
        `
        
        //-- Vamos a utilizar un parser para transformar la cadena que hemos generado
        // en código html.
        const parser = new DOMParser().parseFromString(cards, 'text/html')
    
        //-- Por último, vamos a inyectar el código html que hemos generado dentro de el contenedor
        // para el tablero de juego.
        selectors.tablero.replaceWith(parser.querySelector('.tablero'))
})
gui.comenzar.addEventListener('click',()=>{
    juego = true
    
})
    

// Generamos el juego

generateGame()

// Asignamos las funciones de callback para determinados eventos
attachEventListeners()