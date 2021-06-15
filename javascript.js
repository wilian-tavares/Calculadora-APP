var qtd = 0;
var qtd_ponto = 0;

function calcular(tipo, valor) {
    if (valor === 'C') {
        //limpar o visor
        document.getElementById('resultado').value = '';
        qtd = 0;
        qtd_ponto = 0;
    }



    else if (valor === '+' || valor === '-' || valor === '*' || valor === '/') {

        if (qtd === 0) {
            document.getElementById('resultado').value += valor;
            qtd += 1;
            qtd_ponto = 0;
        }

        else if (qtd > 0) {
            document.getElementById('resultado').value += "";
        }
    }



    if (valor === ".") {

        if (qtd_ponto === 0) {
            document.getElementById('resultado').value += valor;
            qtd_ponto += 1;
        }
        else if (qtd_ponto > 0 && valor === ".") {
            document.getElementById('resultado').value += "";
        }


    }












    if (valor === '=') {
        var valor_campo = eval(document.getElementById('resultado').value)
        document.getElementById('resultado').value = valor_campo;
        qtd = 0;
        qtd_ponto = 0;
    }

    else if (tipo === 'valor') {
        document.getElementById('resultado').value += valor;
        qtd = 0;

    }
}

function onSelectImage(event) {
    // se usuário não selecionou nenhum imagem não faça nada
    if (!event.target.files.length) return;

    // aqui pegaremos a primeira imagem da lista: FileList
    var selectedFile = event.target.files[0];

    // FileReader https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
    var reader = new FileReader();

    // assim que terminar de ler a imagem
    // jogá-la como plano de fundo da #calculadora
    reader.onload = function (event) {
        document.querySelector('#calculadora').style.background = "url('" + event.target.result + "') no-repeat 0 0 ";
    };

    // Informa ao reader para ler a image como base64
    reader.readAsDataURL(selectedFile);
}
