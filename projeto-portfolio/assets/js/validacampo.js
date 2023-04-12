
// receber todos os campos do form

  const cadaCampo = document.querySelectorAll('[data-form]');
  // console.log(cadaCampo);


// detectar qual campo está em foco

  cadaCampo.forEach(campo => {
    campo.addEventListener('blur', evento => {
      validaCampo(evento.target);
    });
  });


// função para validar campos

  export function validaCampo(campo) {
    if(campo.validity.valid){
      campo.parentElement.classList.remove('input__container--invalido');
    } else {
      campo.parentElement.classList.add('input__container--invalido');
    }

    // let nomeCampo = (campo.name);
    // let conteudo = (campo.value);
    // console.log('campo:', nomeCampo, '\nconteúdo:', conteudo);
}


