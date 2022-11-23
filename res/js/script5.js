function clicar(){
    document.getElementById('res').style.display="flex";
    document.getElementById('resposta').style.display="none";
}

function responder(){
    document.addEventListener("keyup", function(e){
        if (e.key === "Enter"){
            resposta = document.getElementById('res').value;
            if (resposta == "pascoa" || resposta == "Pascoa" || resposta == "PASCOA" ||
                resposta == "páscoa" || resposta == "Páscoa" || resposta == "PÁSCOA"){
                location.assign('index6.html');
            }
            else{
                location.reload(true);
            }
        }
    });
}