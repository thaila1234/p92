NomePlayer1 = localStorage.getItem("NomePlayer1");
NomePlayer2 = localStorage.getItem("NomePlayer2");

player1Score = 0;
player2Score = 0;

document.getElementById("nomePlayer1").innerHTML = NomePlayer1 + " : ";
document.getElementById("nomePlayer2").innerHTML = NomePlayer2 + " : ";

document.getElementById("player1Score").innerHTML = player1Score ;
document.getElementById("player2Score").innerHTML = player2Score ;

document.getElementById("playerPergunta").innerHTML = "Turno de Pergunta - " + NomePlayer1 ;
document.getElementById("playerResposta").innerHTML = "Turno de Resposta - " + NomePlayer2 ;

function send(){
    numero1 = document.getElementById("txtUm").value;
    numero2 = document.getElementById("txtDois").value;
    actualAnswer = parseInt(numero1) * parseInt(numero2);
    question_number = "<h4>" + numero1 + " x " + numero2 + "</h4>";
    input_box = "<br>Resposta: <input type='text' id='txtChecar'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("txtUm").value = " ";
    document.getElementById("txtDois").value = " ";
}

var TurnoResposta = "player1"
var TurnoPergunta = "player2"

function check(){
    getPergunta = document.getElementById("txtChecar").value;
    if(getPergunta == actualAnswer){
        if(TurnoResposta == "player1"){
            player1Score = player1Score + 1;
            document.getElementById("player1Score").innerHTML = player1Score;
        }
        else{
            player2Score = player2Score + 1;
            document.getElementById("player2Score").innerHTML = player2Score;
        }
    }
    if(TurnoPergunta == "player1"){
        TurnoPergunta  = "player2"
        document.getElementById("PlayerPergunta").innerHTML = "Turno de pergunta: " + NomePlayer2;
    }
    else{
        TurnoPergunta = "player1"
        document.getElementById("PlayerPergunta").innerHTML = "Turno de pergunta: " + NomePlayer1;
    }
}