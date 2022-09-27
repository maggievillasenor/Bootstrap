console.log("Sesión JS03 Condicionales");

//++++++++++ Declaración de bloque ++++++++++

let nombre = "Maggie";
let ciudad = "Guadalajara";

{
    let nombre = "Maya";
    let ciudad = "CDmx";
    let apellido = "Villaseñor";
    console.log(`Mi nombre es ${nombre} ${apellido}, vive en ${ciudad}`); // Maya y CDMX
}

console.log(`Participante: ${nombre}, que vive en ${ciudad}`); // Maggie y Guadalajara


//++++++++++ Condicional IF ++++++++++
/**
 *    Sintaxis:
 *          if( condicionVerdadera ) instrucción;//una instrucción
 * 
 *          if( condicionVerdadera ) {          //para varias instrucciones
 *                instrucciones;
 *            }
 */

let edad = 25;

console.log("*** Declaración antes del if --->");

if ( edad > 24 ) console.log("La edad es mayor a 25");
else{   //si es más de una instrucción se colocan llaves
    console.log("La edad es menor a 25");
    console.log("Seguiremos evaluando");
}

console.log("<--- Declaración después del if ***");

//++++++++++ Operador ternario ++++++++++
//sintaxis: condición ? condición_verdadera : condicion_falsa;

console.log (`La edad es ${ edad>24 ? "mayor":"menor"} a 25`) ;
console.log (`La edad es ${ edad===25 ? "es igual": (edad>24 ? "mayor":"menor") } a 25`) ;

