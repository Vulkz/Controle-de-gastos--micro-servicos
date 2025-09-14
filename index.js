function validarCampos() {
    const emailValido = eUmEmailValido();
    document.getElementById('botao-recuperar-senha').disabled = !emailValido;

    const senhaValida = eUmaSenhaValida();
    document.getElementById('botao-de-login').disabled = !emailValido || !senhaValida;
}

function eUmEmailValido() {
    const email = document.getElementById("email").value;

    if (!email) {
        return false;
    }
    return validarEmail(email);
}

function eUmaSenhaValida() {
    const senha = document.getElementById('senha').value;
    if (!senha) {
        return false;
    }
    return true;
}

function validarEmail(email){
    return /\S+@\S+\.\S+/.test(email);
}
