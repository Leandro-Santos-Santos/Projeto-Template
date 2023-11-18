function nomear(){
    let nome = document.getElementById('name').value;
    let senhaInput = document.getElementById('senha').value;
    let botao = document.getElementById('botao2');
    
    if(nome.length == 0 || senhaInput.length == 0 ){
        alert('Preencha o campo corretamente!');
    }else{
        botao.innerHTML='logado'
        botao.style.color='red';
        localStorage.setItem('name', nome);
        localStorage.setItem('senha', senha);
        
        
    }
}






document.querySelector('#botao2').addEventListener("click", function(event){
    event.preventDefault()
  });