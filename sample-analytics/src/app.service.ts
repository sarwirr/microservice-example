import {Injectable } from '@nestjs/common';
import { CreateUserEvent } from './events/create-user.event';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Data, DataDocument } from './schema/data';

@Injectable()
export class AppService {

  constructor(@InjectModel(Data.name) private readonly dataRepository: Model<DataDocument>,
  ) {   
  }
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateUserEvent) {
    console.log('handlerUserCreated - ANALYTICS', data);
    const timestamp = new Date(data.date);
   this.dataRepository.create({email: data.email, timestamp: timestamp});
   
  }
}
