const email = document.getElementById("email");
const senha = document.getElementById("senha");
const mensagem = document.getElementById("mensagem");
const form = document.getElementById("formulario");

form.addEventListener("click", function(event){
    event.preventDefault();

    const valorEmail = email.value
    const valorSenha = senha.value
    if (valorEmail === "" || valorSenha === "") {
        mensagem.innerText = "Preencha seu-email e senha";
        mensagem.style.color = "red"
    } else {
        mensagem.innerText = "Dados preenchidos corretamente";
        mensagem.style.color = "green"
    }
});