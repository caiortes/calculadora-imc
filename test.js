function calculate() {
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');

    if (!peso.value || !altura.value) {
        if (!peso.value && !altura.value) {
            peso.style.border = '2px solid red';
            altura.style.border = '2px solid red';
        }
        else if (!peso.value) {
            peso.style.border = '2px solid red';
        }
        else {
            altura.style.border = '2px solid red';
        }
    } else {
        peso.style.border = '2px solid black';
        altura.style.border = '2px solid black';
    }
    let imc = (peso.value / ((altura.value / 100) * (altura.value / 100))).toFixed(1);
    const result = document.getElementById('resultado');
    const background = document.getElementById('resultado');

    if (imc < 18.5) {
        background.style.backgroundColor = 'blue'
        result.style.color = 'white';
        result.innerHTML = ` <a> Abaixo do Peso | Seu IMC : ${imc} </a>`;
    }
    else if (imc >= 18.5 && imc < 25) {
        background.style.backgroundColor = 'green'
        result.style.color = 'white';
        result.innerHTML = ` <a> Peso Ideal | Seu IMC: ${imc} </a>`;
    }
    else if (imc >= 25 && imc < 30) {
        background.style.backgroundColor = 'blue'
        result.style.color = 'white';
        result.innerHTML = `<a> Sobrepeso | Seu IMC ${imc} </a>`;
    }
    else if (imc >= 30 && imc < 35) {
        background.style.backgroundColor = 'red'
        result.style.color = 'white';
        result.innerHTML = ` <a> Obesidade Grau I | Seu IMC : ${imc} </a>`;
    }
    else if (imc >= 35 && imc <= 40) {
        background.style.backgroundColor = 'black'
        result.style.color = 'white';
        result.innerHTML = `<a> Obesidade Grau II | Seu IMC : ${imc} </a>`;
    } else if (imc > 40) {
        background.style.backgroundColor = 'black'
        result.style.color = 'white'
        result.innerHTML = `<a> Obesidade III (Mórbida) | Seu IMC: ${imc} </a>`
    } else {
        alert("Inserir os dados necessários")
    }
}

document.getElementById("button-reset").addEventListener("click", () => {
    const divResultado = document.getElementById('resultado')
    divResultado.innerHTML = '';
    divResultado.style.backgroundColor = 'white'
});


