import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    
    _id;

    @Prop()
    firstname: string;
    
    @Prop()
    lastname: string

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    age: number

    @Prop(
        {
            type: Date,
            default: Date.now
        }
    )
    date: Date


}

export const UserSchema = SchemaFactory.createForClass(User);

