var botaoAdicionar = document.querySelector("#adicionar-pacientes")

botaoAdicionar.addEventListener("click", function(){
    console.log("Busando pacientes...");


    var xhr = new XMLHttpRequest();


    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        console.log(xhr.responseText);
    })

    xhr.send();
})