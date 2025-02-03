const form = document.getElementById('form-valores');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');

function validaCampos(valorA, valorB) {
    return valorB > valorA;
}

form.addEventListener('submit', function (e) {
    let formEValido = false;
    e.preventDefault();

    const valorA = parseFloat(campoA.value);
    const valorB = parseFloat(campoB.value);
    const mensagemSucesso = `O número B <b>${valorB}</b> é maior que o número A <b>${valorA}</b>.`;

    formEValido = validaCampos(valorA, valorB);

    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        campoA.value = '';
        campoB.value = '';
    } else {
        campoB.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
});

campoB.addEventListener('keyup', function (e) {
    const valorA = parseFloat(campoA.value);
    const valorB = parseFloat(e.target.value);
    const formEValido = validaCampos(valorA, valorB);

    if (!formEValido) {
        campoB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        campoB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});
