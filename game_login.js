function addUser(){
    nomePlayer1 = document.getElementById("txtPlayer1").value;
    nomePlayer2 = document.getElementById("txtPlayer2").value;

    localStorage.setItem("Player1", nomePlayer1);
    localStorage.setItem("Player2", nomePlayer2);

    window.location = "game_page.html";
}