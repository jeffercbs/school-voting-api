import { Role } from 'src/auth/decorators/roles';
import { School } from 'src/schools/entities/school.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('students')
export class Student {
    @PrimaryColumn({ type: 'numeric', unique: true, precision: 10, scale: 0 })
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    phone: string;

    @Column()
    course: string;

    @Column()
    school_id: string;

    @Column({ default: true })
    isActive: boolean;

    @Column({ type: 'enum', enum: Role, default: Role.Student })
    role: Role;

    @ManyToOne(() => School, (school) => school.students)
    @JoinColumn({ referencedColumnName: 'id' })
    school: School;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
