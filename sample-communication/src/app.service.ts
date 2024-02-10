import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './events/create_user.event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateUserEvent){
    console.log('User created with email:', data.email);
    
  }
}
