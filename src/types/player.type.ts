import { Document } from 'mongoose';

export interface Player extends Document {
    name: String,
    mail: String,
    created: Date;
}