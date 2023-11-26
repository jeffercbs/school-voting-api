import { User } from 'src/users/entities/user.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('candidates')
export class Candidate {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ default: true })
    isActive: boolean;

    @OneToOne(() => User, (User) => User.id)
    user_id: User;
}
