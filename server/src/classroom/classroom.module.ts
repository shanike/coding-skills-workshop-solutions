import { Module } from '@nestjs/common';
import { ClassroomService } from './classroom.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Classroom } from 'src/entities/classroom.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Classroom]),
    ],
    providers: [ClassroomService],
    exports: [ClassroomService],
})
export class ClassroomModule { }
