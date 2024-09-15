let score =JSON.parse(localStorage.getItem('score')) || {
    win:0,
    lose:0,
    tie:0
};

document.querySelector('.js-score').innerHTML = `Wins:${score.win} Lose:${score.lose} Ties:${score.tie}`;






function pickComputer(){
            const randomNumber=Math.random();

            let computerMove = '';
        
        if(randomNumber>=0 && randomNumber<1/3){
            computerMove = 'Rock';
        }
        else if(randomNumber>=1/3 && randomNumber<2/3){
            computerMove = 'paper';
        }
        else if(randomNumber>=2/3 && randomNumber<1){
            computerMove = 'Scissors';
        }
   return computerMove;

}

function playGame(playerMove){

    const computerMove = pickComputer();

    let result='';

    if(playerMove=='Scissors'){

                if(computerMove==='Rock'){
                result='You Lose';
            }
            else if(computerMove === 'paper'){
                result='You Win';
            }
            else if(computerMove === 'Scissors'){
                result='Its a Tie';
            }
    } else if(playerMove =='Rock'){

        if(computerMove === 'Rock'){
                result='Its a Tie';
            }
            else if(computerMove === 'paper'){
                result='You Lose';
            }
            else if(computerMove === 'Scissors'){
                result='You Win';
            }

    } else if(playerMove=='paper'){

        if(computerMove === 'Rock'){
                result ='You Win'
            }
            else if(computerMove === 'paper'){
                result ='Its a Tie';
            }
            else if(computerMove === 'Scissors'){
                result='You Lose';
            }

    }


    if(result==='You Win'){
        score.win+=1;
        
        
    }else if(result==='You Lose'){
        score.lose+=1;
        
        
    }else if(result==='Its a Tie'){
        score.tie+=1;
        
        
    }

   

    localStorage.setItem('score',JSON.stringify(score));
    
    
    document.querySelector('.js-score').innerHTML = `Wins:${score.win} Lose:${score.lose} Ties:${score.tie}`;

    document.querySelector('.js-result').innerHTML = result;
    
    document.querySelector('.js-moves').innerHTML = ` You
    <img src="${playerMove}-emoji.png" alt="">
    <img src="${computerMove}-emoji.png" alt="">
    Computer.`;
    
    } 