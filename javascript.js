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

