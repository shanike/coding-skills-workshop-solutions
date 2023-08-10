import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Classroom } from 'src/entities/classroom.entity';
import { School } from 'src/entities/school.entity';
import { MoreThan, MoreThanOrEqual, Repository } from 'typeorm';

@Injectable()
export class SchoolService {

    constructor(
        @InjectRepository(School)
        private readonly schoolRepository: Repository<School>,
    ) { }

    async getSchools() {
        const schools = await this.schoolRepository.find();
        return schools;
    }
}
