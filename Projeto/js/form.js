 // Criando uma classe chamada "contato"
class contato {
    constructor(nome, email, telefone, tipo, mensagem) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.tipo = tipo;
        this.mensagem = mensagem;        
    }
}

// Função para desativar o botão de envio dos dados em função da aceitação sobre os termos de privacidade//
function validarEnvio(){
  const termosCheckbox = document.getElementById("termosCheckbox");
  const enviarBtn = document.getElementById("enviarBtn");

  enviarBtn.disabled = !termosCheckbox.checked;
}

// Função que recebe como parâmetro um formulário HTML e implementa um objeto contato à partir da classe anterior mencionada //
function Post(form) {

  const termosCheckbox = document.getElementById("termosCheckbox");
  const newsletterCheckbox = document.getElementById("newsletterCheckbox");

  //Garante que os dados só serão enviados caso o checkbox dos termos seja habilitado//
  if(!termosCheckbox.checked){
      alert("Por favor, aceite os Termos e Condições para enviar o formulário.");
      return false;
  }

  let data = new contato(
    
    form.elements.namedItem("nome").value,             
    form.elements.namedItem("email").value, 
    form.elements.namedItem("telefone").value, 
    form.elements.namedItem("tipo").value,
    form.elements.namedItem("mensagem").value,
    termosCheckbox.checked,
    newsletterCheckbox.checked
  );
  


  // Função para enviar os dados inseridos sobre contato emitindo uma mensagem de retorno//
  console.log("dados dos formulários:", data);
  alert(`Obrigado, ${data.nome}! Sua mensagem de ${data.tipo} foi enviado com sucesso.`);
  
  //Inicializa os checkbox desmarcados//
  termosCheckbox.checked = false;
  newsletterCheckbox.checked = false;

  validarEnvio();

  form.reset();

}
  
document.addEventListener('DOMContentLoaded', function(){
  validarEnvio();
})