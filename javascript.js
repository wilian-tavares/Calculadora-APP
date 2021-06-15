var qtd = 0;

function calcular(tipo, valor) {
    if (valor === 'C') {
        //limpar o visor
        document.getElementById('resultado').value = '';
    }

    if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
        if (qtd > 0) {
            document.getElementById('resultado').value += valor;
        }

        document.getElementById('resultado').value += valor;
        qtd += 1;

    }

    if (valor === '=') {
        var valor_campo = eval(document.getElementById('resultado').value)
        document.getElementById('resultado').value = valor_campo;
        qtd = 0;
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
        document.querySelector('#calculadora').style.background = "url('" + event.target.result + "') no-repeat 0 0";
    };

    // Informa ao reader para ler a image como base64
    reader.readAsDataURL(selectedFile);
}
