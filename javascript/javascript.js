// PEga os elemento do botão "Sim" e "Não"

let botaoNao = document.getElementById("nao");
let botaoSim = document.getElementById("sim");
let mensagemErro = document.getElementById("erro");

// Função que move o botão "Não" para uma nova posição

botaoNao.addEventListener("mouseover", function() {

    //Move o botão não aleatoriamente pela tela 

    let posX = Math.random () * (window.innerWidth - botaoNao.offsetWidth);

    let posY = Math.random () * (window.innerHeight - botaoNao.offsetWidth);

    botaoNao.style.position = "absolute";
    botaoNao.style.left = posX + "px"
    botaoNao.style.top = posY + "px";

    //Exibe a mensagem de erro
    mensagemErro.style.display = "block";

    });

    // Mantém o botão fixo 
    botaoSim.addEventListener ("click", function () {
        alert ("Ótima escolha! Minha chave PIX é o Nº do celular!");

    });
