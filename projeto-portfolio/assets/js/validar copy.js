( () => { } ) ();

  // receber todos os campos do form

  const cadaCampo = document.querySelectorAll('[data-form]');
  console.log(cadaCampo);


  // função para detectar campo em foco

  cadaCampo.forEach(campo => {
    campo.addEventListener('blur', evento => {
      validaCampo(evento.target);
    });
  });


  // objeto para identificar tipo de erro dos campos

  const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'customError',
    'patternMismatch'
  ];


  // objeto para receber mensagens de erro customizadas

  const mensagensDeErro = {
    nome: {
      valueMissing: 'Por favor, informe seu nome.',
      customError: 'Preenchimento inválido do nome.'
    },

    email: {
      valueMissing: 'Por favor, informe seu email.',
      customError: 'Preenchimento inválido do email.'
    },

    assunto: {
      valueMissing: 'Por favor, informe o assunto.',
      customError: 'Preenchimento inválido do assunto.'
    },

    mensagem: {
      valueMissing: 'Por favor, informe a mensagem.',
      customError: 'Preenchimento inválido da mensagem.'
    }
  }


  // objeto para validar campos

  const validadores = {
    nome:campo => validaNome(campo),
    email:campo => validaEmail(campo),
    assunto:campo => validaAssunto(campo),
    mensagem:campo => validaMensagem(campo)
  }


  // função para validar todos os campos do form

  function validaCampo(cadaCampo) {
    let campoValor = cadaCampo.value.trim();

    // validador do tipo de campo
    if (validadores[campoValor]){
      validadores[campoValor](cadaCampo);
    }

    // verificar e exibir layout e mensagem de campo inválido
    if(cadaCampo.validity.valid){
      cadaCampo.parentElement.classList.remove('input__container--invalido');
      cadaCampo.parentElement.querySelector('input__erro').innerHTML = mostraMensagemErro(campoValor, cadaCampo);
    }

    console.log(campoValor);
  }


  // função para exibir mensagem de erro

  function mostraMensagemErro(campoValor, cadaCampo) {
    let mensagem = '';
    tiposDeErro.forEach(erro => {
      if(cadaCampo.validity[erro]){
        mensagem = mensagensDeErro[campoValor][erro]
      }
    });
    return mensagem;
  }


  // Funções para validar cada campo

  function validaNome(cadaCampo) {
    let campoValor = cadaCampo.value.trim();
  
    if (campoValor === ''){
      const mensagem = mensagensDeErro;
      cadaCampo.setCustomValidity(mensagem);
    }

    else if (campoValor.length >=50) {


    }
  };

