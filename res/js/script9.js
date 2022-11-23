function clicar(){
    document.getElementById('res').style.display="flex";
    document.getElementById('resposta').style.display="none";
}

function responder(){
    document.addEventListener("keyup", function(e){
        if (e.key === "Enter"){
            resposta = document.getElementById('res').value;
            if (resposta == "ludwig" || resposta == "Ludwig" || resposta == "LUDWIG"){
                location.assign('index9.html');
            }
            else{
                location.reload(true);
            }
        }
    });
}