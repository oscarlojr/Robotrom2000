const somar = document.querySelector('#somar');
const subtrair = document.querySelector('#subtrair');
const braco = document.querySelector('#braco');

const controle = document.querySelectorAll('.controle-ajuste');


controle.forEach( (elemento) => {
  elemento.addEventListener('click', (evento) => {
    manipulaDados(evento.target.textContent);
  })
})

function manipulaDados(manipulado) {
  if(manipulado === '+') {
    braco.value = parseInt(braco.value) + 1;
  }else{
    braco.value = parseInt(braco.value) - 1
  }
}



















// const somar = document.querySelector('#somar');
// const subtrair = document.querySelector('#subtrair');
// const braco = document.querySelector('#braco');

// const controle = document.querySelectorAll('.controle-ajuste');

// controle.forEach( (elemento) => {
//   elemento.addEventListener('click', (evento) => {
//     manipulaDados(evento.target.textContent);
//   })
// })

 
// function manipulaDados(operacao) {
// if(operacao === '+'){
//   braco.value = parseInt(braco.value) + 1
// }else{
//   braco.value = parseInt(braco.value) - 1
// }
//  }