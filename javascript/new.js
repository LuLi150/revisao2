// --Notas de Aprovados,reprovados,recuperação 

// let senha=Number(prompt("Digite sua senha: "));
// console.log(nota);
//  if (nota>=7){
//     console.log("Aprovado");
//  } else if (nota<5){
//     console.log("reprovado");
//  } else {
//   console.log("recuperacao");
//  }
//--------
//--Só aceita senha 1234

// while (senha!==1234) {
//     senha=Number(prompt("senha invalida. Tente Novamente"));
// }
// console.log("Acesso permitido");
//----------
//--Menus

// let opcao;
// do {
//     let nome= prompt("Qual seu nome?")
//     opcao = Number(prompt(`
//         Em que posso ajudar?
//         1.Dizer Ola
//         2. Sair`))
//    if(opcao===1){
//       alert(`Ola, ${nome}`)
//     }
// } while (opcao!==2);
// console.log("Saiu!");
//------
//--Verifica idade com true ou false

//  function verificarIdade(idade) {
//     if (idade>=18){
//         return true;  
//     }
//         return false;
//  }
// console.log(verificarIdade(15));
//----------
//--Numeros pares e impas

    for(let numero=1;numero<=10;numero++){
        if(numero % 2 == 0){
           console.log(`${numero} numero par`);
        } else {
            console.log(`${numero} numero impar`);
            
        }
    }

 