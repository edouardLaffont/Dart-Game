import inquirer from "inquirer";
import Player from './player';
import GamePlayer from './gamePlayer';
import Game from './game';
import ArroundTheWorld from './gamemodes/arroundTheWorld';
import Cricket from './gamemodes/cricket';
import TroisCentUn from "./gamemodes/troisCentUn";

export default class Engine {
    _players: Array<Player> = [new Player(1, 'coco', 'coco'), new Player(2, 'ed', 'ed')];
    _game: Game = new Game(0);

    addPlayer(player: Player): void {
        this._players.push(player)
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
                    type: "input",
                    name: "player_id",
                    message: "Id",
                },
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
                }
            ])
            .then(answer => {
                this.addPlayer(new Player(answer.player_id, answer.player_name, answer.player_mail))
                console.log(`Nouveau joueur : ${answer.player_name}, mail : ${answer.player_mail}`)
                this.start();
            })
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
                        this._game = new ArroundTheWorld(1);
                        break;
                    case '301':
                        this._game = new TroisCentUn(2);
                        break;
                    case 'Cricket':
                        this._game = new Cricket(3);
                        break;
                    default:
                        console.log('Error: this game does not exist.')
                        this.newGame();
                        break;
                }
                this.gameSelected();
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
                    choices: this._players.map((player) => {
                        return {name: player._name, value: player}
                    }),
                },
            ])
            .then(answer => {
                if(answer.players.length == nbPlayers) {
                    answer.players.forEach((player: Player, index: number) => {
                        this._game.addPlayer(new GamePlayer(index, player.getId(), this._game.getId()));
                    });
                    this.gameName()
                } else {
                    console.log(`Please select exactly ${nbPlayers} players.`)
                    this.selectPlayers(nbPlayers)
                }
            })
    }

    async gameName(): Promise<void> {
        await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'gameName',
                    message: 'Give a game name: ',
                    choices: this._players,
                },
            ])
            .then(answer => {
                this._game.setName(answer.gameName);
                this.playing();
            })
    }

    async playing(): Promise<void> {
        await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'points',
                    message: `${this.getCurrentPlayer()._name}, please enter your score: `,
                    choices: this._players,
                },
            ])
            .then(answer => {
                try {
                    this._game.shoot(answer.points, 0);
                    if(this._game.getStatus() !== 'ended'){
                        this.playing()
                    } else {
                        console.log(`Congrate ${this.getCurrentPlayer()._name}, you win !`)
                        this.start()
                    }
                } catch (e) {
                    console.log('Shoot missed')
                    this.playing()
                }
                
            })
    }

    getCurrentPlayer(): Player {
        const currentPlayer: Player = this._players.find(p => p._id === this._game.getCurrentPlayer().getPlayerId())!
        return currentPlayer;
    }
}