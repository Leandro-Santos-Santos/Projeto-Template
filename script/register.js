function nomear(){
    let nome = document.getElementById('name3').value;
    let emailInput = document.getElementById('email3').value;
    let botao = document.getElementById('botao3');
    let email = document.getElementById('email3').value;
    
    if(nome.length == 0 || emailInput.length == 0 ){
        alert('Preencha o campo corretamente!');
    }else{
        botao.innerHTML='Enviado'
        botao.style.color='red';
        localStorage.setItem('name3', nome);
        localStorage.setItem('email3', email);
        
        
    }
}









document.querySelector('#botao3').addEventListener("click", function(event){
    event.preventDefault();
    preencherFormulario();
  });