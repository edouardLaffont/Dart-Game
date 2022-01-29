import { Document } from 'mongoose';
import { Game } from './game.type';
import { Player } from './player.type';

export interface GamePlayer extends Document {
    gameId: Game,
    playerId: Player,
    rank?: Number,
    order?: Number,
    inGame: Boolean
}