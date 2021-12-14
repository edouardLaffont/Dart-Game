import type { Game } from "./types/game"
import  { GameClass, threeHundredOne } from "./class/game"

function hello(name: string) {
    console.log(`Hello ${name}`);
}

hello("world");

const bonjour: Game = {
    id: 4,
    mode:'cricket',
    name: 'cricket',
    currentPlayerId: 1,
    status: 'draft',
    createdAt: new Date()

}

const game = new GameClass()
const threeHundredOneGame = new threeHundredOne()

console.log(game.throwDart())
console.log(threeHundredOneGame.setScore())
