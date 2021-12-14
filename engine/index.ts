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

const players: Array<string> = ["Player1", "Player2", "Player3", "Player4", "Player5", "Player6"];

async function newGame(){
    await inquirer
        .prompt([
            {
                type: 'list',
                name: 'game',
                message: 'Which game do you want to play?',
                choices: ['Tour du Monde', '301', 'Cricket']
            },
        ])
        .then(answers => {
            switch (answers.game) {
                case 'Tour du Monde':
                    console.info(`You start Tour du Monde.`);
                    gameSelected();
                    break;
                case '301':
                    console.info(`You start 301.`);
                    gameSelected();
                    break;
                case 'Cricket':
                    console.info(`You start Cricket.`);
                    gameSelected();
                    break;
            }
        });
}

async function gameSelected(){
    await inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'confirmation',
                message: 'Are you sure?',
            },
        ])
        .then(answer => {
            answer.confirmation? getNbPlayers() : newGame()
        });
}

async function getNbPlayers(){
    await inquirer
        .prompt([
            {
                type: 'input',
                name: 'nbPlayers',
                message: 'How many players are you?',
            },
        ])
        .then(answer => {
            const nbPlayers: Number = answer.nbPlayers
            if(nbPlayers >= 1) {
                selectPlayers(nbPlayers);
            } else {
                console.log('Please select at least 2 players.');
                getNbPlayers()
            }
            
        });
}

async function selectPlayers(nbPlayers: Number){
    await inquirer
        .prompt([
            {
                type: 'checkbox',
                name: 'players',
                message: 'Select your players?',
                choices: players,
            },
        ])
        .then(answer => {
            const players: Array<string> = answer.players
            if(players.length == nbPlayers) {
                console.log(players)
            } else {
                console.log(`Please select exactly ${nbPlayers} players.`)
                selectPlayers(nbPlayers)
            }
        })
}

newGame()
