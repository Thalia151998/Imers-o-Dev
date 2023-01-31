var numeroSecreto = parseInt(Math.random() *100)
var numeroDeTentativas = 1


while (chute != numeroSecreto){
  var chute = prompt('Digite um número entre 0 e 100')

  if (chute == numeroSecreto) {
    alert("Parabéns, você acertou!" + "\n" + "O número secreto era: " + numeroSecreto + "\n" + "Foram realizadas " + numeroDeTentativas + " tentativas")
  }
  else if (chute > numeroSecreto) {
    alert('Você errou, tente novamente!' + '\n' + 'Dica: tente com um número menor que  ' + chute + '\n' + 'Já foram realizadas: ' + numeroDeTentativas + ' tentativas')
  }
  else {
    alert('Você errou, tente novamente!' + '\n' + ' Dica: tente com um número maior que ' + chute + '\n' + 'Já foram realizadas: ' + numeroDeTentativas + ' tentativas')
  } 
  
  numeroDeTentativas = numeroDeTentativas + 1
}