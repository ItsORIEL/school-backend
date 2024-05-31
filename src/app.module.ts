import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassroomsModule } from './classrooms/classrooms.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import envVar from './utilities/envVar';
import { Classroom } from './classrooms/entities/classrooms.entitie';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: envVar.POSTGRES_HOST,
      port: envVar.POSTGRES_PORT,
      username: envVar.POSTGRES_USERNAME,
      password: envVar.POSTGRES_PASSWORD,
      database: envVar.POSTGRES_DB,
      synchronize: true,
      entities: [Classroom], // connecting to all postgres table
    }),
    ClassroomsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
