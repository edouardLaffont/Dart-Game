import { Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('/games')
export class GameController {
  @Get(':id')
  getGame(@Param('id') id: string) {
    return `Game ${id}`
  }
 
  @Get()
  getGames() {
    return "Games"
  }

  @Post()
    createGame() {
    return "New Game"
  }

  @Delete(':id')
    deleteGame() {
    return "Delete Game"
  }
}