function alerta(){
    alert('Copyright 2024 - Grupo Jardim da Saudade. Todos os direitos reservados. O conteudo não pode ser impresso ou copiado!');
    return false;
}
function verificaBotao(oEvent){
    var oEvent = oEvent ? oEvent : window.event;
    var tecla = (oEvent.keyCode) ? oEvent.keyCode : oEvent.which;
        if(tecla == 17 || tecla == 18|| tecla == 44|| tecla == 106){
            alerta();
        }
}
    document.onkeypress = verificaBotao;
    document.onkeydown = verificaBotao;
    document.onkeyup = verificaBotao;
    document.oncontextmenu = alerta;
