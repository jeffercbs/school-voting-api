import { Role } from 'src/auth/decorators/roles';
import { School } from 'src/schools/entities/school.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column({ default: '' })
    bio: string;

    @Column({ type: 'numeric', precision: 10, scale: 0, unique: true })
    dni: number;

    @Column()
    password: string;

    @Column({ unique: true })
    username: string;

    @Column({ type: 'enum', enum: Role, default: Role.Colaborator })
    role: Role;

    @OneToOne(() => School)
    @JoinColumn({ name: 'school_id' })
    school: School;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
