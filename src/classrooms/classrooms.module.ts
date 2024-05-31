import { Module } from '@nestjs/common';
import { ClassroomsController } from './classrooms.controller';
import { ClassroomsService } from './classrooms.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Classroom } from './entities/classrooms.entitie';

@Module({
  imports: [TypeOrmModule.forFeature([Classroom])], // connecting to the specific postgres table
  controllers: [ClassroomsController],
  providers: [ClassroomsService],
})
export class ClassroomsModule {}
