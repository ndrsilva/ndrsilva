algoritmo "semnome"
// Fun��o :
// Autor :
// Data : 08/03/2021
// Se��o de Declara��es 
var
   a: real
   result : real

inicio
// Se��o de Comandos 
   a <- 30.1
   
   result <- abs(-30)
   Escreval("Valor Absoludo de -", a, " �:", result)
   Escreval
   
   result <- exp(a,2)
   Escreval("A exponenciaa��o de ", a, " �:", result)
   Escreval
   
   result <- int(a)
   Escreval("O valor inteiro de ", a, " �:", result)
   Escreval
   
   result <- raizq(a)
   Escreval("A raiz de ", a, " �:" , result)
   Escreval
   
   Escreval("O valor de PI � :", pi)
   Escreval
   
   result <- sen(grauprad(a))
   Escreval("O Seno de ", a, " �: ", result)
   Escreval
   
   result <- cos(grauprad(a))
   Escreval("Cosseno de ", a, " �: ", result)
   Escreval
   
   result <- tan(grauprad(a))
   Escreval("O tangente de ", a, " �: ", result)
   Escreval
   
   result <- grauprad(a)
   Escreval("O GrauRad de ", a, " �: ",result)
fimalgoritmo
