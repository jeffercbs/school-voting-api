import { Student } from 'src/students/entities/student.entity';
import { User } from 'src/users/entities/user.entity';
import { Vote } from 'src/votes/entities/vote.entity';
import {
    Column,
    Entity,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('candidates')
export class Candidate {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => Student, (student) => student.id)
    user_id: User;

    @Column({ type: 'varchar', length: 45 })
    position: string;

    @OneToMany(() => Vote, (vote) => vote.candidate_id, { cascade: true })
    votes: Vote[];
}
