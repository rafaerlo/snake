let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake=[];
let direction = "right";

snake[0]={
    x: 8*box,
    y: 8*box
}

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0,0,16*box,16*box);
}

function criarCobrinha(){
    for(i=0; i<snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo(){
    criarBG();
    criarCobrinha();

    let snakex = snake[0].x;
    let snakey = snake[0].y;

    //Condições para adicionar novos quadrados
    if(direction=="right") snakex += box;
    if(direction=="left") snakex -= box;
    if(direction=="up") snakey -= box;
    if(direction=="down") snakey += box;

    //removendo quadrados antigos
    snake.pop();

    //Adicionando novo quadrado
    let newHead = {
        x: snakex,
        y: snakey
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo,100);