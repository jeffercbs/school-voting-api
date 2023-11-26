import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dirname } from 'path';
import { DBConfig } from './app.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CandidatesModule } from './candidates/candidates.module';
import { CollegesModule } from './colleges/colleges.module';
import { UsersModule } from './users/users.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            ...DBConfig,
            entities: [dirname + '/**/*.entity{.ts,.js}'],
        }),
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        UsersModule,
        CandidatesModule,
        CollegesModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
