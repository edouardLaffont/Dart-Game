import GamePlayer from "./gamePlayer";

export default class Game {
    _id: number;
    _name: string;
    _gamePlayers: Array<GamePlayer>;
    _currentPlayerId: number;
    _status: string; 
    _createdAt: Date;

    constructor(id: number) {
        this._id = id;
        this._status = "drafted";
        this._createdAt = new Date();
        this._name = "";
        this._gamePlayers = [];
        this._currentPlayerId = 0;
    }

    getId(): number {
        return this._id;
    }

    getStatus(): string {
        return this._status;
    }

    getCurrentPlayerId(): number {
        return this._currentPlayerId;
    }

    setName(name: string): void {
        this._name = name;
    }

    setCurrentPlayerId(currentPlayerId: number): void {
        this._currentPlayerId = currentPlayerId;
    }

    setStatus(status: string): void {
        this._status = status;
    }

    addPlayer(player: GamePlayer): void {
        this._gamePlayers.push(player);
    }

    addPlayers(players: Array<GamePlayer>): void {
        this._gamePlayers.concat(players);
    }

    init(): void {
        this._status = 'started';
        this.setCurrentPlayerId(this._gamePlayers[0].getId());
    }

    shoot(points: number, multiplicator: number): void {}

    getCurrentPlayer(): GamePlayer {
        return this._gamePlayers.find(p => p._id === this._currentPlayerId)!
    }

    changeCurrentPlayer(): void {
        if(this._currentPlayerId !== this._gamePlayers.length - 1){
            this.setCurrentPlayerId(this.getCurrentPlayerId() + 1)
        } else {
            this.setCurrentPlayerId(0)
        }
    }

    toString(): string {
        return `${this._name} ${this._status} ${this._currentPlayerId} ${this._createdAt}`
    }

}