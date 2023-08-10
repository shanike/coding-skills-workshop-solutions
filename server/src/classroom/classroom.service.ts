import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Classroom } from 'src/entities/classroom.entity';
import { MoreThanOrEqual, Repository } from 'typeorm';

@Injectable()
export class ClassroomService {
    constructor(
        @InjectRepository(Classroom)
        private readonly classroomRepository: Repository<Classroom>
    ) { }

    async getHighSchoolClassesCount() {
        return await this.classroomRepository.count({
            where: { grade: MoreThanOrEqual("ז") }
        });
    }
}
