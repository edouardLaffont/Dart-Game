import inquirer from "inquirer";
const emailValidator = require('email-validator');

async function newPlayer() {
      
    await inquirer
        .prompt([
            {
                type: 'input',
                name: 'player_name',
                message: 'Nom du joueur',
            },
            {
                type: "input",
                name: "player_mail",
                message: "Email",
                validate: function(email)
                {
                    // Regex mail check (return true if valid mail)
                    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                }
            },
        ])
        .then(answer => {
            console.log(`Nouveau joueur : ${answer.player_name}, mail : ${answer.player_mail}`)
            start();
        }
        )
    }

async function start() {
    await inquirer
        .prompt([
            {
                type: 'list',
                name: 'init',
                message: 'Bienvenue, merci de bien vouloir entregistrer les nouveaux joueurs avant de lancer une partie',
                choices: ['Nouveau joueur', 'Commencer']
            },
        ])
        .then(answers => {
            switch (answers.init) {
                case 'Nouveau joueur':
                    newPlayer();
                    break;
                case 'Commencer':
                    startGame();
                    break;
            }
        });
}


async function start301() {
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
            switch (answers.status) {
                case 'start':
                    console.info(`The game is started`);
                    break;
                case 'cancel':
                    startGame();
                    break;
            }
        });
}

async function startGame() {
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
            switch (answers.game) {
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

start()
