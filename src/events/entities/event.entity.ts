import { School } from 'src/schools/entities/school.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('events')
export class Event {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 40 })
    name: string;

    @Column({ type: 'varchar', length: 225 })
    description: string;

    @Column({ type: 'date' })
    start_date: Date;

    @Column({ type: 'date' })
    end_date: Date;

    @Column({ type: 'boolean', default: false })
    is_visible: boolean;

    @ManyToOne(() => School, (school) => school.events)
    @JoinColumn({ referencedColumnName: 'id' })
    school: School;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    update_at: Date;
}
