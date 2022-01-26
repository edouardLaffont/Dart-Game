import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { Game } from '../types/game.type';
import { CreateGameDTO, UpdateGameDTO } from '../Dto/game.dto';
import { GameService } from '../services/game.service';


@Controller('/games')
export class GameController {

  constructor(private gameService: GameService) {}

  @Get(':id')
  async getGame(@Param('id') id: string): Promise<Game> {
    return await this.gameService.findById(id);
  }
 
  @Get()
  async getGames(): Promise<Game[]> {
    return await this.gameService.findAll();
  }

  @Post()
   async createGame(@Body() game: CreateGameDTO): Promise<Game> {
    return await this.gameService.create(game)
  }

  @Delete(':id')
    async deleteGame(
      @Param('id') id: string
    ): Promise<Game> {
    return await this.gameService.delete(id)
  }
}