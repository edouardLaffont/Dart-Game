export interface GameShot {
    id: number | string
    gameId: number | string
    playerId: number | string
    multiplicator: number
    sector: number
    createdAt: Date
}