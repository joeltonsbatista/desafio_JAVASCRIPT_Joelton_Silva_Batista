// Vetor para armazenar os itens do carrossel//
let carouselArr = [];


// Classe do Carrossel
class Carousel {

    constructor(image, title, uri) {
        this.image = image;    // URL da imagem do item//
        this.title = title;    // Título do item//
        this.uri = uri;        // Link do item//
        
    }

    static Start(arr) {
        if (arr && arr.length > 0) {
            Carousel._sequence = 0;         // Índice do item atual//
            Carousel._size = arr.length;    // Quantidade total de itens//
            Carousel._arr = arr;            // Armazena o array de itens no Carousel//
            Carousel.Next();                // Exibe o primeiro item//
            
            Carousel._interval = setInterval(function () { Carousel.Next(); }, 2000); //Define o tempo de 2s para a aternância das imagens carregadas no carrossel//

        } else {
            
            throw "O método Start precisa receber um array válido."
        }
    }

     // Método estático que exibe o próximo item do carousel e atualiza o DOM//
    static Next() {
        
        // Seleciona os elementos HTML onde a imagem de fundo e o título serão exibidos//
        const carrouselElement = document.getElementById("carousel");
        const titleElement = document.getElementById("carousel-title");

        // Verifica se os elementos existem no DOM, se não existirem, exibe um erro no console e interrompe a execução//
        if (!carrouselElement || !titleElement){
            console.error("Elementos do carrossel não encontrados!");
            return;
        }

        // Pega o item atual do carousel usando o índice _sequence//    
        const item = Carousel._arr[Carousel._sequence];

        // Atualizando o estilo do elemento do carousel//
        carrouselElement.style.backgroundImage = `url(img/${item.image})`;          // Define a imagem de fundo
        carrouselElement.style.backgroundPosition = "center";                       // Centraliza a imagem
        carrouselElement.style.backgroundSize = "cover";                            // Ajusta o tamanho para cobrir todo o elemento
        carrouselElement.style.transition = "background-image 0.5s ease-in-out";    // Aplica uma transição suave ao trocar a imagem

        titleElement.innerHTML = `<a href= "${item.uri}"> ${item.title}</a>`;       // Atualiza o título do item como um link clicável que leva à URL do item
        
        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;              // Atualiza o índice para o próximo item, O operador % garante que, ao chegar no último item, volte para o primeiro (loop infinito)
    }
};
