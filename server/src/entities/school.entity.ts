import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Classroom } from "./classroom.entity";

@Entity()
export class School {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar", length: 100 })
    name?: string;

    /**
     * - A valid school-code is 6 digits long, but just in case we set mysql to allow max 10.
     */
    @Column({ type: "varchar", length: 10, name: "school_code" })
    schoolCode: string;

    @OneToMany(() => Classroom, classroom => classroom.school)
    classrooms: Classroom[];
}
