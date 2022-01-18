import { Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('/players')
export class PlayerController {
  @Get(':id')
  getPlayer(@Param('id') id: string) {
    return `Player ${id}`
  }
 
  @Get()
  getPlayers() {
    return "Players"
  }

  @Post()
    createPlayer() {
    return "New Player"
  }

  @Delete(':id')
    deletePlayer() {
    return "Delete Player"
  }
}