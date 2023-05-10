import mongoose, { Schema } from "mongoose";

export const userSchema: Schema = new mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require: true},
    age: {type: Number, require: false}
});
