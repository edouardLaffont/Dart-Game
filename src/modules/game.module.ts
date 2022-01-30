import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { GameSchema } from '../models/game.schema';
import { GameController } from '../controllers/game-controller';
import { GameService } from '../services/game.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Game', schema: GameSchema }])],
  providers: [GameService],
  controllers: [GameController],
})
export class GameModule {}