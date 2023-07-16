import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { VotingsModule } from './votings/votings.module';
import { CandidatesModule } from './candidates/candidates.module';
import { SessionsModule } from './sessions/sessions.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dirname } from 'path';
import { ProfilesModule } from './profiles/profiles.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '.....',
            database: 'test',
            entities: [dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
            autoLoadEntities: true,
        }),
        UsersModule,
        AuthModule,
        VotingsModule,
        CandidatesModule,
        SessionsModule,
        ProfilesModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
