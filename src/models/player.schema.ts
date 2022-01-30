import * as mongoose from 'mongoose';

export const PlayerSchema = new mongoose.Schema({
    name: String,
    mail: String,
    created: {
        type: Date,
        default: Date.now,
    },
})