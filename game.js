let random;
let computer_move = '';
let result = '';
let score = JSON.parse(localStorage.getItem('score'));
let autoplay_var;
//eventListener
document.querySelector('.rock-js').addEventListener('click',() => {
    game('rock');
});

document.querySelector('.paper-js').addEventListener('click',() => {
    game('paper');
});

document.querySelector('.scissor-js').addEventListener('click',() => {
    game('scissor');
});

document.body.addEventListener('keydown',(event) => {
    if(event.key === 'r'){
        game('rock');
    }
    else if(event.key === 'p'){
        game('paper');
    }
    else if(event.key === 's'){
        game('scissor');
    }
});


//autoplay
function autoplay(){
    if(document.querySelector('.autoplay-js').innerText === 'Autoplay'){
        autoplay_var =  setInterval(function(){
                                let player_move = random_func()
                                game(player_move)
                            }, 1000);
        document.querySelector('.autoplay-js').innerText = 'Stop';
    }
    else{
        clearInterval(autoplay_var);
        document.querySelector('.autoplay-js').innerText = 'Autoplay';
    }
}


if (score === null){
    score ={
        win:0,
        lose:0,
        tie:0
    };
}
function reset(){
    score.win = 0;
    score.lose = 0;
    score.tie = 0;
    document.querySelector('.score').innerHTML = `score: win=${score.win} lose=${score.lose} tie=${score.tie}`;
    localStorage.removeItem('score');
}
document.querySelector('.score').innerHTML = `score: win=${score.win} lose=${score.lose} tie=${score.tie}`;
function game(user_input){
    if(user_input === 'rock'){
        
        random_func();
        if(computer_move === 'rock')
        {
            result = 'tie';
        }
        else if(computer_move === 'paper')
        {
            result = 'lose';
        }
        else if(computer_move === 'scissor')
        {
            result = 'win';
        }
        if(result === 'win')
        {
            score.win += 1;
            score.lose += 0;
            score.tie += 0;
        }
        else if(result === 'lose')
        {
            score.win += 0;
            score.lose += 1;
            score.tie += 0;
        }
        else if(result === 'tie')
        {
            score.win += 0;
            score.lose += 0;
            score.tie += 1;
        }
        document.querySelector('.score').innerHTML = `score: win=${score.win} lose=${score.lose} tie=${score.tie}`;
        document.querySelector('.choose').innerHTML = `you <img src="${user_input}-emoji.png" class="game_icons">, computer<img src="${computer_move}-emoji.png" class="game_icons">`;
        document.querySelector('.result').innerHTML = `you ${result}`;
        localStorage.setItem('score', JSON.stringify(score));
    }
    else if(user_input === 'paper'){
        random_func();
        if(computer_move === 'rock')
        {
            result = 'win';
        }
        else if(computer_move === 'paper')
        {
            result = 'tie';
        }
        else if(computer_move === 'scissor')
        {
            result = 'lose';
        }
        if(result === 'win')
        {
            score.win += 1;
            score.lose += 0;
            score.tie += 0;
        }
        else if(result === 'lose')
        {
            score.win += 0;
            score.lose += 1;
            score.tie += 0;
        }
        else if(result === 'tie')
        {
            score.win += 0;
            score.lose += 0;
            score.tie += 1;
        }
        document.querySelector('.score').innerHTML = `score: win=${score.win} lose=${score.lose} tie=${score.tie}`;
        document.querySelector('.choose').innerHTML = `you <img src="${user_input}-emoji.png" class="game_icons">, computer<img src="${computer_move}-emoji.png" class="game_icons">`;
        document.querySelector('.result').innerHTML = `you ${result}`;
        localStorage.setItem('score', JSON.stringify(score));
    }
    else if(user_input === 'scissor'){
        random_func();
        if(computer_move === 'rock')
        {
            result = 'lose';
        }
        else if(computer_move === 'paper')
        {
            result = 'win';
        }
        else if(computer_move === 'scissor')
        {
            result = 'tie';
        }
        if(result === 'win')
        {
            score.win += 1;
            score.lose += 0;
            score.tie += 0;
        }
        else if(result === 'lose')
        {
            score.win += 0;
            score.lose += 1;
            score.tie += 0;
        }
        else if(result === 'tie')
        {
            score.win += 0;
            score.lose += 0;
            score.tie += 1;
        }
        document.querySelector('.score').innerHTML = `score: win=${score.win} lose=${score.lose} tie=${score.tie}`;
        document.querySelector('.choose').innerHTML = `you <img src="${user_input}-emoji.png" class="game_icons">, computer<img src="${computer_move}-emoji.png" class="game_icons">`;
        document.querySelector('.result').innerHTML = `you ${result}`;
        localStorage.setItem('score', JSON.stringify(score));
    }
}
function random_func(){
    random = Math.random();
    if(random >= 0 && random < 1/3){
        computer_move = 'rock';
    }
    else if(random >= 1/3 && random < 2/3){
        computer_move = 'paper';
    }
    else if(random >= 2/3 && random < 1){
        computer_move = 'scissor';
    }
    return computer_move;
}