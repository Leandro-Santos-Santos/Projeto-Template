function nomear(){
    let nome = document.getElementById('name').value;
    let emailInput = document.getElementById('email').value;
    let botao = document.getElementById('botaoQuestionnarie');
    
    if(nome.length == 0 || emailInput.length == 0 ){
        alert('Preencha o campo corretamente!');
    }else{
        botao.innerHTML='logado'
        botao.style.color='red';
    
        
        
    }
}









document.querySelector('.button').addEventListener("click", function(event){
    event.preventDefault()
  });