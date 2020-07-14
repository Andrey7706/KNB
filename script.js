function game() {
    let userScore = parseInt(0);
    let computerScore = parseInt(0);
    let win = 'Ты выиграл!';
    let tie = 'Ничья';
    let lose = 'Ты проиграл';
    
    function computerPlay() {
        let random = Math.random();
        if (random <= 0.3333) {
            return 'бумага';
        } else if (random >= 0.6666) {
           return 'камень';
        } else {
            return 'ножницы';
        }
    }

    // функция запуска раунда
    
    function playRound (playerSelection, computerSelection) {
    
        if (playerSelection.toLowerCase() === 'камень') {
            if (computerSelection === 'бумага') {
                computerScore++;
                return lose;
            } else if (computerSelection === 'камень') {
                return tie;
            } else {
                userScore++;
                return win;
            }
        }
    
        if (playerSelection.toLowerCase() === 'ножницы') {
            if (computerSelection === 'бумага') {
                userScore++;
                return win;
            } else if (computerSelection === 'камень') {
                return lose;
                computerScore++;
            } else {
                return tie;
            }
        }
    
        if (playerSelection.toLowerCase() === 'бумага') {
            if (computerSelection === 'бумага') {
                return tie;
            } else if (computerSelection === 'камень') {
                computerScore++;
                return win;
            } else {
                userScore++;
                return lose;
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Выберите ход (камень, ножницы, бумага)');// выбор игрока
        const computerSelection = computerPlay() // выбор компьютера
        const result = playRound(playerSelection, computerSelection) // формируем результаты раунда
        console.log(result, `Твой результат: ${userScore} - результат компьютера: ${computerScore}`) // выводим результат
    }
 }

 game();

 
 