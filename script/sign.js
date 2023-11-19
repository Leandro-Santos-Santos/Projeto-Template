function nomear(){
    let nome = document.getElementById('name2').value;
    let senhaInput = document.getElementById('senha2').value;
    let botao = document.getElementById('botao2');
    let email = document.getElementById('email').value;
    
    if(nome.length == 0 || senhaInput.length == 0 ){
        alert('Preencha o campo corretamente!');
    }else{
        botao.innerHTML='logado'
        botao.style.color='red';
        localStorage.setItem('name2', nome);
        localStorage.setItem('senha2', senha);
        localStorage.setItem('email', email);
        
        
    }
}

function preencherFormulario() {
    let nomeArmazenado = localStorage.getItem('name3');
    let senhaArmazenada = localStorage.getItem('senha2');
    let emailArmazenado = localStorage.getItem('email3')


    if (nomeArmazenado || senhaArmazenada || emailArmazenado) {
      document.getElementById('name2').value = nomeArmazenado;
      document.getElementById('senha2').value = senhaArmazenada;
      document.getElementById('email').value = emailArmazenado;
    }
  }


document.querySelector('#botao2').addEventListener("click", function(event){
    event.preventDefault();


  });