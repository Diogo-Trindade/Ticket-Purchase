function comprar() {
    var tipoIngresso = document.getElementById('tipo-ingresso').value;
    var quantidade = parseInt(document.getElementById('qtd').value);

    if(quantidade < 0){
        alert("Número inválido");
    }

    switch (tipoIngresso){
        case 'pista':
            comprarPista(quantidade);
            break;
        case 'superior':
            comprarSuperior(quantidade);
            break;
        case 'inferior':
            comprarInferior(quantidade);
            break;
        default:
            alert('Selecione um tipo válido');
        }
    }
   


function comprarPista(quantidade) {
    var pistaQnt = parseInt(document.getElementById('qtd-pista').textContent);

    if (quantidade > pistaQnt) {
        alert("Quantidade superior aos ingressos disponíveis");
    } else { 
        pistaQnt = pistaQnt - quantidade;

        document.getElementById('qtd-pista').textContent = pistaQnt;
        alert("Compra efetuada, quantidades atualizadas");

    }
}

function comprarSuperior(quantidade) {
    var qntSup = parseInt(document.getElementById('qtd-superior').textContent);

    if (quantidade > qntSup) {
        alert("Quantidade superior aos ingressos disponíveis");
    } else { 
        qntSup = qntSup - quantidade;

        document.getElementById('qtd-superior').textContent = qntSup;

    }
}

function comprarInferior(quantidade){
    var qntInf = parseInt(document.getElementById('qtd-inferior').textContent);

    if (quantidade > qntInf) {
        alert("Quantidade superior aos ingressos disponíveis");
    } else { 
        qntInf = qntInf - quantidade;

        document.getElementById('qtd-inferior').textContent = qntInf;
    }
}
