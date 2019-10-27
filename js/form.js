var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoForm(form);
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        limpaMensagensRetorno();
        exibeMensagemDeErro(erros);
        return;
    }

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();

    limpaMensagensRetorno();

    var mensagemSucesso = document.querySelector(".mensagem-retorno").querySelector('span');
    mensagemSucesso.classList.add('mensagem-sucesso');
    mensagemSucesso.textContent = "Paciente incluído com sucesso!";

});


function obtemPacienteDoForm(form){

    paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function exibeMensagemDeErro(erros) {
    var ul = document.querySelector(".mensagem-retorno").querySelector('.mensagens-erro');
    erros.forEach(erro => {
        var li = document.createElement("li");
        li.classList.add('mensagem-erro');
        li.textContent = erro;

        ul.appendChild(li);
    });
}

function limpaMensagensRetorno() {

    var msgRetorno = document.querySelector(".mensagem-retorno");
    msgRetorno.querySelector('span').textContent = "";

    msgRetorno.querySelector('ul').innerHTML = "";
}