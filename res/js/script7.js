function clicar(){
    document.getElementById('res').style.display="flex";
    document.getElementById('resposta').style.display="none";
}

function responder(){
    document.addEventListener("keyup", function(e){
        if (e.key === "Enter"){
            resposta = document.getElementById('res').value;
            if (resposta == "lagarto" || resposta == "Lagarto" || resposta == "LAGARTO"){
                location.assign('index8.html');
            }
            else{
                location.reload(true);
            }
        }
    });
}