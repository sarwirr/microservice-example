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

}

export const UserSchema = SchemaFactory.createForClass(User);

