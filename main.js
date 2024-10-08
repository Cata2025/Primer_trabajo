// Ejercicio 1: Crea un (alert) que muestre lo siguiente: “JavaScript funcionando correctamente”

alert("JavaScript funcionando correctamente"); 

// Comentar la línea para que no se muestre el alert del ejercicio anterior.

// Ejercicio 2: Crear 1 variable tipo let de nombre “variableSinValor” y declárala sin asignarle ningún valor.

let variableSinValor;

// Ejercicio 3: Crea 2 variables tipo let de nombres “booleano1” y “booleano2” con valores booleanos.

let booleano1 = true;
let booleano2 = false;

// Ejercicio 4: Crea 1 variable tipo const de nombre “PI” declarada con valor 3.14.

const PI = 3.14;

// Ejercicio 5: Crea 1 variable de tipo const de nombre “TAU” declarada con valor 2 veces PI.

const TAU = 2 * PI

// Ejercicio 6: Crea 1 variable tipo const de nombre “miNombre” declarada con valor tu nombre.

const miNombre = "Catalina";

// Ejercicio 7: Crea 1 variable de tipo const de nombre “miNumeroFav” declarada con valor numérico.

const miNumeroFav = 777;

// Ejercicio 8: Crea una variable de tipo booleano.

let soyAbogado = true;

// Ejercicio 9: Muestra por consola la longitud de la variable “miNombre”.

console.log(miNombre.length);

// Ejercicio 10: Muestra por consola el tipo de dato de la variable “miNumeroFav”.

console.log(typeof miNumeroFav);

// Ejercicio 11: Muestra un console.log que diga ‘Mi nombre es Catalina y mi numero favorito es 777”, concatenado variables declaradas más arriba.

console.log("Mi nombre es " + miNombre + "y mi numero favorito es " + miNumeroFav); // modelo Caty
console.log(`Mi nombre es ${miNombre} y mi numero favorito es ${miNumeroFav}`); // modelo Sofi.

// Ejercicio 12: Muestra por consola “Seré un crack en JavaScript al terminar el bootcamp” en mayúsculas.

console.log("Seré un crack en JavaScript al terminar el bootcamp".toUpperCase());

// Ejercicio 13: Muestra por consola solo los primeros 5 caracteres de la siguiente variable = ‘Hola soy un crack’.

let frase = "Hola soy un crack"
console.log (frase.substring(0, 5));  

// Ejercicio 14: Convierte la variable “miNumeroFav” en una string y, luego, muestra por consola el tipo de dato que es dicha variable.

let cambiStringNumeroFav = "777";
console.log(typeof cambiStringNumeroFav);

// INVESTIGACION: (no lo entendi, se supone que const no cambia!)

const miNumeroFavString = miNumeroFav.toString();
console.log(typeof miNumeroFavString);

// Ejercicio 15: Crea una variable y asígnale un valor. Después, utilizando template literal, haz uso de la variable que habías creado, guarda el template literal en otra variable y sácala por consola.



// Ejercicio 16: Muestra por consola la variable “PI” hasta los 2 primeros decimales.



// Ejercicio 17: Crear variable de nombre “arrayVacio” cuyo valor sea un array vacío.

const arrayVacio = [];

// Ejercicio 18: Crear variable de nombre “arrayNumeros” declarada con un array de números del 0 al 9 (0, 1, 2...).

const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Ejercicio 19: Crear variable de nombre “arrayNumeros2” declarada con un array de números del 0 al 15 (0, 1, 2...).

const arrayNumeros2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


// Ejercicio 20: Crear variable de nombre “arrayNumerosPares” declarada con un array con los números pares del 0 al 9 (considerando al 0 par).

const arrayNumerosPares = [0, 2, 4, 6, 8];

// Ejercicio 21: Crear variable de nombre “arrayNumerosNeg” declarada con un array de números del 0 al -9 (0, -1, -2...).

const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];


// Ejercicio 22: Crear variable de nombre “holaMundo” declarada con valor array con las palabras 'Hola' y 'Mundo'.

const holaMundo = ['Hola', 'Mundo'];

// Ejercicio 23: Crear variable de nombre “loGuardoTodo” declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'.

const loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];

// Ejercicio 24: Crear variable de nombre “arrayDeArrays” declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']].

const arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

// Ejercicio 25: Muestra por consola la longitud del array “loGuardoTodo”.

console.log(loGuardoTodo.length);

// Ejercicio 26: Crea un nuevo elemento y añadelo al final del array “loGuardoTodo” y muestralo por consola.

loGuardoTodo.push('casa');
console.log(loGuardoTodo);

_________________________________________________________________

// Ejercicio 27: Muestra por consola la propiedad ‘que’ de la variable “loGuardoTodo”.

console.log(loGuardoTodo[1]);

// Ejercicio 28: Añade la propiedad ‘Euralio’ en la array “loGuardoTodo” y muéstrala por consola.

loGuardoTodo.push('Euralio');
console.log(loGuardoTodo);


// Ejercicio 29: Crea un objeto de nombre “Coche” que tenga las propiedades: marca, modelo y matrícula, con sus respectivos valores.

const Coche = {
    marca: 'Toyota',
    modelo: 'Corolla',
    matricula: 'ABC-123'
};

// Ejercicio 30: Crea un objeto de nombre “Casa” que tenga las propiedades: codPostal, calle, portal y piso, con sus respectivos valores.

const Casa = {
    codPostal: '28001',
    calle: 'Gran Vía',
    portal: '1A',
    piso: '5'
};

