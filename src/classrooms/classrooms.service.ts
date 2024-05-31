import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Classroom } from './entities/classrooms.entitie';
import { Repository } from 'typeorm';

@Injectable()
export class ClassroomsService {
  constructor(
    @InjectRepository(Classroom)
    private classroomRepository: Repository<Classroom>,
  ) {} // connecting to the specific postgres table

  async getClassroom() {
    return await this.classroomRepository.find();
  }
}
