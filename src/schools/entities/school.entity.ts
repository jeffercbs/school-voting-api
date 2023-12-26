import { Event } from 'src/events/entities/event.entity';
import { User } from 'src/users/entities/user.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    OneToOne,
    OneToMany,
} from 'typeorm';

@Entity('schools')
export class School {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    institute: string;

    @Column()
    municipality: string;

    @Column()
    department: string;

    @Column()
    address: string;

    @Column({ default: '' })
    phone: string;

    @Column({ default: '' })
    email: string;

    @Column({ default: '' })
    website: string;

    @Column({ default: '' })
    description: string;

    @Column({ nullable: true, default: null })
    logo: string;

    @Column({ default: 'default.jpg' })
    cover: string;

    @Column({ type: 'boolean', default: false })
    is_active: boolean;

    @OneToOne(() => User, (user) => user.school)
    admin: User;

    @OneToMany(() => User, (user) => user.school, { cascade: true })
    students: User[];

    @OneToMany(() => Event, (event) => event.school, { cascade: true })
    events: Event[];

    @CreateDateColumn()
    created_at: string;
}
