function clicar(){
    document.getElementById('res').style.display="flex";
    document.getElementById('resposta').style.display="none";
}

function responder(){
    document.addEventListener("keyup", function(e){
        if (e.key === "Enter"){
            resposta = document.getElementById('res').value;
            if (resposta == "memoria ram" || resposta == "Memoria ram" || resposta == "MEMORIA RAM" ||
                resposta == "memória ram" || resposta == "Memória ram" || resposta == "MEMÓRIA RAM"){
                location.assign('index7.html');
            }
            else{
                location.reload(true);
            }
        }
    });
}