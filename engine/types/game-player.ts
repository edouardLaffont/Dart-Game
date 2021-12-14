export interface GamePlayer {
    id?: number | string
    playerId: number | string
    gameId: number | string
    remainingShots: number | null
    score: number
    rank: null | number
    order: number | null
    inGame: boolean
    createdAt: Date
}