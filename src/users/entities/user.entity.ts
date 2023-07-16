import { Role } from 'src/auth/constant';
import { Profile } from 'src/profiles/entities/profile.entity';
import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';

@Entity('user')
export class User {
    @PrimaryColumn()
    id: string;

    @Column({ unique: true })
    ce: string;

    @Column({
        type: 'enum',
        enum: Role,
        default: Role.STUDENT,
    })
    Role: Role;

    @OneToOne(() => Profile, (profile) => profile.user, { cascade: true })
    profile: Profile;
}
