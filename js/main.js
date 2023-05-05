const controle = document.querySelectorAll('.controle-ajuste');

controle.forEach( (elemento) => {
  elemento.addEventListener('click', (evento) => {
    manipulaDados(evento.target.textContent, evento.target.parentNode);
  })
})

function manipulaDados(manipulado, controle) {
  const peca = controle.querySelector('.controle-contador');
  
  if(manipulado === '+') {
    peca.value = parseInt(peca.value) + 1;
  }else{
    peca.value = parseInt(braco.value) - 1
  }
}



















// const somar = document.querySelector('#somar');
// const subtrair = document.querySelector('#subtrair');
// const peca = document.querySelector('#peca');

// const controle = document.querySelectorAll('.controle-ajuste');

// controle.forEach( (elemento) => {
//   elemento.addEventListener('click', (evento) => {
//     manipulaDados(evento.target.textContent);
//   })
// })

 
// function manipulaDados(operacao) {
// if(operacao === '+'){
//   peca.value = parseInt(peca.value) + 1
// }else{
//   peca.value = parseInt(peca.value) - 1
// }
//  }