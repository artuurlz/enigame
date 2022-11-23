function clicar(){
    document.getElementById('res').style.display="flex";
    document.getElementById('resposta').style.display="none";
}

function responder(){
    document.addEventListener("keyup", function(e){
        if (e.key === "Enter"){
            resposta = document.getElementById('res').value;
            if (resposta == "pecado" || resposta == "Pecado" || resposta == "PECADO"){
                location.assign('index2.html');
            }
            else{
                location.reload(true);
            }
        }
    });
}