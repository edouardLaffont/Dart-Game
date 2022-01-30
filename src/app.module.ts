import { Module } from '@nestjs/common';
import { MyTestController } from './app.controller';
import { PlayerController } from './controllers/player-controller'
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI)],
  controllers: [MyTestController, PlayerController],
  
})
export class AppModule {}
