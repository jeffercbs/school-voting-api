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

    @Column({ default: true })
    isActive: boolean;

    @OneToOne(() => User, (User) => User.id)
    user_id: User;

    @Column()
    is_approved: boolean;

    @Column({ type: 'varchar', length: 225 })
    name: string;

    @Column({ type: 'varchar', length: 45 })
    position: string;

    @Column()
    link: string;

    @OneToMany(() => Vote, (vote) => vote.candidate_id, { cascade: true })
    votes: Vote[];
}
