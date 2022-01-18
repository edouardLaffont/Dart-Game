import * as mongoose from 'mongoose';

export const PlayerSchema = new mongoose.Schema({
    gameId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Game'
    },
    remainingShots: Number,
    rank: null || Number,
    order: null || Number,
    inGame: {
        type: Boolean,
        default: true
    }
})



