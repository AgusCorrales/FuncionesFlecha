// 1. Funciones flecha

// Convierte la siguiente función en una función flecha:

// function saludar() {
//   return "Hola";
// }

const saludar = () => "Hola";



// Convierte la siguiente función en una función flecha en línea:

// function division(a,b) {
//   return a / b;
// }

const division = (a,b) => a/b;
console.log(division(9,3));




// Convierte la siguiente función en una función flecha:

// function miNombre(nombre) {
//   return `Mi nombre es ${nombre}`;
// }

const miNombre = (nombre) => `Mi nombre es ${nombre}`
console.log(miNombre("Agustin"));




// Convierte las siguientes funciones en funciones flecha:

// function test2() {
//   console.log("Función test 2 ejecutada.");
// }
// function test1(callback) {
//   callback();
// }	

const test2 = () => "Función test 2 ejecutada"

const test1 = (callback) => callback()





// 2. Foreach
// Utiliza la siguiente array para resolver los próximos ejercicios: 
      
let gente = [
        {
          nombre: "Jamiro",
          edad: 45,
        },
        {
          nombre: "Juan",
          edad: 35,
        },
        {
          nombre: "Paco",
          edad: 34,
        },
        {
          nombre: "Pepe",
          edad: 14,
        },
        {
          nombre: "Pilar",
          edad: 24,
        },
        {
          nombre: "Laura",
          edad: 24,
        },
        {
          nombre: "Jenny",
          edad: 10,
        },
      ];


//   Crea un array con la gente mayor de 25 años y muéstralo por consola.

let mayores25 = []

gente.forEach((personas)=>{
    if (personas.edad > 25){
         return mayores25.push(personas)
    }

})

console.log(mayores25);


//   Crea un array con la gente que empieza por J. 

let nombresConJ =[]

gente.forEach((nombres)=>{
    if(nombres.nombre.charAt(0) === "J"){
        return nombresConJ.push(nombres)
    }

})

console.log(nombresConJ);




// 3. Map
// Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola.

const allMayor25 = mayores25.map (edades => edades.edad)
console.log(allMayor25);




// Crea un array con la gente que empieza por J. 

const allNombresConJ = nombresConJ.map (nombres => nombres.nombre)
console.log(allNombresConJ);


// Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:

const numbers = [ 4, 5, 6, 7, 8, 9, 10];
const multi = numbers.map((value)=>{
    return Math.pow(value,value)

})
console.log(multi);
// Resultado esperado
// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]


// 4. Filter
// Crea un segundo array que devuelva los impares

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const soloImpares = numeros.filter (numero => numero % 2)
console.log(soloImpares);

//ado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:

const foodList = [
        { name: 'Tempeh', isVeggie: true },
        { name: 'Cheesbacon burguer', isVeggie: false },
        { name: 'Tofu burguer', isVeggie: true },
        { name: 'Entrecot', isVeggie: false }
      ];


const soloVegano = foodList.filter (comida => comida.isVeggie == true)

console.log(soloVegano);

const queRicoVegano = soloVegano.map ((value)=>{
    return `Que rico ${value.name} me voy a comer`

})

console.log(queRicoVegano);


// 5. Reduce
// Dado el siguiente array, obtén la multiplicación de todos los elementos del array:


const numeros2 = [39, 2, 4, 25, 62];

const multiplicacion = numeros2.reduce((a,b) => a * b)

console.log(multiplicacion);

// Salida--> 483600

//Extras
//Map
//Dado el siguiente array, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:

const staff = [
  {
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
  },
  {
    name: "Ana",
    role: "becaria",
    hobbies: ["nadar", "bailar"],
  },
  {
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
  },
  {
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
  },
];


// Resultado esperado
/*
    [
      'Pepe es TheBoss y le gusta leer y ver pelis',
      'Ana es becaria y le gusta nadar y bailar',
      'Luis es programador y le gusta dormir y comprar',
      'Ana es becaria y le gusta nadar y bailar',
      'Carlos es secretario y le gusta fútbol y queso'
    ]
 */


const yoSoy = staff.map ((value)=>{
    return `${value.name} es ${value.role} y le gusta ${value.hobbies[0]} y ${value.hobbies[1]}`
})

console.log(yoSoy);



//Dado el siguiente array, generar un segundo array que consiga generar de salida el resultado esperado:

const foodList1 = ["Pizza", "Ramen", "Paella", "Entrecot"];

const dondeSoy = foodList1.map((value)=>{
    if (foodList1[0] == value){
        return `Como soy de Italia, amo comer ${foodList1[0]}`
    }else if (foodList1[1] == value){
        return `Como soy de Japon, amo comer ${foodList1[1]}`
    }else if (foodList1[2] == value){
        return `Como soy de Valencia, amo comer ${foodList1[2]}`
    }else if (foodList1[3] == value){
        return `Aunque no como carne, el ${foodList1[3]} es sabroso`
    }

})

console.log(dondeSoy);


//Resultado esperado
/* [
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso'
   ]
*/


//Filter
//Dado el siguiente array, devolver un array con los nombres de los elementos que valgan más de 300 euros

const inventory = [
        {
          name: 'Mobile phone',
          price: 199
        },
        {
          name: 'TV Samsung',
          price: 459
        },
        {
          name: 'Viaje a cancún',
          price: 600
        },
        {
          name: 'Mascarilla',
          price: 1
        }
      ];

const precioAlto = inventory.filter(numero => numero.price > 300);      
console.log(precioAlto);


//Reduce
//Concatena todos los elementos del array con reduce para que devuelva una sola frase

const sentenceElements = [
    'Me',
    'llamo',
    /* Tu nombre aquí! */,
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
    ];
   
// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'

const fraseMeLlamo = sentenceElements.reduce((valorAnterior,ValorActual) => {
  return valorAnterior + " " + ValorActual  
})

console.log(fraseMeLlamo);




    