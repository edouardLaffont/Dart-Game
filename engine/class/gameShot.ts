export default class GameShot {
    _gameId: string = ''
    _playerId: string = ''
    _multiplicator: number = 1
    _sector: number = 1

    constructor(gameId: string, playerId: string, multiplicator: number, sector: number) {
        this._gameId = gameId
        this._playerId = playerId
        this._multiplicator = multiplicator
        this._sector = sector
    }
}