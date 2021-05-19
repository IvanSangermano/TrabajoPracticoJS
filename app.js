
// AGREGAR "/*" DESPUES DE CADA EJERCICIO PARA VERLO INDIVIDUALMENTE //

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////VARIABLES Y OPERADORES/////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

//A)

var PrimerNumero = 1;
var SegundoNumero = 3;
var Sumatoria = PrimerNumero + SegundoNumero;
console.log(Sumatoria);

//B)

var PrimerString = 'Ivan';
var SegundoString = 'Sangermano';
var ConcatenacionDeStrings = PrimerString + ' ' + SegundoString;
console.log(ConcatenacionDeStrings);

//C)

var StringNumero1 = 'Ivan'; 
var StringNumero2 = 'Sangermano';
var SumatoriaDeString =  StringNumero1.length + StringNumero2.length;
console.log(SumatoriaDeString);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////STRING//////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//A)

var String10Caracteres = 'RedHotChiliPeppers';
console.log(String10Caracteres.toUpperCase());

//B)

var Pimeros5String = String10Caracteres.substr(0,5);
console.log(Pimeros5String);

//C)

var Pimeros3String = String10Caracteres.substr(0,3);
console.log(Pimeros3String);

//D)

var MayusYMinus = String10Caracteres.substr(0,1).toUpperCase() + String10Caracteres.substr(1).toLowerCase();
console.log(MayusYMinus);

//E)

var StringConEspacioEnBlanco = 'Red Hot Chili Peppers';
var EspacioEnBlancoEn = StringConEspacioEnBlanco.indexOf(" ");
console.log(EspacioEnBlancoEn);

//F)

var PalabrasYEspacioEnBlanco = "sangerMANO programaCION";
var PalabraFinal = PalabrasYEspacioEnBlanco.substr(0,1).toUpperCase() + PalabrasYEspacioEnBlanco.substr(1, PalabrasYEspacioEnBlanco.indexOf(" ")).toLowerCase()
+ PalabrasYEspacioEnBlanco.substr(PalabrasYEspacioEnBlanco.indexOf(" ") + 1, 1).toUpperCase() +  PalabrasYEspacioEnBlanco.substr(PalabrasYEspacioEnBlanco.indexOf(" ") + 2).toLowerCase()
console.log(PalabraFinal);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////ARRAYS/////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let Meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

//A)

console.log(Meses[5]);
console.log(Meses[11]);

//B)

Meses.sort();
console.log(Meses);

//C)

Meses.unshift("Principio");
Meses.push("Final");
console.log(Meses);

//D)

Meses.shift();
Meses.pop();
console.log(Meses);

//E)

Meses.reverse();
console.log(Meses);

//F)

var MesesString = Meses.join(" - ");
console.log(MesesString);

//G)

let CopiaDeMeses = Meses.slice(4,12);
console.log(CopiaDeMeses);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////IF ELSE///////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//A)

var NumeroAleatorio = Math.random()
if(NumeroAleatorio >= 0.5)
{
    alert("Greater than 0,5");
}
else{
    alert("Lower than 0,5");
}

//B)

var Age = Math.floor(Math.random() * 100);

if (Age < 2) {
    alert("Bebe");
} else {
    if (Age >= 2 && Age <= 12) {
        alert("Niño");
    } else {
        if (Age >=  13 && Age <= 19) {
            alert("Adolecente");
        } else {
            if (Age >=  20 && Age <= 30) {
                alert("Joven");
            } else {
                if (Age >=  31 && Age <= 60) {
                    alert("Adulto");
                } else {
                    if (Age >=  61 && Age <= 75) {
                        alert("Adulto Mayor");
                    } else {
                        if (Age > 75) {
                            alert("Anciano");
                        }
                    }
                }
            }
        }
    }
}
console.log("Edad: " + Age + " años.");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////FOR/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let Palabras = ["coco", "maradona", "pelota", "asado", "polenta"]

//A)

for (i = 0; i < Palabras.length; i++) {
    alert(Palabras[i]);
}

//B)

for (i = 0; i < Palabras.length; i++) {
    alert(Palabras[i].substr(0,1).toUpperCase() + Palabras[i].substr(1).toLowerCase());
}

//C)

var sentence = "";
for (i = 0; i < Palabras.length; i++) {
    sentence += Palabras[i] + " - ";
}
alert(sentence);

//C)

let arrayBucle = [];
for (i = 0; i < 10; i++) {
    arrayBucle.push(i);
}

console.log(arrayBucle);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////FUNCIONES/////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//A)

function SumatoriaFuncion(number1, number2)
{
    return suma = number1 + number2;
}

var Resultado = SumatoriaFuncion(5, 11);
console.log(Resultado);

//B)

function ValidacionEsNumero(number1, number2)
{
if (isNaN(number1) || isNaN(number2))
{ 
    alert("Existe un error con los parametros");
    return NaN; 
}
else{
    return suma = number1 + number2;
}
}

var Resultado = ValidacionEsNumero("s" , 11);
console.log(Resultado);

//C)

function validateInterger(numero){
    return Number.isInteger(numero);
}

console.log(validateInterger(1.3));

//D)

function SumaYRedondeo(number1, number2)
{
if (isNaN(number1) || isNaN(number2))
{ 
    return NaN; 
} else{
        if (validateInterger(number1) || validateInterger(number2)) {
            alert("Hay numeros con decimales");
            return suma = Math.round(number1) + Math.round(number2);
        } 
        else{
            return suma = number1 + number2;
        }
    }
}

console.log(SumaYRedondeo (1.3, 2));
console.log(SumaYRedondeo ("s", 2));

//E)

function SumatoriaFuncion(number1, number2)
{
    if (ValidacionEsNumero(number1, number2)) {
        return suma = NaN;
    }
    else{
        return suma = number1 + number2;
    }
}

function ValidacionEsNumero(number1, number2)
{
if (isNaN(number1) || isNaN(number2))
{ 
    return true;
}
}

var Resultado = SumatoriaFuncion("s", 11);
var Resultado2 = SumatoriaFuncion(3, 11);
console.log(Resultado);
console.log(Resultado2);


*/