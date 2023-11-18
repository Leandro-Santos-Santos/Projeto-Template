function nomear(){
    let nome = document.getElementById('name2').value;
    let senhaInput = document.getElementById('senha2').value;
    let botao = document.getElementById('botao2');
    
    if(nome.length == 0 || senhaInput.length == 0 ){
        alert('Preencha o campo corretamente!');
    }else{
        botao.innerHTML='logado'
        botao.style.color='red';
        localStorage.setItem('name2', nome);
        localStorage.setItem('senha2', senha);
        
        
    }
}

function preencherFormulario() {
    let nomeArmazenado = localStorage.getItem('name3');
    let senhaArmazenada = localStorage.getItem('senha2');

    if (nomeArmazenado && senhaArmazenada) {
      document.getElementById('name2').value = nomeArmazenado;
      document.getElementById('senha2').value = senhaArmazenada;
    }
  }


document.querySelector('#botao2').addEventListener("click", function(event){
    event.preventDefault();


  });