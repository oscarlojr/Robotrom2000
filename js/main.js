const robotrom = document.querySelector('#robotron');

robotrom.addEventListener('click', (evento) => {
  console.log(evento);
});

function dizOi(nome) {
  console.log(`Oi ${nome}.`);
  console.log('Bem vindo ao Robotrom!');
}

dizOi('Oscar');

