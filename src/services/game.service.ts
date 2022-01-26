import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Game } from '../types/game.type';
import { Player } from '../types/player.type';
import { CreateGameDTO, UpdateGameDTO } from '../Dto/game.dto';

@Injectable()
export class GameService {
  constructor(@InjectModel('Game') private gameModel: Model<Game>) {}

  async findAll(): Promise<Game[]> {
    return await this.gameModel.find().populate('player');
  }

  async findByOwner(playerId: string): Promise<Game[]> {
    return await this.gameModel.find({ player: playerId }).populate('player');
  }

  async findById(id: string): Promise<Game> {
    const game = await this.gameModel.findById(id).populate('player');
    if (!game) {
      throw new HttpException('No game found', HttpStatus.NO_CONTENT);
    }
    return game;
  }

  async create(gameDTO: CreateGameDTO, player: Player): Promise<Game> {
    const game = await this.gameModel.create({
      ...gameDTO,
      player: player,
    });
    await game.save();
    return game.populate('player');
  }

  async update(
    id: string,
    gameDTO: UpdateGameDTO,
  ): Promise<Game> {
    const game = await this.gameModel.findById(id);
    await game.update(gameDTO);
    return await this.gameModel.findById(id).populate('player');
  }

  async delete(id: string): Promise<Game> {
    const game = await this.gameModel.findById(id);
    await game.remove();
    return game.populate('player');
  }
}