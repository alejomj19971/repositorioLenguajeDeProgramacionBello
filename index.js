const btnSumar = document.querySelector('#btnSumar');
const btnMultiplicar = document.querySelector('#btnMultiplicar');

btnSumar.addEventListener('click', () => {
    const numeroUno = document.querySelector('#numeroUno').value;
    const numeroDos = document.querySelector('#numeroDos').value;
    const mostrarResultado = document.querySelector('#mostarResultado');

    if (numeroUno === null || numeroDos === null) {
        mostrarResultado.textContent = 'Uno de los campos está vacios ';
    } else {
        if (isNaN(numeroUno) || isNaN(numeroDos)) {
            mostrarResultado.textContent = 'Los datos ingresados no son números ';
        } else {
            mostrarResultado.textContent = `La suma es ${parseInt(numeroUno) + parseInt(numeroDos)} `;
        }
    }
})

btnMultiplicar.addEventListener('click', () => {
    const numeroUno = document.querySelector('#numeroUno').value;
    const numeroDos = document.querySelector('#numeroDos').value;
    const mostrarResultado = document.querySelector('#mostarResultado');

    if (numeroUno === null || numeroDos === null) {
        mostrarResultado.textContent = 'Uno de los campos está vacios ';
    } else {
        if (isNaN(numeroUno) || isNaN(numeroDos)) {
            mostrarResultado.textContent = 'Los datos ingresados no son números ';
        } else {
            mostrarResultado.textContent = `La multiplicación es ${parseInt(numeroUno) * parseInt(numeroDos)} `;
        }
    }
})

// const sumarNumeros = () => {
//     const numeroUno = document.querySelector('#numeroUno').value;
//     const numeroDos = document.querySelector('#numeroDos').value;
//     const mostrarResultado = document.querySelector('#mostarResultado');

//     if (numeroUno === null || numeroDos === null) {
//         mostrarResultado.textContent = 'Uno de los campos está vacios ';
//     } else {
//         if (isNaN(numeroUno) || isNaN(numeroDos)) {
//             mostrarResultado.textContent = 'Los datos ingresados no son números ';
//         } else {
//             mostrarResultado.textContent = `La suma es ${parseInt(numeroUno) + parseInt(numeroDos)} `;
//         }
//     }
// }

const restarNumeros = () => {
    const numeroUno = document.querySelector('#numeroUno').value;
    const numeroDos = document.querySelector('#numeroDos').value;
    const mostrarResultado = document.querySelector('#mostarResultado');

    if (numeroUno === null || numeroDos === null) {
        mostrarResultado.textContent = 'Uno de los campos está vacios ';
    } else {
        if (isNaN(numeroUno) || isNaN(numeroDos)) {
            mostrarResultado.textContent = 'Los datos ingresados no son números ';
        } else {
            mostrarResultado.textContent = `La resta es ${parseInt(numeroUno) - parseInt(numeroDos)} `;
        }
    }
}

const dividirNumeros = () => {
    const numeroUno = document.querySelector('#numeroUno').value;
    const numeroDos = document.querySelector('#numeroDos').value;
    const mostrarResultado = document.querySelector('#mostarResultado');

    if (numeroUno.value === null || numeroDos.value === null) {
        mostrarResultado.textContent = 'Uno de los campos está vacios ';
    } else {
        if (isNaN(numeroUno) || isNaN(numeroDos)) {
            mostrarResultado.textContent = 'Los datos ingresados no son números ';
        } else {
            if ( numeroDos == 0) {
                mostrarResultado.textContent = 'No se puede dividir por cero ';
            } else {
                mostrarResultado.textContent = `La Division es ${parseInt(numeroUno) / parseInt(numeroDos)} `;
            }
        }
    }
}

const clearHtml = () => {
    const numeroUno = document.querySelector('#numeroUno').value = '';
    const numeroDos = document.querySelector('#numeroDos').value = '';
    const mostrarResultado = document.querySelector('#mostarResultado').textContent = '';
}


