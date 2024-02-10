import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './schema/user';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Post()
  createUser(@Body()user : CreateUserDto){
    return this.appService.createUser(user);
  }


}
