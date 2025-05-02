 
// --Contagem de 5 a 0

//  function contagemRegressiva(n) {
//     while (n>=0) {
//         console.log(n);
//         n--;
//     }
//  }
//  contagemRegressiva(5)
//-----------
//--Soma os numeros digitados 

// function somarAte(numero) {
//     let somar=0;
//     for (let i=0 ; i<=numero; i++ ) {
//     somar=somar+i;    
//     }
//     console.log(somar);
// }
// somarAte(5)
//---------
//--Faz o desconto da compra

// function compras(preco, desconto = 10) {
//    return preco - (preco*(desconto/100))
// }

// console.log(compras(150, 20));

//--------
//--Dobra oo valor inserido

// const dobrar = function (numero) {
//     return numero*2
// }
// console.log(dobrar(18));
//
//--------
//-- Exemplos de function

// 1° function dobrar(numero) {
//       return numero*2
// }
// 2° const dobrar = function (numero) {
//       return numero*2
// }
// 3° const dobrar = numero =>{
//     return numero*2
// }
// 4° const dobrar = numero => numero*2;
//-------
//-- verifica numeros par e impas com functions
//
//  const verificar = numero =>{
//     if(numero %2 === 0){
//        console.log("par");
//     } else {
//        console.log("impar");
//     }
//  }
// verificar(6);
//---------
//-- outro jeito porem sem if else
const verificar = (numero) => {
    return numero % 2=== 0 ? "par": "impar"; 
}
console.log(verificar(6));
