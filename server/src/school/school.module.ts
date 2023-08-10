import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ClassroomModule } from "src/classroom/classroom.module";
import { School } from "src/entities/school.entity";
import { SchoolController } from "./school.controller";
import { SchoolService } from "./school.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([School]),
        ClassroomModule,
    ],
    providers: [SchoolService],
    controllers: [SchoolController],
})
export class SchoolModule { };
