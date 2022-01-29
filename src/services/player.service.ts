import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreatePlayerDTO } from '../Dto/player.dto';
import { Player } from '../types/player.type';

@Injectable()
export class PlayerService {
  constructor(@InjectModel('Player') private playerModel: Model<Player>) {}

  async create(playerDTO: CreatePlayerDTO) {
    const { name } = playerDTO;
    const player = await this.playerModel.findOne({ name });
    if (player) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const createdPlayer = new this.playerModel(playerDTO);
    await createdPlayer.save();
    return createdPlayer;
  }

  async find() {
    return await this.playerModel.find();
  }

  async findById(id: string): Promise<Player> {
    const player = await this.playerModel.findById(id);
    if (!player) {
      throw new HttpException('No player found', HttpStatus.NO_CONTENT);
    }
    return player;
  }

  async delete(id: string): Promise<Player> {
    const player = await this.playerModel.findById(id);
    await player.remove();
    return player;
  }


}