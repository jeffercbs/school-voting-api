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

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            logger: 'debug',
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'username',
            password: 'password',
            database: 'voting',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
            autoLoadEntities: true,
        }),

        UsersModule,
        CandidatesModule,
        SchoolsModule,
        AuthModule,
        VotesModule,
        EventsModule,
        StudentsModule,
    ],
})
export class AppModule {}
