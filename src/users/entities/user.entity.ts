import { College } from 'src/colleges/entities/college.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    OneToOne,
    PrimaryColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
    @PrimaryColumn({ type: 'numeric', precision: 10, scale: 0, unique: true })
    id: number;

    @Column({ unique: true })
    code: string;

    @Column({ default: true })
    isActive: boolean;

    @Column({ type: 'varchar', length: 225 })
    collegeId: string;

    @OneToOne(() => College, (college) => college.users, {
        cascade: true,
    })
    college: College;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
