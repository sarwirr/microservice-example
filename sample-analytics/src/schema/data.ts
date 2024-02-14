import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type DataDocument = HydratedDocument<Data>;

@Schema()
export class Data {

@Prop()
email: string;

@Prop()
timestamp: Date;

}

export const DataSchema = SchemaFactory.createForClass(Data);

