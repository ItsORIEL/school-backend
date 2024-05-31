import { Body, Controller, Get } from '@nestjs/common';
import { ClassroomsService } from './classrooms.service';

@Controller('classrooms') // the path of all the API request of this model
export class ClassroomsController {
  constructor(private readonly classroomsService: ClassroomsService) {}

  @Get()
  async getClassesrooms() {
    return await this.classroomsService.getClassroom();
  }
}
