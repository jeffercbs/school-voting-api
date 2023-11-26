import { User } from 'src/users/entities/user.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('colleges')
export class College {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({ type: 'varchar', length: 225 })
    ubication: string;

    @Column()
    description: string;

    @Column({ type: 'varchar', length: 225 })
    website: string;

    @Column({
        default:
            'https://th.bing.com/th/id/OLC.Oydly26ghM2ziw480x360?&rs=1&pid=ImgDetMain',
    })
    logo: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column({ default: false })
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => User, (user) => user.college)
    @JoinTable()
    users: User[];
}
