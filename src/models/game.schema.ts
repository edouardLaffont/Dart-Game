import * as mongoose from 'mongoose';

export const GameSchema = new mongoose.Schema({
    nbPlayer: Number,
    created: {
        type: Date,
        default: Date.now,
    },
    gamePlayer: {
        type: mongoose.Schema.Types.ObjectId,
    ref: 'GamePlayer',
    }
})