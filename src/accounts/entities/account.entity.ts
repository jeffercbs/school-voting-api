import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('accounts')
export class Account {
    @PrimaryGeneratedColumn('uuid')
    account_id: string;

    @Column({ type: 'varchar', length: 255 })
    user_id: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    type: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    provider: string;

    @Column({ type: 'varchar', length: 255, nullable: false })
    provider_account_id: string;

    @Column({ type: 'text' })
    refresh_token: string;

    @Column({ type: 'text' })
    access_token: string;

    @Column({ type: 'bigint' })
    expires_at: number;

    @Column({ type: 'text' })
    id_token: string;

    @Column({ type: 'text' })
    scope: string;

    @Column({ type: 'text' })
    session_state: string;

    @Column({ type: 'text' })
    token_type: string;
}
