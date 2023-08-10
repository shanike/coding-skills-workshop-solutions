import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { School } from "./school.entity";

@Entity()
export class Classroom {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar", length: 100 })
    name?: string;

    @Column({ type: "varchar", length: 2 })
    grade: string;

    @Column({ type: "tinyint", unsigned: true, name: "class_number" })
    classNumber: number;

    @ManyToOne(() => School, school => school.classrooms)
    @JoinColumn({ name: "school_id" })
    school: string;
}
