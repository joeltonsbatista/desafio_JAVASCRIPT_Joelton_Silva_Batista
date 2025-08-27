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

// Função que recebe como parâmetro um formulário HTML e implementa um objeto contato à partir da classe anterior mencionada //
function Post(form) {

  let data = new contato(
    
            form.elements.namedItem("nome").value,             
            form.elements.namedItem("email").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("tipo").value,
            form.elements.namedItem("mensagem").value);
  


// Função para enviar os dados inseridos sobre contato emitindo uma mensagem de retorno//
console.log("dados dos formulários:", data);
alert(`Obrigado, ${data.nome}! Sua mensagem de ${data.tipo} foi enviado com sucesso.`);
form.reset();

  }