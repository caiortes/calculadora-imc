function calculate()
    {
        const peso   = document.getElementById('peso');
        const altura = document.getElementById('altura');

        if(!peso.value || !altura.value)
        {
            if(!peso.value && !altura.value)
            {
                peso.style.border = '2px solid red';
                altura.style.border = '2px solid red';
            }
            else if(!peso.value)
            {
                peso.style.border = '2px solid red';
            }
            else
            {
                altura.style.border = '2px solid red';
            }
        }
        else
        {
            let imc = (peso.value / ((altura.value / 100) * (altura.value / 100))).toFixed(1);
            const result = document.getElementById('result');
            const background = document.getElementById('resultado');

            if(imc < 18.5)
            {
                background.style.backgroundColor = 'blue'
                result.style.color = 'white';
                result.innerHTML = `Abaixo do Peso | Seu IMC : ${imc}`;
            }
            else if(imc >= 18.5 && imc < 25)
            {
                background.style.backgroundColor = 'green'
                result.style.color = 'white';
                result.innerHTML = ` Peso Ideal | Seu IMC: ${imc}`;
            }
            else if(imc >= 25 && imc < 30){
                background.style.backgroundColor = 'blue'
                result.style.color = 'white';
                result.innerHTML = `Sobrepeso | Seu IMC ${imc}`;
            }
            else if(imc >= 30 && imc < 35) {
                background.style.backgroundColor = 'red'
                result.style.color = 'white';
                result.innerHTML = `Obesidade Grau I | Seu IMC : ${imc}`;
            }
            else if (imc >= 35 && imc <= 40) {
                background.style.backgroundColor = 'black'
                result.style.color = 'white';
                result.innerHTML = `Obesidade Grau II | Seu IMC : ${imc}`;
            } else if (imc > 40) {
                background.style.backgroundColor = 'black'
                result.style.color = 'white'
                result.innerHTML = `Obesidade III (Mórbida) | Seu IMC: ${imc}`
            } else {
                alert("Calculo Inválido!!")
            }
        }
    }
