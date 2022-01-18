import Player from "./player"

export default class GamePlayer {
    _playerId: string = ''
    _gameId: string = ''
    _remainingShots: number | null = null
    _rank: null | number = null
    _order: number | null = null
    _inGame: boolean = false

    constructor(playerId: string, gameId: string) {
        this._playerId = playerId
        this._gameId = gameId
        this._remainingShots
        this._rank
        this._order
        this._inGame
    }

}

