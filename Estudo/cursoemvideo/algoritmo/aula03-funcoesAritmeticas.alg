algoritmo "semnome"
// Função :
// Autor :
// Data : 08/03/2021
// Seção de Declarações 
var
   a: real
   result : real

inicio
// Seção de Comandos 
   a <- 30.1
   
   result <- abs(-30)
   Escreval("Valor Absoludo de -", a, " é:", result)
   Escreval
   
   result <- exp(a,2)
   Escreval("A exponenciaação de ", a, " é:", result)
   Escreval
   
   result <- int(a)
   Escreval("O valor inteiro de ", a, " é:", result)
   Escreval
   
   result <- raizq(a)
   Escreval("A raiz de ", a, " é:" , result)
   Escreval
   
   Escreval("O valor de PI é :", pi)
   Escreval
   
   result <- sen(grauprad(a))
   Escreval("O Seno de ", a, " é: ", result)
   Escreval
   
   result <- cos(grauprad(a))
   Escreval("Cosseno de ", a, " é: ", result)
   Escreval
   
   result <- tan(grauprad(a))
   Escreval("O tangente de ", a, " é: ", result)
   Escreval
   
   result <- grauprad(a)
   Escreval("O GrauRad de ", a, " é: ",result)
fimalgoritmo
