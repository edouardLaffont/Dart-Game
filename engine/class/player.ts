export default class Player {
    _id: number;
    _name: string;
    _gameWin: number;
    _gameLost: number;
    _email: string;

    constructor(id: number, name: string, email: string) {
        this._id = id
        this._name = name
        this._email = email
        this._gameWin = 0
        this._gameLost = 0
    }

    getId(): number {
        return this._id
    }

    addGameWin(): void {
        this._gameWin += 1
    }

    addGameLost(): void {
        this._gameWin += 1
    }
}