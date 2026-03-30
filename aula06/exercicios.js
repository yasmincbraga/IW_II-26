//a) Crie uma função que receba dois números e retorne o maior deles

function num (a, b){
    return Math.max (a, b);
}

let resultado = num(30, 200);
console.log ("O maior número é: ", resultado)

//b) Escreva uma função que receba um número e retorne true se ele for par
//e false caso contrário.

function num1 (par){
    if (par %2 == 0) {
     return true
    } else{
       return false
    }
}

console.log (num1(5));
console.log (num1(4));

