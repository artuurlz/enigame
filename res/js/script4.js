function clicar(){
    document.getElementById('res').style.display="flex";
    document.getElementById('resposta').style.display="none";
}

function responder(){
    document.addEventListener("keyup", function(e){
        if (e.key === "Enter"){
            resposta = document.getElementById('res').value;
            if (resposta == "maceio" || resposta == "Maceio" || resposta == "MACEIO" ||
                resposta == "maceió" || resposta == "Maceió" || resposta == "MACEIÓ"){
                location.assign('index5.html');
            }
            else{
                location.reload(true);
            }
        }
    });
}