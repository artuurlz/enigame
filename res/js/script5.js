function clicar(){
    document.getElementById('res').style.display="flex";
    document.getElementById('resposta').style.display="none";
}

function responder(){
    document.addEventListener("keyup", function(e){
        if (e.key === "Enter"){
            resposta = document.getElementById('res').value;
            if (resposta == "obstetra" || resposta == "Obstetra" || resposta == "OBSTETRA"){
                location.assign('index6.html');
            }
            else{
                location.reload(true);
            }
        }
    });
}