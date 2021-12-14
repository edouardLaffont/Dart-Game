export class GameClass {
    hit= 0
    throwDart(target: number = 21): number {
        return Math.floor(Math.random() * target)
    }
    playerScore(score: number): number {
        return score
    }
}

export class threeHundredOne extends GameClass {
    setScore() { 
        this.playerScore(301) - this.throwDart()
    }
    
}
class aroundTheWorld extends GameClass {

}
class cricket extends GameClass {

}