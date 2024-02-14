import {Injectable } from '@nestjs/common';
import { CreateUserEvent } from './events/create-user.event';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DataDocument } from './schema/data';

@Injectable()
export class AppService {

  constructor(
    @InjectModel('Data') private readonly dataModel: Model<DataDocument>,
  ) {   
  }
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateUserEvent) {
    console.log('handlerUserCreated - ANALYTICS', data);
   this.dataModel.create({email: data.email, timestamp: data.email});
  }
}
