export default class GamePlayer {
    _id: number;
    _playerId: number;
    _gameId: number;
    _remainingShots: number;
    _score: number;
    _rank: number;
    _order: number;
    _inGame: boolean;

    constructor(id: number, playerId: number, gameId: number) {
        this._id = id
        this._playerId = playerId
        this._gameId = gameId
        this._remainingShots = 0
        this._score = 0
        this._rank = 0
        this._order = 0
        this._inGame = true
    }

    getId(): number {
        return this._id
    }

    getPlayerId(): number {
        return this._playerId
    }

    getScore(): number {
        return this._score
    }

    setScore(score: number): void {
        this._score = score
    }
}
