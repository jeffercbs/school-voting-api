import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('votings')
export class Voting {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    ip: string;

    @Column()
    value: string;

    @CreateDateColumn()
    created_at: Date;
}
