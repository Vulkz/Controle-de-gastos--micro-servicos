function mudarEmail() {
    alterarBotoesDesabilitados();
    alterarErrosDeEmail();
}

function mudarSenha() {
    alterarBotoesDesabilitados();
    alterarErroDeSenha();
}

function eUmEmailValido() {
    const email = document.getElementById("email").value;

    if (!email) {
        return false;
    }
    return validarEmail(email);
}

function alterarErrosDeEmail() {
   const email = document.getElementById('email').value;
   if (!email) {
        document.getElementById('erro-email-obrigatorio').style.display = "block";
   } else {
        document.getElementById('erro-email-obrigatorio').style.display = "none";
   }

   if (eUmEmailValido(email)) {
        document.getElementById('erro-email-invalido').style.display = "none";
   } else {
        document.getElementById('erro-email-invalido').style.display = "block";
   }
}

function alterarErroDeSenha() {
    const password = document.getElementById('senha').value;

    if (!password) {
        document.getElementById('erro-senha-obrigatoria').style.display = "block";
    } else {
        document.getElementById('erro-senha-obrigatoria').style.display = "none";
    }
}

function alterarBotoesDesabilitados() {
    const emailValido = eUmEmailValido();
    document.getElementById('botao-recuperar-senha').disabled = !emailValido;

    const senhaValida = eUmaSenhaValida();
    document.getElementById('botao-de-login').disabled = !emailValido || !senhaValida;
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
