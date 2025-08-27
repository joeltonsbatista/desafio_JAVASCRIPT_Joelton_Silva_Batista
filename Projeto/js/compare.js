
//Criação de um vetor para armazenar informações sobre os atributos da classe com a finalidade de comparação quando for solicitado pelo usuário.
let carArr = [];                                        

//Criação da classe car inicializando todos atributos atrelados através do construtor//
class Car {                                              


    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image) {
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
}

// Função é usada para verificar se um carro já está selecionado ou armazenado no vetor. Se estiver, retorna a posição dele; se não, retorna -1.
function GetCarArrPosition(arr, carClass) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nome === carClass.nome)
            return i;
    }
    return -1;
}

// Função que adiciona ou remove um carro da lista de comparação por meio dos argumentos de entrada associados ao checkbox e o objeto do carro, além de chamar a função associada ao botão comparar//
function SetCarToCompare(el, carClass) {

    // Verifica se carClass é realmente uma instância da classe Car e garante que só objetos válidos de carro sejam processados//
    if (carClass instanceof Car) {
        if (el.checked) {
             // Impede que mais de 2 carros sejam selecionados, se já houver 2 carros, desmarca o checkbox e alerta o usuário//
            if (carArr.length >= 2) {
                el.checked = false;
                alert("Você só pode comparar 2 veículos por cada vez!");
                return;
            }
             // Verifica se o carro ainda não está na lista, se não estiver, adiciona ao array carArr
            if (GetCarArrPosition(carArr, carClass) === -1) {
                carArr.push(carClass);
            }

        } else {
            const index = GetCarArrPosition(carArr, carClass);
            if (index !== -1) {
                carArr.splice(index, 1);
            }
        }
        botaoComparar();
    } else {
        throw "You need set a Car Class";
    }
}

// Função responsável por habilitar ou desabilitar o botão de comparação dependendo da quantidade de carros escolhidos pelo usuário.

function botaoComparar() {
    const compareBtn = document.querySelector("button[onclick='ShowCompare()']");

    if (carArr.length === 2) {
        compareBtn.disabled = false;
        compareBtn.style.opacity = 1;
        compareBtn.style.cursor = "pointer";
    } else {
        compareBtn.disabled = true;
        compareBtn.style.opacity = 0.5;
        compareBtn.style.cursor = "not-allowed"
    }
}

// Função para verificar o mínimo de carros selecionados para comparação permitindo ou não o ato//
function ShowCompare() {
    if (carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
    document.body.classList.add("compare-open")
}

// Função que oculta a tabela de comparação de carros e restaura o estado normal da página//
function HideCompare() {
    document.getElementById("compare").style.display = "none";
    document.body.classList.remove("compare-open");
}

// Função responsável por "printar" a tabela comparativa por meio da varedura das informações contidas dentro do objeto correspondente ao carro selecionado//
function UpdateCompareTable() {

    for (let i = 0; i < carArr.length; i++) {
        const car = carArr[i];

        document.getElementById(`compare_image_${i}`).innerHTML = `<img src="${car.image}" width="100">`;

        document.getElementById(`compare_modelo_${i}`).textContent = car.nome;
        document.getElementById(`compare_alturacacamba_${i}`).textContent = car.alturaCacamba;
        document.getElementById(`compare_alturaveiculo_${i}`).textContent = car.alturaVeiculo;
        document.getElementById(`compare_alturasolo_${i}`).textContent = car.alturaSolo;
        document.getElementById(`compare_capacidadecarga_${i}`).textContent = car.capacidadeCarga;
        document.getElementById(`compare_motor_${i}`).textContent = car.motor;
        document.getElementById(`compare_potencia_${i}`).textContent = car.potencia;
        document.getElementById(`compare_volumecacamba_${i}`).textContent = car.volumeCacamba;
        document.getElementById(`compare_roda_${i}`).textContent = car.roda;
        document.getElementById(`compare_preco_${i}`).textContent = `R$ ${car.preco.toLocaleString('pt-BR')}`;
    }

    
}

 // Espera o carregamento completo do DOM, garantindo que o código dentro desta função seja executado depois que todo o HTML foi carregado
document.addEventListener('DOMContentLoaded', function(){
    botaoComparar();
})
