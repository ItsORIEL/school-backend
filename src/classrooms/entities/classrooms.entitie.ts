import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('classrooms') // setting the table in the server
export class Classroom {
  @PrimaryColumn('text')
  id: string;
  @Column('text')
  name: string;
  @Column('integer')
  cap: number;
}
