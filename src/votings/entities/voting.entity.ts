import { Candidate } from 'src/candidates/entities/candidate.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

@Entity('votings')
export class Voting {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    user_agent: string;

    @Column()
    ip: string;

    @Column()
    cargo: string;

    @Column()
    candidate_id: string;

    @Column()
    @OneToOne(() => Candidate, (candidate) => candidate.voting)
    candidate: Candidate;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;
}
