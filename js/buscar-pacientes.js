var botaoAdicionar = document.querySelector("#adicionar-pacientes")

botaoAdicionar.addEventListener("click", function(){
    console.log("Busando pacientes...");


    var xhr = new XMLHttpRequest();


    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");

        if( xhr.status == 200){
            erroAjax.classList.add("invisivel");
            var responseText;
            var pacientes = JSON.parse(resposta);
            
            pacientes.forEach( function(paciente){
                adicionaPacienteNaTabela(paciente);
            })

        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            
            erroAjax.classList.remove("invisivel");
        
        }
    
    })

    xhr.send();
})