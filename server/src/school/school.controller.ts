import { Controller, Get } from '@nestjs/common';
import { SchoolService } from './school.service';
import { ClassroomService } from 'src/classroom/classroom.service';


@Controller("/api/school")
export class SchoolController {
    constructor(
        private readonly schoolService: SchoolService,
        private readonly classroomService: ClassroomService,
    ) { }

    @Get("all-school-data")
    async getAllSchoolData() {
        const schools = await this.schoolService.getSchools();
        const numberOfHighSchools = await this.classroomService.getHighSchoolClassesCount();
        return { schools, numberOfHighSchools };
    }

}
