function nomear(){
    let nome = document.getElementById('name').value;
    let senhaInput = document.getElementById('senha').value;
    let botao = document.getElementById('botaoLogin');
    
    if(nome.length == 0 || senhaInput.length == 0 ){
        alert('Preencha o campo corretamente!');
    }else{
        botao.innerHTML='logado'
        botao.style.color='red';
        
        
    }
}






document.querySelector('.button').addEventListener("click", function(event){
    event.preventDefault()
  });