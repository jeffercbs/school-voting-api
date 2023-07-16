import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Profile {
    @PrimaryColumn()
    user_id: string;

    @OneToOne(() => User, (user) => user.profile)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column()
    document: number;

    @Column()
    avatar: string;
}
