export interface GamePlayer {
    id?: string
    playerId: string
    gameId: string
    remainingShots: number | null
    score: number
    rank: null | number
    order: number | null
    inGame: boolean
    createdAt: Date
}