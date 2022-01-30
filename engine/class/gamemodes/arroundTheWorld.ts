import Game from '../game'
import GamePlayer from '../gamePlayer'
export default class arroundTheWorld extends Game {
    constructor(id: number) {
        super(id)
    }

    shoot(points: number, multiplicator: number): void {
        const currentPlayer: GamePlayer = this.getCurrentPlayer()
        if((points - 1) == currentPlayer.getScore()){
            currentPlayer.setScore(points)
            if(points == 4)  {
                this.setStatus('ended')
            } else {
                this.changeCurrentPlayer()
            }
        } else {
            this.changeCurrentPlayer()
            throw new Error('Shoot missed')
        }
    }
}