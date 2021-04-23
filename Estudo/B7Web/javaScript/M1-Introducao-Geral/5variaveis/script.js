/*
var nome = "André"
var sobrenome = " Silva"

var nomeCompleto = nome + sobrenome

alert(nomeCompleto) 
*/
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//A variável fica disponível em todo o sistema.
//var nome = "ndr"
//
//console.log(window.nome)
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

/*
let nome = "ndr"

console.log(nome)
console.log(window.document.write(nome))
*/

/*
//Se o "console.log()", for declarada fora do IF, irá da erro
porque o "let torna a fução private e não glogal"
let nome = "ndr"

if (nome == "ndr") {
    let idade = 27

    console.log(idade)
}
*/

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const nome = "ndr"

nome.nome = "silva"

console.log(nome)