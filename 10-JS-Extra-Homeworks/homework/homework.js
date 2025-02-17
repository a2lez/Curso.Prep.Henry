// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  /*objeto({
    D: 1,
    B: 2,
    C: 3
  })
  var arreglo = [];
  for (var i in objeto){
    arrreglo.push([+i, objeto[i]]);
  }*/
  var arreglo = [];
  for (var clave in objeto){
    arreglo.push([clave, objeto[clave]]);
  }
  return arreglo;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var totalCaracteres = {};
  for (var i = 0 ; i<string.length ; i++){
    if(!totalCaracteres[string[i]]){
      totalCaracteres[string[i]]=0;
    }
    totalCaracteres[string [i]]= totalCaracteres[string [i]]+1;
  }
  return totalCaracteres;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  cadena1 = "";
  cadena2 = "";
    for(var i = 0; i<s.length; i++){
      if(s[i]===s[i].toUpperCase()){
        cadena1 = cadena1 + s[i];
      }
      else{
        cadena2 = cadena2 + s[i];}
    }
    return cadena1 + cadena2;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var cadenaInv = "";
  var arreglo = [];
  for(var i=str.length -1; i>=0; i--){
    cadenaInv = cadenaInv + str[i];
  }
  cadenaInv = cadenaInv.split(" ");
  for( var i = cadenaInv.length-1; i>=0; i-- ){
    arreglo.push(cadenaInv[i]);
    }
    return arreglo.join(" ");
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numInv = "";
  var cadena = numero.toString();
  for (var i=cadena.length-1; i>=0; i--){
    numInv = numInv + cadena[i];
  } 
  numInv= parseInt(numInv);
  if(numero===numInv){
    return "Es capicua";
  }
  else{
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var cortarCadena = cadena.split("");
  function removerLetra(cortarCadena, item){
    var indice = cortarCadena.indexOf(item);
    if(indice !== -1){
      cortarCadena.splice(indice, 1);
    }
  }
  for(var i=0; i<cortarCadena.length; i++){
    if( cortarCadena[i]==="a" || cortarCadena[i]==="b" || cortarCadena[i]==="c"){
      removerLetra(cortarCadena, "a");
      removerLetra(cortarCadena, "b");
      removerLetra(cortarCadena, "c");
    }
  }
  return cortarCadena.join("");

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
var sort = arr.sort (function (a,b){
    if(a.length > b.length){
      return 1;
    }
    if(a.length < b.length){
      return -1;
    }
    return 0;
  });
  return sort;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var arreglo = [];
  for(var i = 0; i<arreglo1.length; i++){
    for(var j = 0; j<arreglo2.length; j++){
      if (arreglo1[i]===arreglo2[j]){
        arreglo.push(arreglo1[i]);
      }
    }
  } 
  arreglo.sort(function(a,b){
    return a-b;
  });
  return arreglo; 
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

