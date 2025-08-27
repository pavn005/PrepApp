import { Schema, model } from "mongoose";

const userSchema = new Schema(
    {
        name: {type: String,required: true},
        email: {type: String,required: true,unique: true},
        password: {type: String,required: true},
        profileImageUrl: {type: String,default: null},
    },
    {timestamps: true}
);

export default model("User",userSchema);