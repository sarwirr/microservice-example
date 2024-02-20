import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Client, ClientsModule, Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user';
require('dotenv').config(); 
@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGODB_KEY,
    ),
    MongooseModule.forFeature([ {
      name: 'User',
      schema: UserSchema
    }]),
    
    ClientsModule.register([
      {
        name: 'COMMUNICATION_SERVICE',
        transport :Transport.TCP,
        options:{
          host : 'communication-api',
          port : 3001
        }
       
      },
      {
        name: 'STAT_SERVICE',
        transport :Transport.TCP,
        options: {   
          port: 3002
        }
      }
  ]),
 ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
