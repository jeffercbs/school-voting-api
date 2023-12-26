import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Certificate {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    code: string;
}
