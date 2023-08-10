import { Module } from '@nestjs/common';
import { join } from 'path';
import { AppController } from './app.controller';
import { GmailModule } from './gmail/gmail.module';
import { GoogleController } from './google/google.controller';
import { ClassroomModule } from './classroom/classroom.module';
import { SchoolModule } from './school/school.module';
import { School } from './entities/school.entity';
import { Classroom } from './entities/classroom.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotFoundController } from './not-found/not-found.controller';


@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: "mysql",
        username: "root",
        password: "z10mz10m",
        host: "localhost",
        database: "coding_skills_workshop",
        synchronize: true,
        logging: true,
        entities: [School, Classroom],
    }),
    GmailModule,
    SchoolModule,
  ],
  controllers: [
    AppController,
    GoogleController,
    NotFoundController,
  ],
})
export class AppModule { }
