var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", () => {
    var pacientes = document.querySelectorAll(".paciente");

    pacientes.forEach(paciente => {
        nomePaciente = paciente.querySelector("td").textContent;

        var expressao = new RegExp(campoFiltro.value, "i");
        
        if( !expressao.test(nomePaciente) && campoFiltro.value.length > 0){
            paciente.classList.add("invisivel");
        } else {
            paciente.classList.remove("invisivel");
        }
    });
});