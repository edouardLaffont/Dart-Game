import { Document } from 'mongoose';
import { Player } from './player.type';

export interface Game extends Document {
  nbPlayer: Number,
  player: Player,
  created: Date;
}