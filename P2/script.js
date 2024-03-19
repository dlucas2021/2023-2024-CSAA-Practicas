    //-- Array que almacena números secretos
    const secretkey = [];

    //-- Generar números aleatorios con un valor máximo
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    
        //--Generamos números secretos y los almacenamos en un array
    for (let i = 0; i < 4; i++) {
        let rnum = getRandomInt(9);
        secretkey.push(rnum.toString());
        console.log(secretkey[0])
    }
   
    
    for (let j = 0; j < secretkey.length; j++) {
        console.log( secretkey[j]);
       
    }
    
   