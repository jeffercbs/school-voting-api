import { Student } from 'src/students/entities/student.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

@Entity()
export class Certificate {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    code: string;

    @OneToOne(() => Student, (student) => student.id)
    student_id: Student;
}
