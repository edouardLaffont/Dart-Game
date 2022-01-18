import inquirer from "inquirer";
import Player from './player'

export default class Engine {
    players: Array<Player> = [];

   addPlayer(player: Player): void {
    this.players.push(player)
   } 

    async start(): Promise<void>{
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
                        this.newPlayer();
                        break;
                    case 'Commencer':
                        this.newGame();
                        break;
                }
            });
    }

    async newPlayer(): Promise<void> {
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
                        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                    }
                },
            ])
            .then(answer => {
                this.addPlayer(new Player(answer.player_name, answer.player_mail))
                console.log(`Nouveau joueur : ${answer.player_name}, mail : ${answer.player_mail}`)
                this.start();
            }
            )
    }
    

    async newGame(): Promise<void>{
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
                        this.gameSelected();
                        break;
                    case '301':
                        console.info(`You start 301.`);
                        this.gameSelected();
                        break;
                    case 'Cricket':
                        console.info(`You start Cricket.`);
                        this.gameSelected();
                        break;
                }
            });
    }
    
    async gameSelected(): Promise<void>{
        await inquirer
            .prompt([
                {
                    type: 'confirm',
                    name: 'confirmation',
                    message: 'Are you sure?',
                },
            ])
            .then(answer => {
                answer.confirmation? this.getNbPlayers() : this.newGame()
            });
    }
    
    async getNbPlayers(): Promise<void>{
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
                    this.selectPlayers(nbPlayers);
                } else {
                    console.log('Please select at least 2 players.');
                    this.getNbPlayers()
                }
                
            });
    }
    
    async selectPlayers(nbPlayers: Number): Promise<void>{
        await inquirer
            .prompt([
                {
                    type: 'checkbox',
                    name: 'players',
                    message: 'Select your players?',
                    choices: this.players,
                },
            ])
            .then(answer => {
                const players: Array<string> = answer.players
                if(players.length == nbPlayers) {
                    console.log(players)
                } else {
                    console.log(`Please select exactly ${nbPlayers} players.`)
                    this.selectPlayers(nbPlayers)
                }
            })
    }
}