// Ejercicio 31: Crea un objeto de nombre “FullStackDeveloper” que tenga las propiedades: array lenguajes (ej. ‘javascript’, ’php’), array proyectos (ej. ‘mi página personal’, etc.).

const FullStackDeveloper = {
    lenguajes: ['JavaScript', 'PHP'],
    proyectos: ['mi página personal', 'proyecto de bootcamp']
};

// Ejercicio 32: Crea un objeto de nombre “Perro” que tenga las propiedades: nombre, raza, color y edad, con sus respectivos valores.

const Perro = {
    nombre: 'narco',
    raza: 'pastor',
    color: 'negro',
    edad: 5
};

// Ejercicio 33: Crea un objeto de nombre “Noticia” que tenga las propiedades: titular y cuerpo, con sus respectivos valores.

const Noticia = {
    titular: 'Iran en guerra',
    cuerpo: 'tercera guerra mundial'
};

// Ejercicio 34: Crea un objeto de nombre “Persona” que tenga las propiedades: nombre, apellidos y edad, con sus respectivos valores.

const Persona = {
    nombre: 'Euralio',
    apellidos: 'garcia',
    edad: 80
};

// Ejercicio 35: Muestra por consola el nombre de la variable “Persona”.

console.log(Persona.nombre); // papa.hijo

// Ejercicio 36: Muestra por consola el lenguaje javascript de la variable “FullStackDeveloper”.

console.log(FullStackDeveloper.lenguajes[0]); // Mostrando JavaScript

// Ejercicio 37: Crea un objeto de nombre “Portatil” que tenga la propiedad marca. Accede a esta propiedad con .marca y muéstrala por consola.

const Portatil = {
    marca: 'Dell'
};
console.log(Portatil.marca);

// Ejercicio 38: Obtén el valor de la propiedad marca del objeto anteriormente creado (“Portatil”) con [“marca"], y muéstrala por consola.

console.log(Portatil["marca"]);

// Ejercicio 39: Crea un objeto de nombre “Concierto” con una propiedad llamada grupos que es un array. Obtén el valor de la propiedad y muéstrala por consola.

const Concierto = {
    grupos: ['ACDC', 'PINK FLOYD']
};
console.log(Concierto.grupos);

// Ejercicio 40: Crea un objeto de nombre “Led”, con las propiedades: lampara1 con valor rojo, lampara2 con valor verde y lampara3 con valor azul. Obtén el valor de las propiedades guardándolo en la variable “array RGB[Rojo, Verde, Azul]” y muestra este array por consola.

const Led = {
    lampara1: 'rojo',
    lampara2: 'verde',
    lampara3: 'azul'
};
const arrayRGB = [Led.lampara1, Led.lampara2, Led.lampara3];
console.log(arrayRGB);

// Ejercicio 41: Crea un objeto de nombre “O_Error” con la propiedad código. Obtén el valor de la propiedad y muéstrala por consola.

const O_Error = {
    codigo: '404'
};
console.log(O_Error.codigo);

// Ejercicio 42: Crea un objeto de nombre “Grupo” con la propiedad integrantes (array). Obtén el valor de la propiedad guardándolo en la variable integrantes y muestra por consola a uno de los integrantes.

const Grupo = {
    integrantes: ['Juan', 'María', 'Carlos']
};
const integrantes = Grupo.integrantes;
console.log(integrantes[0]); // Mostrando el primer integrante

// Ejercicio 43: Crea un objeto de nombre “Impresora” con la propiedad objeto tinta{rojo, verde, azul}. Obtén el valor de la propiedad guardándolo en la variable “nivelesTinta” y muéstrala por consola.

const Impresora = {
    tinta: {
        rojo: 100,
        verde: 50,
        azul: 75
    }
};
const nivelesTinta = Impresora.tinta;
console.log(nivelesTinta);

// Ejercicio 44: Crea un objeto de nombre "Movil” con la propiedad especificaciones. Obtén el valor de la propiedad con ["especificaciones"] guardándolo en la variable especificaciones y muéstrala por consola.

const Movil = {
    especificaciones: {
        pantalla: '6 pulgadas',
        ram: '8 GB'
    }
};
const especificaciones = Movil['especificaciones'];
console.log(especificaciones);

// Ejercicio 45: Dado el objeto de nombre “Portatil” con la propiedad marca, modifica el valor de la propiedad marca por el valor “MSI”. Consolea el resultado.

Portatil.marca = 'MSI';
console.log(Portatil.marca);

// Ejercicio 46: Dado el objeto de nombre “Concierto”, añade el valor Guns N' Roses a la propiedad grupos. Consolea el resultado.

Concierto.grupos.push("Guns N' Roses");
console.log(Concierto.grupos);

// Ejercicio 47: Dado el objeto de nombre “Concierto”, crea la propiedad fecha, dale un valor y, después, modifica el valor de la propiedad por el valor new Date() (fecha de hoy: investiga que es new Date y cómo usarlo). Consolea el resultado.

Concierto.fecha = '2023-10-07'; // Añadiendo una fecha
Concierto.fecha = new Date(); // Modificando por la fecha actual

console.log(Concierto.fecha);

// Ejercicio 48: Dado el objeto de nombre “Grupo”, modifica el valor de la propiedad integrantes quitándole un integrante. Consolea el número de integrantes actual (ojo! el número, no los nombres de los integrantes).

Grupo.integrantes.pop(); // Eliminando el último integrante
console.log(Grupo.integrantes.length); // Mostrando el número de integrantes
