import { Voting } from 'src/votings/entities/voting.entity';
import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('candidates')
export class Candidate {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToMany(() => Voting, (Voting) => Voting.candidate)
    voting: Voting[];
}
