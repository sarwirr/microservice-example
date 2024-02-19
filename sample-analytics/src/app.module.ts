import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DataSchema } from './schema/data';
require('dotenv').config(); 
@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGODB_KEY,
    ),
    MongooseModule.forFeature([ {
      name: 'Data',
      schema: DataSchema
    }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
