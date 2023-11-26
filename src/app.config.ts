import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const DBConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || 'hack4u',
    password: process.env.DB_PASSWORD || '65765750',
    database: process.env.DB_NAME || 'voting',
    synchronize: true,
    autoLoadEntities: true,
};
