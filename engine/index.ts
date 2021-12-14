import inquirer from "inquirer";


async function start301(){
    await inquirer
        .prompt([
            {
                type: 'list',
                name: 'status',
                message: 'Which game do you want to play ?',
                choices: ['start', 'cancel']
            },
        ])
        .then(answers => {
            switch(answers.status){
                case 'start':
                    console.info(`The game is started`);
                    break;
                case 'cancel':
                    startGame();
                    break;
            }
        });
}

async function startGame(){
    await inquirer
        .prompt([
            {
                type: 'list',
                name: 'game',
                message: 'Which game do you want to play ?',
                choices: ['Tour du Monde', '301', 'Cricket']
            },
        ])
        .then(answers => {
            switch(answers.game){
                case 'Tour du Monde':
                    console.info(`You start Tour du Monde.`);
                    break;
                case '301':
                    start301();
                    break;
                case 'Cricket':
                    console.info(`You start Cricket.`);
                    break;
            }
        });
}

startGame()
