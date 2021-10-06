//Rubén Torres
'use strict'

//Variables
let num = 0;
let nums = [];
let suma = 0;
let media;

do{

    num = prompt('Introduce un número:');
    //He comprobado en internet como indicar que se selecciona cancelar en el prompt
    if(num !== null && num !== '' && !isNaN(num))
        nums.push(parseFloat(num));   
    if(num === '')
        alert('No se ha introducido ningún número.');

}while(num !== null);

for(let i=0;i<nums.length;i++){
    suma += nums[i];
}
media = suma / nums.length;

//He consultado en internet como mostrar solo 2 decimales
console.log(`La suma total es ${suma.toFixed(3)}`);
console.log(`La media es ${media.toFixed(3)}`);