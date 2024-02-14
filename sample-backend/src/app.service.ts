import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schema/user';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ClientProxy } from '@nestjs/microservices';
import * as bcrypt from 'bcrypt';

const hat = require('hat');

@Injectable()
export class AppService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>, 
  @Inject('COMMUNICATION_SERVICE') private readonly communicationClient : ClientProxy,
  ) {}
  
 

  async createUser(user : CreateUserDto): Promise<User> {
    const testuser= await this.findOne (user.email);
    if (testuser) {
      this.communicationClient.emit ('user already exists', user.email);
    }
    const saltOrRounds = 10;
    user.password = await bcrypt.hash(user.password , saltOrRounds);
    const result = await this.userModel.create({ ...user, token: hat() }) 
    
    
     this.communicationClient.emit ('user_created', result);
    
     return(result);
  }

  async findOne(email: string): Promise<User> {
    return this.userModel.findOne({ email: email }).select('-password');
  }


}

