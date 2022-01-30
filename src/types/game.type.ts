import { Document } from 'mongoose';
import { GamePlayer } from './game-player.type';

export interface Game extends Document {
  nbPlayer: Number,
  gamePlayer: GamePlayer,
  created: Date;
}