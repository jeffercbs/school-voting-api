import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
// modules
import { AuthModule } from './auth/auth.module';
import { CandidatesModule } from './candidates/candidates.module';
import { EventsModule } from './events/events.module';
import { SchoolsModule } from './schools/schools.module';
import { StudentsModule } from './students/students.module';
import { UsersModule } from './users/users.module';
import { VotesModule } from './votes/votes.module';
import { CertificateModule } from './certificate/certificate.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'username',
            password: 'password',
            database: 'voting',
            autoLoadEntities: true,
            synchronize: true,
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
        }),

        UsersModule,
        CandidatesModule,
        SchoolsModule,
        AuthModule,
        VotesModule,
        EventsModule,
        StudentsModule,
        CertificateModule,
    ],
})
export class AppModule {}
